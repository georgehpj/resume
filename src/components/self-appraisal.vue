<template>
  <box>
    <span slot="box-header">
      自我评价
    </span>
    <div slot="box-body" style="text-indent: 2em" v-html="selfAppraisal">
    </div>
  </box>
</template>

<script>
  export default {
    props: ["selfAppraisal"]
  }
</script>
