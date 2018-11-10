<template>
  <div class="List"
  v-bind:style="{ backgroundColor: ColorScheme.primary, color: ColorScheme.fontColor}"
  >
    <Input :onSubmit="setTitle" size="l" :submitOnBlur="true" :data="title" :clearOnSubmit="false" :bgColor="ColorScheme.white" :fontColor="ColorScheme.primary"></Input>
  <Input :onSubmit="additem" size="m" :submitOnBlur="false" :clearOnSubmit="true" txtAlign="center" :bgColor="ColorScheme.secondary" :fontColor="ColorScheme.fontColor"></Input>
<div class="ListItems">
  <div v-for="(item, index) in items">
        <ListItem v-bind:item="item" :removeItem="removeItem" :scheme="scheme"></ListItem>
  </div>
</div>
  <div v-if="items.length == 0" class="NoItems">No Items</div>
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
      ColorScheme: ColorScheme["red"],
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
  overflow: hidden;
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
.NoItems{
  text-align: center;
}
</style>
