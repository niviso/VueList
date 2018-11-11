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

    createList: function(){

    }

}

export default DataManager;
