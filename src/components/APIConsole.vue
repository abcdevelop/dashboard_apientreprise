<template>
  <div id="api-console" class="ui centered grid">
    <div class="eight wide column">
      <endpoints-list :endpoints="endpointsWithDataProviders"></endpoints-list>
    </div>
    <div class="four wide column">
      <data-providers-list :data-providers="dataProviders"></data-providers-list>
    </div>
  </div>
</template>

<script>
import DataProvidersList from '@/components/DataProvidersList'
import EndpointsList from '@/components/EndpointsList'

export default {
  name: 'api-console',

  data () {
    return {
      dataProviders: [
        {
          id: 1,
          name: 'INSEE',
          status: 'DOWN'
        },
        {
          id: 2,
          name: 'DGFIP',
          status: 'UP'
        },
        {
          id: 3,
          name: 'Infogreffe',
          status: 'UP'
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
          dataProvidersIds: [1]
        },
        {
          id: 2,
          name: 'Exercices',
          dataProvidersIds: [1, 3]
        },
        {
          id: 3,
          name: 'Attestations Fiscales',
          dataProvidersIds: [2]
        }
      ]
    }
  },

  computed: {
    // replace data providers ids by the data providers details
    endpointsWithDataProviders: function () {
      let me = this

      return me.endpoints.map(function (endpoint) {
        let detailedEndpoint = Object.assign({}, endpoint)

        detailedEndpoint.dataProviders = me.dataProviders.filter(function (dataProvider) {
          return endpoint.dataProvidersIds.includes(dataProvider.id)
        })

        delete detailedEndpoint.dataProvidersIds
        return detailedEndpoint
      })
    }
  },

  components: {
    'data-providers-list': DataProvidersList,
    'endpoints-list': EndpointsList
  }
}
</script>
