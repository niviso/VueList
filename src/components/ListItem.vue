<template>
  <div class="ListItem">
    {{item}}
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {item: String},
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ListItem
{
  width: 100%;
  border-top: 1px solid black;
  padding: 10px;
}
</style>
