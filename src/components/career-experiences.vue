<template>
  <box>
    <span slot="box-header">
      工作经历
    </span>
    <div slot="box-body">
      <box innerBox
           v-for="careerExperience in careerExperiences" :key="careerExperience.company">
        <header slot="box-header" class="normal-weight">
          <span>{{careerExperience.from}} ~ {{careerExperience.to}}</span>
          <span style="padding-left: 20px;">{{careerExperience.company}}</span>
        </header>
        <div slot="box-body">
          <div v-for="companyInfo in careerExperience.companyInfos" class="flex box-p">
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
                <div v-for="careerInfo in career.careerInfos" class="flex box-p">
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
  </box>
</template>

<script>
  import ValueWrapper from "./lib/value-wrapper";

  export default {
    components: {ValueWrapper},
    props: ["careerExperiences"]
  }
</script>
