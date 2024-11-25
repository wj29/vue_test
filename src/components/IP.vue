<template>
  <h2>这里会显示你的ip</h2>
  <form @submit.prevent="queryIP">
    <label>这是个label</label>
    <input type="text" v-model="ip" />
    <button>提交</button>
  </form>

  <div class="record-history">
    <div class="title">操作记录</div>
    <el-table stripe :data="result" border style="width: 100%">
      <el-table-column prop="id" label="id" width="150px"></el-table-column>
      <el-table-column prop="username" label="操作人" width="200px"></el-table-column>
      <el-table-column prop="created_at" label="操作时间" width="250px"></el-table-column>
    </el-table>
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageObj.curPage"
        :page-sizes="[20, 30, 40, 50]"
        :page-size="pageObj.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageObj.total">
    </el-pagination>
  </div>

</template>

<script>
import http_model from "../models/http"

  export default {
    name: "ip.me",
    data() {
      return {
        desc: "这是个描述",
        ip: "",
        pageObj: {
          curPage: 1,
          total: 0,
          size: 20
        },
        result: []
      };
    },
    async created() {
      await this.queryIP();
    },
    methods: {
      reset() {
        this.ip = ""
      },
      async queryIP() {
        console.log("00001111")
        http_model.get("https://www.baidu.com", {

        }).then((res) => {
          console.log("调用成功了")
          this.result = [
            {
              "id": 3,
              "username": "小王",
              "created_at": "2024-11-25 15:01:45"
            },
            {
              "id": 4,
              "username": "小八",
              "created_at": "2024-11-25 15:01:45"
            },
          ]
          this.pageObj.total = 2
          this.reset()
        })
      },
      handleSizeChange(v) {
        this.pageObj.size = v;
        this.pageObj.curPage = 1;
        this.queryIP();
        this.reset()
      },
      handleCurrentChange(v) {
        this.pageObj.curPage = v;
        this.queryIP();
        this.reset()
      }
    }
  };
</script>

<style scoped>

</style>
