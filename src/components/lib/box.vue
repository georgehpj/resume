<template>
  <div class="box" :class="{'inner-box': innerBox, 'sub-box': subBox}">
    <header class="box-header">
      <slot name="box-header"></slot>
    </header>
    <section class="box-body">
      <slot name="box-body"></slot>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Box",
    props: {
      innerBox: Boolean,
      subBox: Boolean
    }
  }
</script>

<style>
  .box-header {
    width: 400px;
    padding-left: 40px;
    line-height: 32px;
    color: #fff;
    background: linear-gradient(45deg, #666 200px, transparent 200px, transparent 204px, #666 204px, #666 208px, transparent 208px, transparent 300px)
  }

  .box-body {
    padding: 20px 40px 25px;
  }

  .box.inner-box + .box.inner-box{
    padding-top: 20px;
  }

  .box.inner-box > .box-header {
    width: auto;
    color: #333;
    padding-left: 14px;
    position: relative;
    background: linear-gradient(45deg, #eee 320px, transparent 320px, transparent 550px);
  }

  .box.inner-box > .box-header:before {
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 31px;
    top: 0;
    left: 0;
    background-color: #666;
  }

  .box.inner-box > .box-body {
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 0;
  }

  .box.sub-box {
    padding-left: 35px;
    padding-top: 10px;
  }

  .box.sub-box > .box-header {
    width: auto;
    color: #333;
    padding-left: 40px;
    padding-right: 20px;
    background: linear-gradient(45deg, transparent 23px, #eee 23px, #eee 450px)
  }

  .box.sub-box > .box-body {
    padding-left: 40px;
    padding-right: 20px;
    padding-bottom: 0;
  }

  .box-p + .box-p {
    padding-top: 10px;
  }

</style>
