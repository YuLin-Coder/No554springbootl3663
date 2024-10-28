<template>
  <div :style='{"border":"2px solid #dbd9f4","padding":"20px","margin":"10px auto","borderRadius":"8px","background":"#fff","width":"1200px","position":"relative"}'>
    <div class="section-title" :style='{"padding":"20px 0","margin":"0px 0 10px","borderColor":"#cbc9ea","color":"#333","borderRadius":"8px","textAlign":"center","background":"radial-gradient(circle, rgba(231,230,244,1) 0%, rgba(219,217,244,1) 100%)","borderWidth":"1px 2px 4px 2px","fontSize":"20px","lineHeight":"24px","borderStyle":"solid"}'>复试调剂</div>
    <div class="section-content">
      <div class="content-title">{{detail.title}}</div>
      <div class="content-sub-title">发布时间：{{detail.addtime}}</div>
      <el-divider></el-divider>
      <div class="content-detail" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        detail: {},
      }
    },
    created() {
      this.detail = Object.assign({}, JSON.parse(this.$route.query.detailObj));
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .section {
    width: 900px;
    margin: 0 auto;
  }

  .section-content {
      margin-top: 30px;
  }
  .content-title {
      text-align: center;
      font-size: 22px;
      font-weight: bold;
  }
  .content-sub-title {
      text-align: center;
      margin-top: 20px;
      color: #888888;
      font-size: 14px;
  }
</style>