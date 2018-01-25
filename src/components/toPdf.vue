<template>
  <div class="to-pdf">
    <a @click="toPdf">导出PDF</a>
  </div>
</template>

<script>
  import html2canvas from "html2canvas";

  export default {
    methods: {
      toPdf(){
        html2canvas(document.getElementById("app")).then(canvas=>document.body.appendChild(canvas));
      }
    }
  }
</script>

<style>
  .to-pdf{
    text-align: center;
    margin-bottom: 30px;
  }
  .to-pdf a{
    cursor: pointer;
    padding: 5px 10px;
  }
</style>
