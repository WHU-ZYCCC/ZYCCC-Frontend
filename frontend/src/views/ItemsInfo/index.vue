<template>
  <div>
    <el-row>
      <el-col :span="22"><br></el-col>
      <el-col :span="1">
        <el-button
          style="alignment: center"
          size="mini"
          type="success"
        >添加</el-button>
      </el-col>
    </el-row>
    <el-table
      id="TableTop"
      :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      style="width: 100%"
    >
      <el-table-column
        align="center"
        prop="toolInfo.name"
        label="器材名"
      />
      <el-table-column
        align="center"
        prop="toolInfo.aikey"
        label="器材标签"
      />
      <el-table-column
        align="center"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleRead(scope.$index, scope.row)"
          >查看</el-button>
          <el-button
            size="mini"
            type="warning"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
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
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <span>这是一段器材信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { toolAPI } from '@/api/tool'

export default {
  name: 'Index',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      tableData: [],
      dialogVisible: false
    }
  },
  created() {
    toolAPI().getAll().then(res => {
      this.tableData = res.data
    })
  },
  methods: {
    getAll() {
      toolAPI().getAll().then(res => {
        this.tableData = res.data
      })
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      location.href = '#TableTop'
    },
    handleRead(index, row) {
      console.log('Read ' + 'index:' + index + 'row:' + row)
      this.dialogVisible = true
    },
    handleEdit(index, row) {
      console.log('Edit ' + 'index:' + index + 'row:' + row)
    },
    handleDelete(index, row) {
      this.$confirm('确认删除？')
        .then(_ => {
          toolAPI().deleteById(row.toolInfo.id).then(res => {
            if (res.data === 1) {
              this.tableData.splice(index, 1)
            }
          })
        })
        .catch(_ => {
        })
    },
    handleClose() {
      console.log("")
    }
  }
}
</script>

<style scoped>

</style>
