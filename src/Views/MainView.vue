<template>
  <div class="wrapper">
    <div class="List" v-touch:swipe.up="openMenu">
      <List v-if="!toggleMenu && DataManager.listData[selectedListId]" :id="selectedListId" :data="DataManager.listData[selectedListId]" scheme='red'></List>
  </div>
  <div class="menu" v-touch:swipe.down="closeMenu" v-bind:style="{opacity: (toggleMenu ? '1' : '0'),pointerEvents: (toggleMenu ? 'auto' : 'none')}">
    <div style="font-size: 3em;padding: 10px;width: 5em;height:5em;border:2px solid white; display:flex;justify-content:center;align-items:center;font-weight: lighter;letter-spacing: 10px;text-align:center">
      <p>VUE<br>LIST</p>
    </div>
    <div style="font-size: 1em;padding: 10px;width: 100%;height:5em;border:1px solid #3d3d3d; display:flex;justify-content:center;align-items:center;font-weight: lighter;letter-spacing: 10px;text-align:center">
CREATE NEW LIST</div>
    <div class="menu-items-wrapper">
    <div v-for="(item, index) in DataManager.lists" @click="select(item)" class="menu-item">
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
    },
    newList(){
      this.DataManager.createList();
    }
  },
  created(){

  }
}
</script>

<style>

.List{
  height: 100%;
  width: 100%;
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
  font-size: 2em;
  height: 100%;
  width: 100%;
}
.menu-item{
  padding: 10px;
  border-bottom: 1px solid #3d3d3d;
  font-weight: lighter;
  text-align: center;
  font-size: 1em;
  background: #3d3d3d;
  color: white;
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
