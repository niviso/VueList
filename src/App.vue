<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import LocalStorageHelper from "./helpers/LocalStorageHelper";
export default {
  name: 'App',
  data () {
    return {
      LocalStorageHelper: LocalStorageHelper
    }
  },
  created(){
    if(this.LocalStorageHelper.getStorage("CatList") == null) {
      window.location ="/#/new";
    }

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
*{
  padding: 0px;
  margin:0px;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: green;
  width: 100%;
  height: 100%;

}
</style>
