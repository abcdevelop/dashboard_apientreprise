<template>
  <div class="endpoint">
    <ul>
      <li>name : {{ name }}</li>
      <li>status : {{ status }}</li>
      <li>dependencies : {{ dependencies }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'endpoint',
  data () {
    return {}
  },
  props: ['name', 'status', 'dependencies']
}
</script>

