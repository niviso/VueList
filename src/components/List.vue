<template>
  <div class="List">
    <Input :onSubmit="setTitle" :submitOnBlur="false" :data="title" :clearOnSubmit="false" :align="left"></Input>
  <Input :onSubmit="additem" :submitOnBlur="false" :clearOnSubmit="true" :align="center"></Input>
  <div v-for="(item, index) in items">
        <ListItem v-bind:item="item"></ListItem>
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
      title: "My List"
    }
  },
  created: function(){
    this.fetchData();
  },
  methods: {
      additem (item) {
        this.items.push(item);
        this.save();
      },
      removeItem(item){

      },
      setTitle(title){
        this.title = title;
        this.save();

      },
      generateListObj(){
        return JSON.stringify({title: this.title, items:this.items});
      },
      save(){
        LocalStorageHelper.setStorage(this.generateListObj(),"list_" + this.id);
        console.log("Saving...");
      },
      fetchData(){
        let data = JSON.parse(LocalStorageHelper.getStorage("list_" + this.id));
        if(data){
          this.items = data.items || [];
          this.title = data.title || 'My List';
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
  max-height: 600px;
  border: 1px solid black;
  overflow: hidden;
}
.NoItems{
  text-align: center;
  padding: 10px;
  font-size: 0.75em;
}
</style>
