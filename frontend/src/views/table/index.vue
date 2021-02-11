<template>
  <div>
    <el-divider />
    <el-row>
      <el-col :span="3"><br></el-col>
      <el-col :span="21">
        <el-form :inline="true" :model="addData">
          <el-form-item label="姓名">
            <el-input v-model="addData.name" size="small" placeholder="姓名" />
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="addData.school_num" size="small" placeholder="学号" />
          </el-form-item>
          <el-form-item label="日期">
            <el-select v-model="addData.author_level" size="small" placeholder="权限">
              <el-option v-for="(item, index) in author_levels" :key="index" :label="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="Search">搜索</el-button>
            <el-button type="plain" size="mini" @click="getAllUser">刷新</el-button>
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
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
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
          <span style="margin-left: 10px">{{ scope.row.author_level }}</span>
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

export default {
  name: 'Index',
  data() {
    return {
      currentPage: 1,
      pageSize: 6,
      tableData: [],
      allData: [],
      InvalidInputDialogVisible: false,
      UpdatedialogVisible: false,
      author_levels: ['', 1, 2, 3, 4],
      addData: {
        'id': -1,
        'name': '',
        'headimg_url': '',
        'faculty': '',
        'school_num': '',
        'author_level': 4
      },
      upDateData: {
        'id': -1,
        'name': '',
        'headimg_url': '',
        'faculty': '',
        'school_num': '',
        'author_level': 4
      },
      sortState: 0
    }
  },
  created() {
    var that = this
    that.getAllUser()
  },
  methods: {
    getAllUser() {
      console.log()
      var that = this
      axios.get(this.$store.state.userHeadUrl + 'GetAllUser').then(function(response) {
        that.allData = response.data
        that.tableData = response.data
        console.log(that.allData)
      }).catch(function(error) {
        console.log(error)
      })
    },
    deleteUserById(id) {
      axios.delete(this.$store.state.userHeadUrl + 'DeleteUserById/' + id).then(function(response) {
        console.log(response.data)
      }).catch(function(error) {
        console.log(error)
      })
    },
    addUser() {
      var that = this
      axios({
        method: 'post',
        url: this.$store.state.userHeadUrl + 'AddUser',
        data: {
          'id': that.addData.id,
          'name': that.addData.name,
          'headimg_url': that.addData.headimg_url,
          'faculty': that.addData.faculty,
          'school_num': that.addData.school_num,
          'author_level': that.addData.author_level
        },
        transformRequest: [
          function(data) {
            let ret = ''
            for (const it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            ret = ret.substring(0, ret.lastIndexOf('&'))
            return ret
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function(response) {
        that.getAllUser()
      })
    },
    updateUser() {
      var that = this
      axios({
        method: 'post',
        url: this.$store.state.userHeadUrl + 'UpdateUser',
        data: {
          'id': that.upDateData.id,
          'name': that.upDateData.name,
          'headimg_url': that.upDateData.headimg_url,
          'faculty': that.upDateData.faculty,
          'school_num': that.upDateData.school_num,
          'author_level': that.upDateData.author_level
        },
        transformRequest: [
          function(data) {
            let ret = ''
            for (const it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            ret = ret.substring(0, ret.lastIndexOf('&'))
            return ret
          }
        ],
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function(response) {
        that.getAllUser()
      })
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      location.href = '#TableTop'
    },
    IndexOfId(id) {
      var index = -1
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].id === id) {
          index = i
        }
      }
      return index
    },
    handleDelete(id, row) {
      var index = this.IndexOfId(id)
      console.log('index:' + index)
      this.tableData.splice(index, 1)
      if (this.tableData.length % this.pageSize === 0) {
        this.currentPage--
      }
      console.log('id:' + id)
      this.deleteUserById(id)
    },
    handleEdit(id, row) {
      this.UpdatedialogVisible = true
      var index = this.IndexOfId(id)
      this.upDateData = JSON.parse(JSON.stringify(this.tableData[index]))
    },
    commitEdit() {
      this.updateUser()
      this.UpdatedialogVisible = false
    },
    AddUser() {
      var that = this
      if (that.addData.name === '' ||
        that.addData.author_level === '') {
        that.InvalidInputDialogVisible = true
        return
      }
      console.log(that.addData)
      that.addUser()
    },
    Search() {
      var that = this
      that.currentPage = 1
      that.tableData = that.allData.filter(item => {
        return item.name.includes(that.addData.name) &&
          (item.author_level === that.addData.author_level || that.addData.author_level === that.author_levels[0]) &&
          item.faculty.includes(that.addData.faculty) &&
          item.school_num.includes(that.addData.school_num)
      })
      console.log(that.tableData)
    },
    SortById() {
      this.sortState = (this.sortState + 1) % 3
      if (this.sortState === 1) {
        this.tableData.reverse()
      } else if (this.sortState === 2) {
        this.tableData.reverse()
      }
      console.log(this.sortState)
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
