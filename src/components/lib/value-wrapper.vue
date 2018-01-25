<template>
  <div>
    <div v-if="typeof value === 'string'" v-html="value"></div>
    <template v-if="Array.isArray(value)">
      <ul>
        <li v-for="v in value">{{v}}</li>
      </ul>
    </template>
  </div>
</template>

<script>
    export default {
        name: "ValueWrapper",
        props: ["value"]
    }
</script>
