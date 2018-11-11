import LocalStorageHelper from "../helpers/LocalStorageHelper";

const DataManager = {
    lists: [],
    listData: [],
    getLists: function(){
      let result = LocalStorageHelper.getStorage("catlist");
      if(!result){
        window.location ="#/new";
      } else {
        this.lists = result;
        let parsedLists = [];
        for(var list of this.lists){
          parsedLists[list] = LocalStorageHelper.getStorage("list_" + list);
        }
        this.listData = parsedLists;
        console.log(this.listData);
      }
    },
    generateDefaultList: function(id){
      return {
        title: "New list no." + id,
        items: [],
        history: [],
        scheme: "default"
      }
    },
    createList: function(){
      let id = 0;
      let listObj = null;

      if(this.lists){
        id = this.lists.length;
      }

      listObj = this.generateDefaultList(id);
      this.lists.push(id);
      this.listData[id] = listObj;
      LocalStorageHelper.setStorage(JSON.stringify(this.lists),"catlist");
      LocalStorageHelper.setStorage(JSON.stringify(listObj),"list_"+id);
    },
    saveList: function(){

    }

}

export default DataManager;
