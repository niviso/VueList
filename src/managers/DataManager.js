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
    deleteList: function(id){
      this.lists = this.lists.filter(function (list) {
        return (list !== id);
      });
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
    saveList: function(id,data){
      console.log(" Saving",id,data);
      LocalStorageHelper.setStorage(data,"list_" + id);
      this.getLists();

    }

}

export default DataManager;
