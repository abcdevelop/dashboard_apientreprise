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
        <div v-for="dataProvider in dataProviders" class="ui green label">
          {{ dataProvider }}
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

  props: ['name', 'dataProviders'],

  computed: {
    // currently the endpoint status is UP only if all its data providers' status are UP
    // TODO add rules for endpoints composed with multiple data providers
    status: function () {
      return this.dataProviders.reduce(function (a, b) {
        return a && (b.status === 'UP')
      }, true) ? 'UP' : 'DOWN'
    }
  }
}
</script>

<style scoped>
.endpoint {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
