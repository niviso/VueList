<template>
  <div id="tacos">
    <List scheme='red'></List>
  </div>
</template>

<script>
import List from '../components/List';
export default {
  name: 'MainView',
  components: {
    List
  },
  data () {
    return {
      color: "red"
    }
  }
}
</script>

<style>
#tacos {

  width: 100%;
  height: 100%;
}
</style>
