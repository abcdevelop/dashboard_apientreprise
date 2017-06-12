<template>
  <div id="control-panel">
    <h2>Fournisseurs de données</h2>
    <data-provider v-for="provider in dataProviders" :name="provider.name" :status="provider.status"></data-provider>

    <h2>Endpoints</h2>
    <endpoint v-for="endpoint in endpoints" :name="endpoint.name" :status="endpoint.status" :dependencies="endpoint.dependencies"></endpoint>
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
          dependences: ['INSEE', 'Infogreffe']
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
