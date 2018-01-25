<template>
  <div>
    <div id="app">
      <resume-header :resumeData="resumeData"></resume-header>
      <basic-infos :baseInfos="resumeData.baseInfos"></basic-infos>
      <self-appraisal :selfAppraisal="resumeData.selfAppraisal"></self-appraisal>
      <career-experiences :careerExperiences="resumeData.careerExperiences"></career-experiences>
      <educations :educations="resumeData.educations"></educations>
      <projects-experiences :projectsExperiences="resumeData.projectsExperiences"></projects-experiences>
    </div>
    <to-pdf></to-pdf>
  </div>
</template>

<script>
  import resumeData from "./data";
  import ResumeHeader from "./components/resume-header.vue";
  import BasicInfos from "./components/basic-infos.vue";
  import CareerExperiences from "./components/career-experiences.vue";
  import Educations from "./components/educations.vue";
  import ProjectsExperiences from "./components/projects-experiences.vue";
  import SelfAppraisal from "./components/self-appraisal.vue";
  import ToPdf from "./components/toPdf.vue";

  export default {
    name: 'App',
    components: {
      ResumeHeader,
      BasicInfos,
      CareerExperiences,
      Educations,
      ProjectsExperiences,
      SelfAppraisal,
      ToPdf
    },
    data(){
      return {
          resumeData
      }
    }
  }
</script>
