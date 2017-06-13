<template>
  <div class="endpoint">
    <div class="ui card">
      <div class="content">
        <div class="header">{{ name }}</div>
      </div>
      <div class="content">
        {{ status }}
      </div>
      <div class="content">
        <div v-for="dependency in dependencies" class="ui green label">
          {{ dependency }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'endpoint',
  data () {
    return {}
  },
  props: ['name', 'status', 'dependencies']
}
</script>

<style scoped>
.endpoint {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
