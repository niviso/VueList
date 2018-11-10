<template>
  <div class="List">
    <Input :onSubmit="setTitle" :submitOnBlur="false" :data="title" :clearOnSubmit="false"></Input>
  <Input :onSubmit="additem" :submitOnBlur="false" :clearOnSubmit="true"></Input>
  <div v-for="(item, index) in items">
        <ListItem v-bind:item="item" :removeItem="removeItem"></ListItem>
  </div>
  <div v-if="items.length == 0" class="NoItems">No Items</div>
  </div>
</template>

<script>
import ListItem from './ListItem';
import Input from './parts/Input';
import Colors from '../helpers/Colors';
import LocalStorageHelper from '../helpers/LocalStorageHelper';

export default {
  name: 'List',
    components: {
    ListItem,
    Input,
  },
  data () {
    return {
      id: 1,
      colorPrimary: "red",
      colorSecondary: "blue",
      items: [],
      title: "My List",
      history: []
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
}
.NoItems{
  text-align: center;
  padding: 10px;
  font-size: 0.75em;
}
</style>
