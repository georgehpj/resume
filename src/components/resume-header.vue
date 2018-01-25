<template>
  <header class="resume-header-wrapper">
    <div class="resume-header">
      <div class="title-info">
        <div v-for="titleInfo in titleInfos">
          <label>{{titleInfo.label}}：</label><span>{{titleInfo.value}}</span>
        </div>
      </div>
      <div class="portrait-wrapper">
        <div class="portrait">
          <span>{{name}}</span>
          <img :src="portrait" alt="">
        </div>
      </div>
    </div>
    <div class="cover"></div>
  </header>
</template>

<script>
  import portrait from "../assets/portrait.jpeg";

  export default {
    data(){
      return {
        portrait,
        name: this.resumeData.name,
        titleInfos: this.resumeData.titleInfos
      }
    },
    props: ["resumeData"]
  }
</script>

<style>
  .resume-header-wrapper {
    background-color: #3e3e3e;
    position: relative;
    color: #fff;
    overflow: hidden;
  }

  .resume-header {
    display: flex;
    height: 190px;
  }

  .title-info {
    flex: 5;
    padding-top: 20px;
    padding-left: 40px;
  }

  .title-info > div{
    display: inline-block;
    padding-right: 50px;
    padding-bottom: 10px;
  }

  .portrait-wrapper {
    position: relative;
    flex: 3;
  }

  .portrait {
    position: absolute;
    right: 60px;
    bottom: 12px;
  }

  .portrait span {
    vertical-align: top;
    padding-right: 14px;
    color: #fff;
    font-size: 20px;
  }

  .portrait img {
    height: 140px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .cover {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(5deg, #fff 98px, rgba(0, 0, 0, 0.4) 99px, transparent 103px);
  }
</style>
