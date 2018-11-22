<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import DataManager from "./managers/DataManager";
export default {
  name: 'App',
  data () {
    return {
      DataManager: DataManager
    }
  },
  created(){
    this.DataManager.getLists();

  }
}
</script>

<style>
@import "styles/_general.scss";
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,700,700i');*{
  padding: 0px;
  margin:0px;
}
#app {
font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;

}
</style>
