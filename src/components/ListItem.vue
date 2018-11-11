<template>
  <div class="ListItem" v-on:click="remove" ref="ListItem"
  v-bind:style="{ backgroundColor:  (parseInt(evenorodd) ? ColorScheme.primary : ColorScheme.white), color: ColorScheme.black, fontSize: Sizes[size], height: Sizes[size]}">
  <!-- <div class="ListItemRemove" v-on:click="remove" v-bind:style="{ backgroundColor: (parseInt(evenorodd) ? ColorScheme.secondary : ColorScheme.primary)}"></div> -->

    <div class="listItemTxt">
      <div class="txt">{{item.txt}}</div>
      <div class="txtDate" style="font-size: 0.5em">{{moment(item.key).fromNow(true)}} by <b>{{UserManager.name}}</b></div>
    </div>
  </div>
</template>

<script>
import ColorScheme from '../helpers/ColorScheme';
import Sizes from '../helpers/Sizes';
import UserManager from '../managers/UserManager';

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
      UserManager: UserManager,
      Sizes: Sizes,
      moment: moment,
      deleting: false
    }
  },
  created(){

  },
  methods: {
    remove(){
    this.removeItem(this.item);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ListItem
{
  width: 100%;
  animation: fadeIn 0.25s ease;
  position: relative;
    padding: 10px;
    overflow: hidden;
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

.remove{
  background: red!important;
  animation: fadeOut 0.25s ease;

}
@keyframes fadeOut{
  from{
    width: 100%
  }
  to{
    width: 0px
  }
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
