<template>
    <div class="menu">
        <div class="menu-top">
        <div style="font-size: 3em;padding: 10px;width: 5em;height:5em;  display:flex;justify-content:center;align-items:center;font-weight: lighter;letter-spacing: 10px;text-align:center">
            <p class="pulse">VUE<br>LIST</p>
        </div>
        <div @click="newList" style="font-size: 1em;padding: 10px;width: 100%;height:5em;border:1px solid #3d3d3d; display:flex;justify-content:center;align-items:center;font-weight: lighter;letter-spacing: 10px;text-align:center">
            CREATE NEW LIST
        </div>
    </div>
        <div class="menu-items-wrapper">
            <div v-for="(item, index) in DataManager.lists" class="menu-item" v-touch:swipe="toggleDelete(item)" v-touch-class="'active'">
                <div class="menu-item-inner" v-bind:style="{width: (toggleDeleteTarget == item ? '75%' : '100%')}" @click="select(item)">
                {{DataManager.listData[item].title}}
                </div>

                <div class="menu-item-delete" v-bind:style="{width: (toggleDeleteTarget == item ? '25%' : '0%')}" @click="deleteList">
                <p>x</p>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
  import DataManager from "../managers/DataManager";
  export default {
    name: 'ListSelect',
    props:{
        select: Function
    },
    data() {
      return {
        toggleDeleteTarget: null,
        DataManager: DataManager
      }
    },
    methods: {
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
    }
  }
    </script>


    <style scoped>
  .active {
    background: red!important;
  }
  
  .menu {
    width: 100%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s all ease-in-out;
    flex-direction: column;
    overflow: hidden;
  }
  
  .menu-items-wrapper {
    font-size: 2em;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }
  
  .menu-item {
    font-weight: lighter;
    text-align: center;
    font-size: 1em;
    background: #3d3d3d;
    border-bottom: 1px solid white;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
  
  .menu-item-inner {
    padding: 10px;
    transition: 0.25s all ease-in-out;
    font-weight: lighter;
    text-align: center;
    font-size: 1em;
    background: #3d3d3d;
    color: white;
  }
  
  .menu-item-delete {
    width: 0%;
    transition: 0.25s all ease-in-out;
    background: #AA3F44;
    font-size: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    overflow: hidden;
  }
  
  .logo {
    padding: 10px;
  }
  
  .wrapper {
    width: 100%;
    height: 100%;
    background: white;
    position: absolute;
    top: 0%;
    left: 0%;
  }
  
  .delete {
    background: red!important;
  }
  
  @keyframes fromLeft {
    from {
      width: 0;
    }
    to {
      width: 25%;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>