<template>
  <div class="wrapper">
    <div class="List" v-touch:swipe.up="openMenu">
      <List v-if="!toggleMenu && DataManager.listData[selectedListId]" :id="selectedListId" :data="DataManager.listData[selectedListId]" scheme='red'></List>
  </div>
  <div class="menu" v-bind:style="{opacity: (toggleMenu ? '1' : '0'),pointerEvents: (toggleMenu ? 'auto' : 'none')}">
    <div style="font-size: 3em;padding: 10px;width: 5em;height:5em;border-top:2px solid white; display:flex;justify-content:center;align-items:center;font-weight: lighter;letter-spacing: 10px;text-align:center">
      <p class="pulse">VUE<br>LIST</p>
    </div>
    <div @click="newList" style="font-size: 1em;padding: 10px;width: 100%;height:5em;border:1px solid #3d3d3d; display:flex;justify-content:center;align-items:center;font-weight: lighter;letter-spacing: 10px;text-align:center">
CREATE NEW LIST</div>
    <div class="menu-items-wrapper">
    <div v-for="(item, index) in DataManager.lists" class="menu-item" v-touch:swipe="toggleDelete(item)">
      <div class="menu-item-inner" v-bind:style="{width: (toggleDeleteTarget == item ? '75%' : '100%')}" @click="select(item)">
      {{DataManager.listData[item].title}}
      </div>
      <div class="menu-item-delete" v-bind:style="{width: (toggleDeleteTarget == item ? '25%' : '0%')}" @click="deleteList">
        <img src="https://img.icons8.com/metro/1600/trash.png" width="20%">
      </div>
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
      toggleDeleteTarget: null,
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
      if(this.toggleDeleteTarget){
        return;
      }
      this.selectedListId = id;
      this.closeMenu();
    },
    newList(){
      this.DataManager.createList();
    },
    toggleDelete(id){
      return (direction, event) => {
      if(direction == "left"){
        this.toggleDeleteTarget = id;
      } else if(direction == "right" && id == this.toggleDeleteTarget) {
        this.toggleDeleteTarget = null;
      }
    }
  },
  deleteList(){
    this.DataManager.deleteList(this.toggleDeleteTarget);
    this.toggleDeleteTarget = null;

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
  overflow: hidden;
}
.menu-items-wrapper{
  font-size: 2em;
  height: 100%;
  width: 100%;
}
.menu-item{
  font-weight: lighter;
  text-align: center;
  font-size: 1em;
  background: #3d3d3d;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.menu-item-inner{
  padding: 10px;
    transition: 0.25s all ease-in-out;
  border-bottom: 1px solid #3d3d3d;
  font-weight: lighter;
  text-align: center;
  font-size: 1em;
  background: #3d3d3d;
  color: white;
}
.menu-item-delete{
      width: 0%;
      transition:0.25s all ease-in-out;
      background: red;
      font-size: 0.5em;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      overflow: hidden;

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

.delete{
  background: red!important;
}

@keyframes fromLeft{
  from{
    width: 0;
  }
  to{
    width: 25%;
  }
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
