<template>
  <div>
    <div id="app">
      <resume-header></resume-header>
      <basic-infos></basic-infos>
      <career-experiences></career-experiences>
      <educations></educations>
      <projects-experiences></projects-experiences>
      <self-appraisal></self-appraisal>
    </div>
    <to-pdf></to-pdf>
  </div>
</template>

<script>
import ResumeHeader from "./components/resume-header.vue";
import BasicInfos from "./components/basic-infos.vue";
import CareerExperiences from "./components/career-experiences.vue";
import Educations from "./components/educations.vue";
import ProjectsExperiences from "./components/projects-experiences.vue";
import SelfAppraisal from "./components/self-appraisal.vue";
import ToPdf from "./components/toPdf.vue";

export default {
  name: 'App',
  components:{
    ResumeHeader,
    BasicInfos,
    CareerExperiences,
    Educations,
    ProjectsExperiences,
    SelfAppraisal,
    ToPdf
  }
}
</script>
