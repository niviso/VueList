import LocalStorageHelper from "../helpers/LocalStorageHelper";

const DataManager = {
    lists: [],
    getLists: function(){
      let result = LocalStorageHelper.getStorage("catlist");
      if(!result){
        window.location ="#/new";
      } else {
        this.lists = result;
        let parsedLists = [];
        for(var list of this.lists){
          parsedLists.push(LocalStorageHelper.getStorage("list_" + list));
        }
        this.lists = parsedLists;
        console.log(this.lists);
      }
    },

    createList: function(){

    }

}

export default DataManager;
