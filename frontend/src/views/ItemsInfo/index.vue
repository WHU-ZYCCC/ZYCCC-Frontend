<template>
  <div>
    <el-row style="margin-top: 5px;">
      <el-col :span="5"><br></el-col>
      <el-col :span="19">
        <el-form v-model="searchData" :inline="true">
          <el-form-item label="器材名">
            <el-input v-model="searchData.name" size="small" placeholder="姓名" />
          </el-form-item>
          <el-form-item label="标签">
            <el-select v-model="searchData.tags" size="small" placeholder="日期">
              <el-option v-for="(item, index) in tags" :key="index" :label="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item style="margin-left: 10px">
            <el-button type="primary" size="mini" @click="Search">搜索</el-button>
            <el-button type="plain" size="mini" @click="getAll">刷新</el-button>
            <el-button type="success" size="mini" @click="upload">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="3"></el-col>
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
          >查看/编辑</el-button>
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
            closable
            @close="DeleteTag(tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="tagInputVisible"
            ref="saveTagInput"
            v-model="tagInputValue"
            class="input-new-tag"
            size="small"
            @keyup.enter.native="handleTagInputConfirm"
            @blur="handleTagInputConfirm"
          />
          <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ New Tag</el-button>
        </el-form-item>
        <el-form-item label="器材介绍">
          <el-input v-model="curTool.toolInfo.description" type="textarea" size="small" />
        </el-form-item>
        <el-form-item label="器材图片" />
        <div class="demo-image__lazy" style="text-align: center">
          <el-image :src="curTool.imgUrl" lazy />
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="上传"
      :visible.sync="uploadDialogVisible"
      :show-close="false"
      width="600"
    >
      <el-form :model="uploadTool">
        <el-form-item label="器材名">
          <el-input v-model="uploadTool.name" />
        </el-form-item>
        <el-form-item label="器材介绍">
          <el-input v-model="uploadTool.description" type="textarea" size="small" placeholder="器材功能..." />
        </el-form-item>
        <el-form-item label="器材图片">
          <div class="upload-btn-box">
            <input ref="filElem" type="file" class="upload-file" @change="getFile">
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleUploadConfirm">确 定</el-button>
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
      searchData: {
        name: null,
        tags: null
      },
      tagInputVisible: false,
      uploadDialogVisible: false,
      uploadTool: {
        name: '',
        description: '',
        file: ''
      },
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
    this.getAll()
  },
  methods: {
    getAll() {
      toolAPI().getAll().then(res => {
        res.data.forEach(toolVO => {
          toolVO.toolInfo.aiTags = toolVO.toolInfo.aikey.split(' ')
        })
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
      const tool = {
        id: this.curTool.toolInfo.id,
        name: this.curTool.toolInfo.name,
        description: this.curTool.toolInfo.description,
        aikey: this.curTool.toolInfo.aikey
      }
      console.log(tool)
      toolAPI().update(tool).then(res => {
        console.log(res.data)
        this.$set(this.tableData, this.curIndex, this.curTool)
      })
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
    },
    upload() {
      this.uploadDialogVisible = true
    },
    handleUploadConfirm() {
      this.uploadDialogVisible = false
      toolAPI().upload(this.uploadTool).then(res => {
        this.getAll()
      })
    },
    getFile() {
      var that = this
      const inputFile = this.$refs.filElem.files[0]
      if (inputFile) {
        that.uploadTool.file = inputFile
      } else {
        return
      }
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
.upload-btn-box {
  margin-bottom: 10px;
  button {
    margin-right: 10px;
  }
  input[type=file] {
    display: none;
  }
}
</style>
