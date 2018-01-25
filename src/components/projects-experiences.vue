<template>
  <box>
    <div slot="box-header">
      项目经历
    </div>
    <div slot="box-body">
      <div v-for="projectsExperience in projectsExperiences">
        <box innerBox>
          <header slot="box-header" class="normal-weight">
            <span>{{projectsExperience.from}} ~ {{projectsExperience.to}}</span>
            <span style="padding-left: 20px;">{{projectsExperience.projectName}}</span>
          </header>
          <div slot="box-body" class="clearfix">
            <div v-for="info in projectsExperience.projectInfos" class="flex mb-5">
              <div style="width: 75px;">{{info.label}}：</div>
              <div style="flex: 1;">
                <value-wrapper :value="info.value"></value-wrapper>
              </div>
            </div>
          </div>
        </box>
      </div>
    </div>
  </box>
</template>

<script>
  import resumeData from "../data";

  export default {
      data(){
        return {
          projectsExperiences: resumeData.projectsExperiences
        }
      }
  }
</script>
