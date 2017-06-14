<template>
  <div id="api-console" class="ui centered grid">
    <div class="eight wide column">
      <div class="ui segment">
        <h2 class="ui header">Endpoints</h2>
        <endpoint v-for="endpoint in endpoints" :name="endpoint.name" :status="endpoint.status" :dependencies="endpoint.dependencies"></endpoint>
      </div>
    </div>
    <div class="four wide column">
      <data-providers-list :data-providers="dataProviders"></data-providers-list>
    </div>
  </div>
</template>

<script>
import DataProvidersList from '@/components/DataProvidersList'
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
    'data-providers-list': DataProvidersList,
    'endpoint': Endpoint
  }
}
</script>
