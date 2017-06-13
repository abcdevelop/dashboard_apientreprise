<template>
  <div class="data-provider">
    <div class="ui card">
      <div class="content">
        <div class="header">{{ name }}</div>
      </div>
      <div :class="classStatus" class="content">
        {{ status }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'data-provider',
  data () {
    return {}
  },
  props: ['name', 'status'],
  computed: {
    classStatus: function () {
      return {
        'status-up': this.status === 'UP',
        'status-down': this.status === 'DOWN'
      }
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
}

.data-provider {
  margin-top: 15px;
  margin-bottom: 15px;
}

.content.status-up {
  text-align: center;
  color: green;
}

.content.status-down {
  text-align: center;
  color: red;
}

.ui.card {
  margin: auto;
}
</style>
