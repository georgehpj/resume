<template>
  <box>
    <div slot="box-header">
      自我评价
    </div>
    <div slot="box-body" style="text-indent: 2em">
      {{selfAppraisal}}
    </div>
  </box>
</template>

<script>
  import resumeData from "../data";

  export default {
    data(){
      return {
        selfAppraisal: resumeData.selfAppraisal
      }
    }
  }
</script>
