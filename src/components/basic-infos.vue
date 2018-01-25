<template>
  <box>
    <div slot="box-header">
      基本资料
    </div>
    <div slot="box-body" class=" clearfix">
      <div class="float-half" style="padding-bottom: 5px;"
           v-for="info in baseInfos">
        <label>{{info.label}}：</label><span>{{info.value}}</span>
      </div>
    </div>
  </box>
</template>

<script>
  import resumeData from "../data";

  export default {
    data(){
      return {
        baseInfos: resumeData.baseInfos
      }
    }
  }
</script>
