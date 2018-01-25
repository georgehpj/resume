<template>
  <box>
    <span slot="box-header">
      基本资料
    </span>
    <div slot="box-body" class=" clearfix">
      <div class="float-half" style="padding-bottom: 5px;"
           v-for="info in baseInfos">
        <label>{{info.label}}：</label><span>{{info.value}}</span>
      </div>
    </div>
  </box>
</template>

<script>
  export default {
    props:["baseInfos"]
  }
</script>
