<template>
  <div class="data-form-container" >
    <form  @submit.prevent="handleSubmit" ref="form" >
      <div class="nickname-box">
        <input type="text" maxlength="10" class="nickname" placeholder="请输入昵称" v-model="formData.nickname" />
        <span class="tips">{{formData.nickname.length}} / 10</span>
      </div>
      <div class="error">{{error.nickname}}</div>
      <div class="content-box">
        <textarea  class="textarea" maxlength="3000" placeholder="请输入评论" v-model="formData.content"></textarea>
        <span  class="tips">{{formData.content.length}} / 300</span>
      </div>
      <div class="error">{{error.content}}</div>
      <div :class="[isSubmiting ? 'disabled' : '', 'btn']" @click="handleSubmit">{{isSubmiting ? '提交中...': '提交'}}</div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      formData: {
        nickname: '',
        content: '',
      },
      error: {
        nickname: '',
        content: '',
      },
      isSubmiting: false,
    }
  },
  methods: {
    handleSubmit() {
      this.error.nickname = this.formData.nickname ? '' : '请填写昵称'
      this.error.content = this.formData.content ? '' : '请输入评论内容'
      // if(!this.formData.nickname || !this.formData.content) {
      //   console.log('return')
      //   return;
      // }
      if(this.error.nickname || this.error.content) {
        return;
      }
      this.isSubmiting = true
      this.$emit('submit', this.formData, (msg) => {
        this.$showMessage({
          container: this.$refs.form,
          content: msg,
          type: 'success'
        })
        this.isSubmiting = false
        this.formData.nickname = ''
        this.formData.content = ''
      })
    }
  }
}; 
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.data-form-container {
  width: 100%;
  height:400px;
  .nickname-box, .content-box  {
    width: 50%;
    position: relative;
    .tips {
      position: absolute;
      right: 5px;
      bottom: 14px;
      font-size:12px;
      color: @gray;
    }
  }
  .content-box {
    width: 90%;
    height:200px;
    margin-top: 18px;
  }
  .btn {
    width: 120px;
    height:40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    border: 1px solid @primary;
    margin-top: 28px;
    color:#fff;
    background-color: @primary;
    border-radius:12px;
    letter-spacing: 2px;
    cursor: pointer;
    &:hover {
      background-color: darken(@primary,5%);
    }
    &:disabled {
      cursor: not-allowed;
      background-color: lighten(@primary,10%)
    }
  }
  .nickname, .textarea {
      width: 100%;
      height: 100%;
      border: 1px dashed darken(@gray, 10%);
      font-size: 16px;
      color: @words;
      border-radius: 8px;
      padding: 12px;
      resize: none; // 禁止拉伸
      box-sizing: border-box;
      &:focus {
        outline:none;
        border-color: lighten(@primary, 10%);
        box-shadow: 1px 1px 1px lighten(@primary, 30%);
      }
  }
  .error {
    width: 100%;
    height: 18px;
    font-size:12px;
    color: @danger;
    margin: 4px;
  }
}
</style>