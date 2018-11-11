<template>
  <div id="myView">
    <div class="wrapper">

      <div class="content" :style="{ display: (stage == 1 ? 'flex' : 'none')}" @click="stage = 2">
        <div style="font-size: 3em;padding: 10px;"><b>Catlist</b></div>

        <img src="../assets/logo.png" alt=" http://www.freepik.com" class="logo pulse">
        <div style="font-size: 1em;padding: 10px;margin-top: 50px;opacity: 0.4"><b>Paw anywhere to continue</b></div>

      </div>
      <div class="content" :style="{ display: (stage == 2 ? 'flex' : 'none')}" @click="stage = 3">
        <div class="text">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
    </div>
      <div class="content" :style="{ display: (stage == 3 ? 'flex' : 'none')}">
        <img src="../assets/logo.png" alt=" http://www.freepik.com" class="logo" style="margin-bottom: 25px">

        <Input size="l" fontSize="m" placeholder="Username" txtAlign="center" bgColor="white" fontColor="black" fontSizeOnFocus="l"  :submitOnBlur="true" :onSubmit="setName"></Input>
        <Input size="l" type="password" fontSize="m" placeholder="Password" txtAlign="center" bgColor="white" fontColor="black" fontSizeOnFocus="l" :submitOnBlur="true" :onSubmit="setPassword"></Input>
        <div style="width: 100%; padding: 10px;text-align:center; background: black;color:white;margin-bottom: 100px;font-size: 1em" @click="test">Create a new user</div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/parts/Input';
import UserManager from '../managers/UserManager';
import DataManager from '../managers/DataManager';

export default {
  name: 'NewProfile',
  components:{
    Input
  },
  data () {
    return {
      color: "red",
      stage: 1,
      UserManager: UserManager,
      DataManager : DataManager
    }
  },
  created(){

  },
  methods:{
  setName(userName){
    this.UserManager.userName = userName;
  },
  setPassword(password){
    this.UserManager.password = password;
  },
  test(){
    if(!this.UserManager.userName){
    }
    else if(!this.UserManager.password){

    }
    this.DataManager.createList();

    window.location = "/#/";
  }
  }
}
</script>

<style>
#myView {
  width: 100%;
  height: 100%;
  background: #637EE0;
  position: absolute;
  top:0%;
  left:0%;
}

.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
}

.content{
  margin-top: 10px;
  animation: fadeIn 2s ease-out;
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

}

.text{
  width: 75%;
}
.go{
  width: 10em;
  height: 10em;
  border: 1px solid black;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.goWrapper{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo{
  width: 25%;
  padding: 10px;
}

.pulse{
  animation: pulse 3s infinite ease;

}

@keyframes fadeIn{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes pulse{
  0%{
    transform: rotate(-5deg);
  }
  50%{
    transform: rotate(5deg) scale(1.1,1.1);

  }
  100%{
    transform: rotate(-5deg);

  }
}
</style>
