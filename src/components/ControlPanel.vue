<template>
  <div id="control-panel" class="ui centered grid">
    <div class="eight wide column">
      <div class="ui segment">
        <h2 class="ui header">Endpoints</h2>
        <endpoint v-for="endpoint in endpoints" :name="endpoint.name" :status="endpoint.status" :dependencies="endpoint.dependencies"></endpoint>
      </div>
    </div>
    <div class="four wide column">
      <div class="ui segment">
        <h2 class="ui header" style="text-align:center;">Fournisseurs de données</h2>
        <data-provider v-for="provider in dataProviders" :name="provider.name" :status="provider.status"></data-provider>
      </div>
    </div>
  </div>
</template>

<script>
import DataProvider from '@/components/DataProvider'
import Endpoint from '@/components/Endpoint'

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
      ],
      endpoints: [
        {
          name: 'Etablissements',
          status: 'UP',
          dependencies: ['INSEE']
        },
        {
          name: 'Exercices',
          status: 'UP',
          dependencies: ['INSEE', 'Infogreffe']
        },
        {
          name: 'Attestations Fiscales',
          status: 'DOWN',
          dependencies: ['DGFIP']
        }
      ]
    }
  },
  components: {
    'data-provider': DataProvider,
    'endpoint': Endpoint
  }
}
</script>
