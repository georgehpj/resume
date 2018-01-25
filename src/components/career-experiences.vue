<template>
  <box>
    <div slot="box-header">
      工作经历
    </div>
    <div slot="box-body">
      <div v-for="careerExperience in careerExperiences">
        <box innerBox>
          <header slot="box-header" class="normal-weight">
            <span>{{careerExperience.from}} ~ {{careerExperience.to}}</span>
            <span style="padding-left: 20px;">{{careerExperience.company}}</span>
          </header>
          <div slot="box-body">
            <div v-for="companyInfo in careerExperience.companyInfos" class="flex mb-5">
              <div style="width: 75px;">{{companyInfo.label}}：</div>
              <div style="flex: 1;" v-html="companyInfo.value"></div>
            </div>
            <div v-for="career in careerExperience.careers">
              <box subBox>
                <header class="clearfix normal-weight" slot="box-header">
                  <span>{{career.position}}</span>
                  <span class="float-right">{{career.from}} ~ {{career.to}}</span>
                </header>
                <div slot="box-body">
                  <div v-for="careerInfo in career.careerInfos" class="flex mb-5">
                    <div style="width: 75px;">{{careerInfo.label}}：</div>
                    <div style="flex: 1;">
                      <value-wrapper :value="careerInfo.value"></value-wrapper>
                    </div>
                  </div>
                </div>
              </box>
            </div>
          </div>
        </box>
      </div>
    </div>
  </box>
</template>

<script>
  import resumeData from "../data";
  import ValueWrapper from "./lib/value-wrapper";
  export default {
    components: {ValueWrapper},
    data(){
        return {
          careerExperiences: resumeData.careerExperiences
        }
      }
  }
</script>
