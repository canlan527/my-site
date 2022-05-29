<template>
  <div class="project-container">
    <div class="project">
      <ul class="project-list">
        <li
          class="project-list-item"
          v-for="item in projectList"
          :key="item.id"
        >
          <a
            :target="item.url ? '_blank' : '_self'"
            :href="
              item.url
                ? item.url
                : `javascript: alert('该项目为内部项目，外部链接无法访问')`
            "
          >
            <div class="img">
              <img v-lazy="item.thumb" :alt="item.name" />
            </div>
          </a>
          <div class="content">
            <div class="content-top">
              <h3>{{ item.name }}</h3>
              <p v-if="item.github"><a :href="item.github">github地址</a></p>
            </div>
            <div class="desc">{{ item.description }}</div>
          </div>
        </li>
        <i></i><i></i><i></i><i></i>
      </ul>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  computed: {
    ...mapState("project", {
      isloading: "isLoading",
      projectList: "data",
    }),
  },
};
</script>

<style lang="less" scoped>
.project-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  padding: 30px 0;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-image: linear-gradient(120deg, #4463ee, #e733ff);
    background-image: url(~@/assets/images/th.png);
    opacity: 0.7;
    z-index: -1;
  }
  .project {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .project-list {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .project-list-item {
      // float: left;
      width: 40%;
      max-width: 446px;
      min-width: 260px;
      height: 426px;
      // display: inline-block;
      box-sizing: border-box;
      padding: 20px 24px 10px 24px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      // margin: 0 20px 26px 0;
      margin-bottom: 26px;
      border-radius: 12px;
      
      &:hover {
        transition: all 0.4s;
        transform: translate(-5px, -5px);
      }
      .img {
        width: 100%;
        height: 200px;

        img {
          width: 100%;
          height: 100%;
          display: inline-block;
          border-radius: 12px;
        }
      }
      .content {
        width: 100%;
        .desc {
          width: 100%;
          height: 100%;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    /* 和列表一样的宽度和margin值 */
    i {
      width: 40%;
      max-width: 446px;
      min-width: 260px;
    }
  }
  }
  
}
</style>
