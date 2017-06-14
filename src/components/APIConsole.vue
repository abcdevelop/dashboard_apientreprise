<template>
  <div id="api-console" class="ui centered grid">
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
  name: 'api-console',
  data () {
    return {
      dataProviders: [
        {
          id: 1,
          name: 'INSEE',
          status: 'UP'
        },
        {
          id: 2,
          name: 'DGFIP',
          status: 'UP'
        },
        {
          id: 3,
          name: 'Infogreffe',
          status: 'DOWN'
        },
        {
          id: 4,
          name: 'URSSAF',
          status: 'UP'
        }
      ],
      endpoints: [
        {
          id: 1,
          name: 'Etablissements',
          dependencies: [1]
        },
        {
          id: 2,
          name: 'Exercices',
          dependencies: [1, 3]
        },
        {
          id: 3,
          name: 'Attestations Fiscales',
          dependencies: [2]
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
