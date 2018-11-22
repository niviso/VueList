<template>
  <div class="Wrapper">
    <div class="MenuItem active">
      <img src="../assets/list.png" height="100%">
    </div>
    <div class="MenuItem">
      <img src="../assets/share.png" height="100%">
  
    </div>
    <div class="MenuItem">
      <img src="../assets/me.png" height="100%">
  
    </div>
    <div class="MenuItem">
      <img src="../assets/setting.png" height="100%">
  
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
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
  }
</style>
