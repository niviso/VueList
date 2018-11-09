const LocalStorageHelper = {
    getStorage: function(keyName){
      return localStorage.getItem(keyName);
    },
    setStorage: function(data,keyName){
      localStorage.setItem(keyName, data);
    }
}

export default LocalStorageHelper;
