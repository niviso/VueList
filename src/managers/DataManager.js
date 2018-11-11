import LocalStorageHelper from "../helpers/LocalStorageHelper";

const DataManager = {
    lists: [],
    getLists: function(){
      let result = LocalStorageHelper.getStorage("catlist");
      if(!result){
        window.location ="#/new";
      } else {
        this.lists = JSON.parse(result);
      }
    },

    createList: function(){

    }

}

export default DataManager;
