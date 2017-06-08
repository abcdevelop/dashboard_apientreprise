<template>
  <div id="data-provider">
    <ul>
      <li>name : {{ name }}</li>
      <li>status : {{ status }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'data-provider',
  data () {
    return {}
  },
  props: ['name', 'status']
}
</script>

