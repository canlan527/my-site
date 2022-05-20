<template>
  <div class="data-form-container">
    <div class="nickname-box">
      <input type="text" class="nickname" placeholder="请输入昵称" />
      <span class="tips">0 / 10</span>
    </div>
    <div class="content-box">
      <textarea  class="textarea" placeholder="请输入评论"></textarea>
      <span  class="tips">0 / 300</span>
    </div>
    <div class="btn">提交</div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.data-form-container {
  width: 100%;
  height:400px;
  .nickname-box, .content-box  {
    width: 50%;
    height: 36px;
    margin-bottom: 30px;
    position: relative;
    .tips {
      position: absolute;
      right: 5px;
      bottom: 6px;
      font-size:12px;
      color: @gray;
    }
  }
  .content-box {
    width: 90%;
    height:200px;
    margin-bottom: 28px;
  }
  .btn {
    width: 120px;
    height:40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    border: 1px solid @primary;
    color:#fff;
    background-color: @primary;
    border-radius:12px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      background-color: darken(@primary,5%);
    }
  }
  .nickname, .textarea {
      width: 100%;
      height: 100%;
      border: 1px dashed darken(@gray, 10%);
      font-size: 16px;
      color: @words;
      border-radius: 8px;
      padding: 4px;
      padding-left: 12px;
      resize: none; // 禁止拉伸
      &:focus {
        outline:none;
        border-color: lighten(@primary, 10%);
        box-shadow: 1px 1px 1px lighten(@primary, 30%);
      }
    }
}
</style>