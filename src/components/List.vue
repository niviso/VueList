<template>
  <div class="List"
  v-bind:style="{ backgroundColor: ColorScheme.backgroundColor, color: ColorScheme.fontColor }">
  <div v-bind:style="{ backgroundColor: ColorScheme.primary}">
  <div class="ListTitle">
  <Input style="font-weight: bold" fontSize="l" :onSubmit="setTitle" txtAlign="left" size="l" :submitOnBlur="true" :data="title" :clearOnSubmit="false" :bgColor="ColorScheme.primary" :fontColor="ColorScheme.fontColor"></Input>
  </div>
  <Input fontSize="s" placeholder="New task" fontSizeOnFocus="l" :autoFocus="true" class="ListInput" :autoComplete="history" :onSubmit="additem" size="l" :submitOnBlur="false" :clearOnSubmit="true" txtAlign="center" :bgColor="ColorScheme.primary" :fontColor="ColorScheme.white"></Input>
  </div>
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
    id: Number,
    data: Object,
    save: Function
  },
    components: {
    ListItem,
    Input
  },
  data () {
    return {
      items: [],
      title: "My List",
      history: [],
      ColorScheme: ColorScheme,
      Sizes: Sizes
    }
  },
  created: function(){
    if(this.data){
      this.items = this.data.items || [];
      this.title = this.data.title || 'My List';
      this.history = this.data.history || [];
      this.scheme = this.data.scheme || 'default';
      this.ColorScheme = this.ColorScheme[this.scheme];
    }
  },
  methods: {
      additem (txt) {
        let newItem = {txt: txt, key: Date.now()}
        this.items.push(newItem);
        this.saveList();
      },
      removeItem(removeItem){
        this.items = this.items.filter(function (item) {
          return (item !== removeItem);
        });
        if(this.history.indexOf(removeItem) === -1){
          this.history.push(removeItem);
        }
        this.saveList();

      },
      setTitle(title){
        this.title = title;
        this.saveList();

      },
      generateListObj(){
        return JSON.stringify({title: this.title,scheme: "default", items:this.items,history: this.history});
      },
      saveList(){
        this.save(this.id, this.generateListObj());
      },
      fetchData(){
        let data = LocalStorageHelper.getStorage("list_" + this.id);
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
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}
.ListItems{
  overflow: auto;
  overflow-x: hidden;
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
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
