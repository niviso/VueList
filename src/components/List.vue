<template>
  <div class="List"
  v-bind:style="{ backgroundColor: ColorScheme.backgroundColor, color: ColorScheme.fontColor }">
  <div class="ListTitle" v-bind:style="{ backgroundColor: ColorScheme.primary, color: ColorScheme.fontColor }">
    <div class="ListTitleIcon"><img height="100%" src="https://png.pngtree.com/svg/20170217/nav_burger_897433.png"></div>
  <Input style="font-weight: bold" fontSize="l" :onSubmit="setTitle" txtAlign="left" size="l" :submitOnBlur="true" :data="title" :clearOnSubmit="false" :bgColor="ColorScheme.primary" :fontColor="ColorScheme.fontColor"></Input>
</div>
  <Input fontSize="s" fontSizeOnFocus="l" :autoFocus="true" class="ListInput" :autoComplete="history" :onSubmit="additem" size="l" :submitOnBlur="false" :clearOnSubmit="true" txtAlign="center" :bgColor="ColorScheme.primary" :fontColor="ColorScheme.white"></Input>
<div class="ListItems">
  <div v-for="(item, index) in items">
        <ListItem size="m" v-bind:item="item" :removeItem="removeItem" :evenorodd="index%2" :scheme="scheme"></ListItem>
  </div>
  <div v-if="items.length == 0" class="NoItems"  v-bind:style="{fontSize: Sizes['l'], color: ColorScheme.fontColor}">Empty</div>

</div>
  </div>
</template>

<script>
import ListItem from './ListItem';
import Input from './parts/Input';
import ColorScheme from '../helpers/ColorScheme';
import Sizes from '../helpers/Sizes';

import LocalStorageHelper from '../helpers/LocalStorageHelper';

export default {
  name: 'List',
  props: {
    scheme : String
  },
    components: {
    ListItem,
    Input
  },
  data () {
    return {
      id: 1,
      items: [],
      title: "My List",
      history: [],
      ColorScheme: ColorScheme[this.scheme],
      Sizes: Sizes
    }
  },
  created: function(){
    this.fetchData();
  },
  methods: {
      additem (txt) {
        let newItem = {txt: txt, key: Date.now()}
        this.items.push(newItem);
        this.save();
      },
      removeItem(removeItem){
        this.items = this.items.filter(function (item) {
          return (item !== removeItem);
        });
        if(this.history.indexOf(removeItem) === -1){
          this.history.push(removeItem);
        }
        this.save();

      },
      setTitle(title){
        this.title = title;
        this.save();

      },
      generateListObj(){
        return JSON.stringify({title: this.title, items:this.items,history: this.history});
      },
      save(){
        LocalStorageHelper.setStorage(this.generateListObj(),"list_" + this.id);
        console.log("Saving...");
      },
      fetchData(){
        let data = JSON.parse(LocalStorageHelper.getStorage("list_" + this.id));
        if(data){
          this.items = data.items || [];
          this.title = data.title || 'My List',
          this.history = data.history || []
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.List{
  width: 100%;
  max-width: 700px;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.ListItems{
  overflow: auto;
  width: 100%;
  height: 100%;
}
.ListTitle{
  width: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
}
.ListTitleIcon{
  height: 2em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.NoItems{
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.ListInput{
  border-bottom: 1px solid black;
}
</style>
