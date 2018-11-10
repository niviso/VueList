<template>
  <div id="myView">
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
#myView {
  width: 100%;
  height: 100%;
  background: green;
  position: absolute;
  top:0%;
  left:0%;
}
</style>
