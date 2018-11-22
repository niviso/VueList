<template>
<div class="Wrapper">
  <div class="MenuItem">
  
  </div>
    <div class="MenuItem">
  
  </div>
    <div class="MenuItem">
  
  </div>
    <div class="MenuItem">
  
  </div>
  </div>
</template>

<script>

  
  export default {
    name: 'Menu',
  }
</script>

<style scoped>
  .Wrapper{
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .MenuItem{
      width: 25%;
      height: 4em;
      background: red;
      margin: 1px;
  }
</style>
