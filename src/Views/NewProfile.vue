<template>
  <div id="myView">
    <div class="wrapper">
      <img src="https://zalarieunique.ru/images/clipart-png-eagle-17.png" class="logo">
            <p style="font-size: 5em">Brave</p>
            <p style="font-size: 1em;border-top:1px solid rgba(0,0,0,0.2);padding: 10px">Create a new user</p>

      <div class="content">
        <Input size="l" fontSize="m" placeholder="Username" txtAlign="center" bgColor="white" fontColor="black" fontSizeOnFocus="l"  :onSubmit="setProfile"></Input>
        <Input size="l" fontSize="m" placeholder="Password" txtAlign="center" bgColor="white" fontColor="black" fontSizeOnFocus="l"></Input>
        <div class="goWrapper">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/parts/Input';
import UserManager from '../managers/UserManager';

export default {
  name: 'NewProfile',
  components:{
    Input
  },
  data () {
    return {
      color: "red",
      UserManager: UserManager
    }
  },
  created(){

  },
  methods:{
  setProfile(name){
    this.UserManager.name =name;
    window.location = "/#/"
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
  animation: fadeIn 1s ease;
  flex-direction: column;
}

.content{
  margin-top: 10px;
  animation: fadeInX 2s ease-out;
  overflow: hidden;
  height: 100%;
  width: 100%;

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

@keyframes fadeIn{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@keyframes fadeInX{
  from{
    height: 0;
  }
  to{
    height: 100%;
  }
}
</style>
