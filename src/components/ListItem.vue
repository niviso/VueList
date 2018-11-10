<template>
  <div class="ListItem"
  v-bind:style="{ backgroundColor: ColorScheme.primary, color: ColorScheme.fontColor, fontSize: Sizes['m']}"

  >
    <div class="listItemTxt">
    {{item.txt}}
  </div>
    <div class="ListItemRemove" v-on:click="remove"
    v-bind:style="{ backgroundColor: ColorScheme.secondary}"

    ></div>
  </div>
</template>

<script>
import ColorScheme from '../helpers/ColorScheme';
import Sizes from '../helpers/Sizes';
export default {
  name: 'ListItem',
  props: {item: Object,
  removeItem: Function,
  scheme: String,
  },
  data () {
    return {
      ColorScheme: ColorScheme["red"],
      Sizes: Sizes
    }
  },
  methods: {

    remove(){
      this.removeItem(this.item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ListItem
{
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.25s ease;

}
.listItemTxt{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.ListItemRemove{
  width: 2em;
  height: 2em;
  background: red;
  border-left: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes fadeIn{
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
}
</style>
