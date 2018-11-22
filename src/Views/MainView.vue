<template>
  <div class="MainView">
  <div class="Content">
    <div class="List" v-touch:swipe.up="openMenu" v-if="!toggleMenu && DataManager.listData[selectedListId]">
      <List :id="selectedListId" :data="DataManager.listData[selectedListId]"></List>
    </div>
    <div v-bind:style="{opacity: (toggleMenu ? '1' : '0'),pointerEvents: (toggleMenu ? 'auto' : 'none')}">
      <ListSelect :select="select"></ListSelect>
    </div>
  </div>

    <Menu class="Menu"></Menu>
  </div>
</template>

<script>
  import List from '../components/List';
  import Menu from './Menu';
  import ListSelect from '../components/ListSelect';
  import DataManager from "../managers/DataManager";
  
  export default {
    name: 'MainView',
    components: {
      List,
      Menu,
      ListSelect
    },
    data() {
      return {
        color: "red",
        selectedListId: null,
        toggleMenu: true,
        toggleDeleteTarget: null,
        DataManager: DataManager
      }
    },
    methods: {
      openMenu() {
        this.toggleMenu = true;
      },
      closeMenu() {
        if (this.selectedListId == null) {
          return;
        }
        this.toggleMenu = false;
      },
      select(id) {
        this.selectedListId = id;
        this.toggleDeleteTarget = null;
        this.closeMenu();
      },
      newList() {
        this.DataManager.createList();
      },
      toggleDelete(id) {
        return (direction, event) => {
          if (direction == "left") {
            this.toggleDeleteTarget = id;
          } else if (direction == "right" && id == this.toggleDeleteTarget) {
            this.toggleDeleteTarget = null;
          }
        }
      },
      deleteList() {
        this.DataManager.deleteList(this.toggleDeleteTarget);
        this.toggleDeleteTarget = null;
  
      }
    },
    created() {
      //this.select(1);
    }
  }
</script>

<style scoped>
  .MainView{
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .Content{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .Menu{
    width: 100%;
    height: 4em;
    background: green;
  }
</style>
