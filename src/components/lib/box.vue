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
      props:{
        innerBox: Boolean,
        subBox: Boolean
      }
    }
</script>

<style>
  .box-header{
    width: 400px;
    padding: 5px 40px;
    color: #fff;
    background:linear-gradient(45deg, #666 200px, transparent 200px, transparent 204px, #666 204px, #666 208px, transparent 208px)
  }
  .box-body{
    padding: 15px 40px;
  }

  .box.inner-box .box-header{
    width: auto;
    color: #333;
    padding:5px 0 5px 14px;
    background:linear-gradient(to right, #666 4px, transparent 4px), linear-gradient(45deg, #eee 320px, transparent 320px);
  }

  .box.inner-box .box-body{
    padding-left: 14px;
  }

  .box.sub-box{
    padding-left: 35px
  }

  .box.sub-box .box-header{
    width: auto;
    color: #333;
    padding:5px 20px 5px 40px;
    background:linear-gradient(45deg, transparent 21px, #eee 21px)
  }

  .box.sub-box .box-body{
    padding-left: 40px;
  }
</style>
