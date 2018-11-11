<template>
  <div class="ListItem" v-on:click="remove" ref="myItem"
  v-bind:style="{ backgroundColor:  (parseInt(evenorodd) ? ColorScheme.primary : ColorScheme.white), color: ColorScheme.black, fontSize: Sizes[size], height: Sizes[size]}">
  <!-- <div class="ListItemRemove" v-on:click="remove" v-bind:style="{ backgroundColor: (parseInt(evenorodd) ? ColorScheme.secondary : ColorScheme.primary)}"></div> -->

    <div class="listItemTxt">
      <div class="txt">{{item.txt}}</div>
      <div class="txtDate" style="font-size: 0.5em">{{moment(item.key).fromNow(true)}} by <b>Nikki</b></div>
    </div>
  </div>
</template>

<script>
import ColorScheme from '../helpers/ColorScheme';
import Sizes from '../helpers/Sizes';
import moment from 'moment';

export default {
  name: 'ListItem',
  props: {item: Object,
  removeItem: Function,
  scheme: String,
  size: String,
  evenorodd: Number

  },
  components:{
    moment
  },
  data () {
    return {
      ColorScheme: ColorScheme[this.scheme],
      Sizes: Sizes,
      moment: moment,
      myItem: null
    }
  },
  created(){

  },
  methods: {

    remove(){

      this.$refs.myItem.style.opacity = "0";
      return;
      setTimeout(() =>{
      this.removeItem(this.item);
    },250);
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
  position: relative;
}
.listItemTxt{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
}
.txt{
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
}
.txtDate{
  text-align: right;
  width: 50%;
}

.ListItemRemove{
  height: 100%;
  width: 25%;
  border-right: 1px solid black
}

@keyframes fadeIn{
  from{
    width: 0px
  }
  to{
    width: 100%
  }
}
</style>
