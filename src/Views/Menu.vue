<template>
  <div class="Wrapper">
    <div :class="[view == 'Home' ? 'active' : '', 'MenuItem']" @click="select('Home')">
      Home
    </div>
    <div class="MenuItem" @click="select('List')" :class="[view == 'List' ? 'active' : '', 'MenuItem', selectedListId ? '' : 'inactive']" >
      List

    </div>
    <div class="MenuItem" @click="select('Me')":class="[view == 'Me' ? 'active' : '', 'MenuItem']" >
      Me

    </div>
    <div class="MenuItem" @click="select('Settings')" :class="[view == 'Settings' ? 'active' : '', 'MenuItem']" >
      Settings
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    props: {
      view: String,
      setView: Function,
      selectedListId: Number
    },
    methods:{
      select(i){
        this.setView(i);
      }
    }
  }
</script>

<style scoped>
  .Wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .MenuItem {
    width: calc(25% - 1px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    background: orange;
    color: white;
  }
  .inactive{
    opacity: 0.3;
    pointer-events: none;
  }
</style>
