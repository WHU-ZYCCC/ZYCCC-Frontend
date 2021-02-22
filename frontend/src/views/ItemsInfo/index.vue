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
      title="详情"
      :visible.sync="showDialogVisible"
      :show-close="false"
      width="600"
    >
      <el-form :model="curTool">
        <el-form-item label="器材名">
          <el-input v-model="curTool.toolInfo.name" />
        </el-form-item>
        <el-form-item label="标签" style="margin-bottom: 0px">
          <el-tag
            v-for="tag in curTool.toolInfo.aiTags"
            :key="tag"
            @close="DeleteTag(tag)"
            closable>
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="tagInputVisible"
            v-model="tagInputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleTagInputConfirm"
            @blur="handleTagInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item label="器材介绍">
          <el-input v-model="curTool.toolInfo.description" type="textarea" size="small" placeholder="头像链接" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDialogConfirm">确 定</el-button>
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
      tagInputVisible: false,
      tagInputValue: '',
      currentPage: 1,
      pageSize: 10,
      tableData: [],
      showDialogVisible: false,
      curTool: {
        toolInfo: {
          id: null,
          name: null,
          description: null,
          imagekey: null,
          aikey: null,
          aiTags: null
        },
        curIndex: 0,
        imgUrl: null
      }
    }
  },
  created() {
    toolAPI().getAll().then(res => {
      res.data.forEach(toolVO => {
        toolVO.toolInfo.aiTags = toolVO.toolInfo.aikey.split(' ')
      })
      console.log(res.data)
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
      this.curTool = row
      this.curIndex = index
      this.showDialogVisible = true
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
    DeleteTag(tag) {
      this.curTool.toolInfo.aiTags.splice(this.curTool.toolInfo.aiTags.indexOf(tag), 1)
    },
    handleDialogConfirm() {
      this.showDialogVisible = false
      this.curTool.toolInfo.aikey = this.curTool.toolInfo.aiTags.join(' ')
      this.$set(this.tableData, this.curIndex, this.curTool)
    },
    showTagInput() {
      this.tagInputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleTagInputConfirm() {
      const inputValue = this.tagInputValue
      if (inputValue) {
        this.curTool.toolInfo.aiTags.push(inputValue)
      }
      this.tagInputVisible = false
      this.tagInputValue = ''
    }
  }
}
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
