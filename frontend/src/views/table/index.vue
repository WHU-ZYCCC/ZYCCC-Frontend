<template>
  <div>
    <el-divider />
    <el-row>
      <el-col :span="3"><br></el-col>
      <el-col :span="21">
        <el-form :inline="true">
          <el-form-item label="姓名">
            <el-input size="small" placeholder="姓名" />
          </el-form-item>
          <el-form-item label="学号">
            <el-input size="small" placeholder="学号" />
          </el-form-item>
          <el-form-item label="日期">
            <el-select v-model="selectDate" size="small" placeholder="日期">
              <el-option v-for="(item, index) in dates" :key="index" :label="item" :value="item"/>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">搜索</el-button>
            <el-button type="plain" size="mini" @click="ReFresh">刷新</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      id="TableTop"
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
      @sort-change="SortById"
    >
      <el-table-column
        align="center"
        prop="id"
        label="学号"
        sortable="custom"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="姓名"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="签到时间"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div style="text-align: center;margin-top: 30px;">
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :pager-count="5"
        layout="total, pager"
        :total="tableData.length"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { signInAPI } from '@/api/signin'

export default {
  name: 'Index',
  data() {
    return {
      currentPage: 1,
      selectDate: null,
      pageSize: 7,
      tableData: [],
      allData: [],
      dates: [''],
      sortState: 0
    }
  },
  created() {
    this.getAll()
    this.tableData.push({
      name: 'dzy',
      number: 11111111,
      date: '2020-12-16'
    })
    this.allData = this.tableData
  },
  methods: {
    getAll() {
      const that = this
      signInAPI().getAll().then(res => {
        that.dates = []
        const table = []
        for (const key in res.data) {
          that.dates.push(key)
          for (const id in res.data[key]) {
            table.push(res.data[key][id])
          }
        }
        that.tableData = table
        that.allData = table
      })
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      location.href = '#TableTop'
    },
    SortById() {
      this.sortState = (this.sortState + 1) % 3
      if (this.sortState === 1) {
        this.tableData.reverse()
      } else if (this.sortState === 2) {
        this.tableData.reverse()
      }
    },
    ReFresh() {
      this.getAll()
    }
  }
}
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
