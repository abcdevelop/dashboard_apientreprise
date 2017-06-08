<template>
  <div class="control-panel">
    <data-provider v-for="provider in dataProviders" :name="provider.name" :status="provider.status"></data-provider>
  </div>
</template>

<script>
import DataProvider from '@/components/DataProvider'

export default {
  name: 'control-panel',
  data () {
    return {
      dataProviders: [
        {
          name: 'INSEE',
          status: 'UP'
        },
        {
          name: 'DGFIP',
          status: 'UP'
        },
        {
          name: 'Infogreffe',
          status: 'DOWN'
        },
        {
          name: 'URSSAF',
          status: 'UP'
        }
      ]
    }
  },
  components: {
    'data-provider': DataProvider
  }
}
</script>
