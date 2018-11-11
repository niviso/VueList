<template>
  <div class="wrapper">
    <div class="List" v-touch:swipe.up="openMenu">
      <List v-if="!toggleMenu" :id="selectedListId" :data="DataManager.listData[selectedListId]" scheme='red'></List>
  </div>
  <div class="menu" v-touch:swipe.down="closeMenu" v-bind:style="{opacity: (toggleMenu ? '1' : '0'),pointerEvents: (toggleMenu ? 'auto' : 'none')}">
    <img src="../assets/logo.png" alt=" http://www.freepik.com" class="logo" style="margin-bottom: 25px">
    <div class="menu-items-wrapper">
    <div v-for="(item, index) in DataManager.lists" @click="select(item)">
      {{DataManager.listData[item].title}}
      </div>
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
      selectedListId: null,
      toggleMenu: true,
      DataManager: DataManager
    }
  },
  methods:{
    openMenu(){
      this.toggleMenu = true;
    },
    closeMenu(){
      if(this.selectedListId == null){
        return;
      }
      this.toggleMenu = false;
    },
    select(id){
      this.selectedListId = id;
      this.closeMenu();
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
  flex-direction: column;
}
.menu-items-wrapper{
  font-size: 3em;
  height: 100%;
}
.logo{
  padding: 10px;
  border-bottom: 1px solid black;
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
