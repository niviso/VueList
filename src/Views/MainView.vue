<template>
  <div class="wrapper">
    <div class="List" v-touch:swipe.up="openMenu">
      <List :id="1" scheme='red'></List>
  </div>
  <div class="menu" v-touch:swipe.down="closeMenu" v-bind:style="{opacity: (toggleMenu ? '1' : '0'),pointerEvents: (toggleMenu ? 'auto' : 'none')}">
    <div v-for="(item, index) in DataManager.lists">
      {{item}}
      </div>
  </div>

  </div>
</template>

<script>
import List from '../components/List';
import DataManager from "../managers/DataManager";

export default {
  name: 'MainView',
  components: {
    List
  },
  data () {
    return {
      color: "red",
      toggleMenu: false,
      DataManager: DataManager
    }
  },
  methods:{
    openMenu(){
      this.toggleMenu = true;
    },
    closeMenu(){
        this.toggleMenu = false;
    }
  },
  created(){

  }
}
</script>

<style>
.cube{
  width: 200px;
  height: 300px;
  background: red;
}
.menu{

  position: absolute;
  top:0%;
  left:0%;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.25s all ease-in-out;
}
.wrapper {
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top:0%;
  left:0%;
}

@keyframes fadeIn{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>
