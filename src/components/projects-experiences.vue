<template>
  <box>
    <span slot="box-header">
      项目经历
    </span>
    <div slot="box-body">
      <box innerBox
           v-for="projectsExperience in projectsExperiences"
           :key="projectsExperience.projectName">
        <header slot="box-header" class="normal-weight">
          <span>{{projectsExperience.from}} ~ {{projectsExperience.to}}</span>
          <span style="padding-left: 20px;">{{projectsExperience.projectName}}</span>
        </header>
        <div slot="box-body" class="clearfix">
          <div v-for="info in projectsExperience.projectInfos" class="flex box-p">
            <div style="width: 75px;">{{info.label}}：</div>
            <div style="flex: 1;">
              <value-wrapper :value="info.value"></value-wrapper>
            </div>
          </div>
        </div>
      </box>
    </div>
  </box>
</template>

<script>
  export default {
    props: ["projectsExperiences"]
  }
</script>
