<template>
  <div class="MainView">
  <div class="Content">
    <div class="List" v-touch:swipe.up="goHome" v-if="DataManager.listData[selectedListId] && view == 'List'">
      <List :id="selectedListId" :save="save" :data="DataManager.listData[selectedListId]"></List>
    </div>
    <div class="ListSelect" v-if="view == 'Home'">
      <ListSelect :select="select"></ListSelect>
    </div>
  </div>
  <div class="Menu">
    <Menu :setView="setView" :view="view"></Menu>
    </div>
  </div>
</template>

<script>
  import List from '../components/List';
  import Menu from './Menu';
  import ListSelect from '../components/ListSelect';
  import DataManager from "../managers/DataManager";
  import State from "../helpers/state";
  export default {
    name: 'MainView',
    components: {
      List,
      Menu,
      ListSelect,
      State
    },
    data() {
      return {
        color: "red",
        view: "Home",
        selectedListId: null,
        toggleDeleteTarget: null,
        DataManager: DataManager,
        State: this.State
      }
    },
    methods: {
      goHome() {
        this.setView("Home");
      },
      setView(view){
        this.view = view;
      },
      select(id) {
        this.selectedListId = id;
        this.toggleDeleteTarget = null;
        this.setView("List");
      },
      save(id,data){
        this.DataManager.saveList(id,data);
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
      console.log(State.view);
      //this.select(1);
    }
  }
</script>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
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
  .ListSelect{
    height: 100%;
    width: 100%;
  }
  .Menu{
    width: 100%;
    height: 4em;
    background: white;
    border-top: 5px solid orange;
  }
</style>
