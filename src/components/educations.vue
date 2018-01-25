<template>
  <box>
    <span slot="box-header">
      教育经历
    </span>
    <div slot="box-body">
      <div v-for="education in educations">
        <box innerBox>
          <header slot="box-header" class="normal-weight">
            <span>{{education.from}} ~ {{education.to}}</span>
            <span style="padding-left: 20px;">{{education.name}}</span>
          </header>
          <div slot="box-body" class="clearfix">
            <div class="float-one-third" style="padding-bottom: 5px;"
                 v-for="info in education.educationInfos">
              <label>{{info.label}}：</label><span>{{info.value}}</span>
            </div>
          </div>
        </box>
      </div>
    </div>
  </box>
</template>

<script>
  export default {
    props: ["educations"]
  }
</script>
