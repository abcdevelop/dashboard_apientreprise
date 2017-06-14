<template>
  <div id="data-providers-list">
    <div class="ui segment">
      <h2 class="ui header" style="text-align:center;">Fournisseurs de données</h2>
      <data-provider v-for="provider in dataProviders" :name="provider.name" :status="provider.status"></data-provider>
    </div>
  </div>
</template>

<script>
import DataProvider from '@/components/DataProvider'

export default {
  name: 'data-providers-list',
  data () {
    return {}
  },
  props: ['dataProviders'],
  components: {
    'data-provider': DataProvider
  }
}
</script>
