<template>
  <div id="endpoints-list">
    <div class="ui segment">
      <h2 class="ui header">Endpoints</h2>
      <endpoint v-for="endpoint in endpoints" :name="endpoint.name" :dependencies="endpoint.dependencies"></endpoint>
    </div>
  </div>
</template>

<script>
import Endpoint from '@/components/Endpoint'

export default {
  name: 'endpoints-list',
  data () {
    return {}
  },
  props: ['endpoints'],
  components: {
    endpoint: Endpoint
  }
}
</script>
