<template>
  <div class="ListItem" v-on:click="remove"
  v-bind:style="{ backgroundColor:  (parseInt(evenorodd) ? ColorScheme.white : ColorScheme.primary), color: ColorScheme.black, fontSize: Sizes[size], height: Sizes[size]}">
  <!-- <div class="ListItemRemove" v-on:click="remove" v-bind:style="{ backgroundColor: (parseInt(evenorodd) ? ColorScheme.secondary : ColorScheme.primary)}"></div> -->

    <div class="listItemTxt">{{item.txt}}</div>
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
  size: String,
  evenorodd: Number

  },
  data () {
    return {
      ColorScheme: ColorScheme[this.scheme],
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.25s ease;
  padding: 10px;
}
.listItemTxt{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
}

.ListItemRemove{
  height: 100%;
  width: 25%;
  border-right: 1px solid black
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
