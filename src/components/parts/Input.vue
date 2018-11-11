<template>
<div class="InputWrapper"
v-bind:style="{ backgroundColor: bgColor, color: fontColor, fontSize: Sizes[myFontSize], height: Sizes[size]}">

<input :type="myType" class="Input"
v-bind:style="{ backgroundColor: bgColor, color: fontColor, textAlign: txtAlign}"
  v-bind:autofocus="autoFocus"
  v-model="value"
  contentEditable="true"
  @focus="onFocus"
  @blur="onBlur"
  :placeholder="placeholder"
  v-on:keydown="keyPress"
  v-on:keypress.13="submit">

  <div v-if="autoCompleteResult" class="autoComplete" @click="autoCompleteSubmit"
  v-bind:style="{ backgroundColor: bgColor, color: fontColor, textAlign: txtAlign, top: '100%', height: Sizes[size]}">
  Did you mean &nbsp;<b>'{{autoCompleteResult.txt}}'</b></div>
</div>
</template>

<script>
import Sizes from '../../helpers/Sizes';
export default {
  name: 'Input',
  props: {
    onSubmit: Function,
    submitOnBlur: Boolean,
    data: String,
    clearOnSubmit: Boolean,
    size: String,
    fontSize: String,
    bgColor: String,
    fontColor: String,
    txtAlign: String,
    onKeyPress: Function,
    autoComplete: Array,
    autoFocus: Boolean,
    fontSizeOnFocus: String,
    placeholder: String,
    type: String
  },
    data () {
    return {
      input: "",
      Focus: true,
      value: this.data,
      mySize: this.size || 'm',
      Sizes: Sizes,
      autoCompleteResult: null,
      myFontSize: this.fontSize,
      myType: this.type || "text"

    }
  },
  created(){

  },
  methods: {
    search(){
      return this.autoComplete.filter( (item) => {
        return (item.txt.includes(this.value));
      });

    },
    keyPress(e){
      if(this.onKeyPress){
        this.onKeyPress(e)
      } else if(this.autoComplete && this.value) {
        if(this.value.length <= 1){
          this.autoCompleteResult = null;
          return;
        }
        let result = this.search();
        this.autoCompleteResult = result[0]

      }
    },
    autoCompleteSubmit(e){
      this.value = this.autoCompleteResult.txt;
      this.autoCompleteResult = null;
      this.submit(e);
    },
    submit(e) {
      e.preventDefault();
      this.autoCompleteResult = null;
      this.onSubmit(this.value);
      this.clearInput();
    },
    clearInput(){
      if(this.clearOnSubmit){
        this.value = "";
      }
    },
    onFocus() {
      if(this.fontSizeOnFocus){
        this.myFontSize = this.fontSizeOnFocus;
      }

    },
    onBlur(e){
      if(this.submitOnBlur){
        this.submit(e);
      }
      if(this.fontSizeOnFocus && !this.autoCompleteResult){
        this.myFontSize = this.fontSize;
      }

    }
  }
}
</script>

<style scoped>
.InputWrapper{
    width: 100%;
    height: auto;
    transition: 0.25s;
    display: flex;
    justify-content: center;
    position: relative;
}
.Input{
  font: inherit;
  width: 100%;
  border: 0px;
  outline: 0;
  font-size: inherit;
  background: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
  position: relative;
}
.autoComplete{
  position: absolute;
  left:0%;
  animation: fadeIn 0.15s ease;
  width: 100%;
  text-align: center;
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid white;
  z-index: 1;
}
.Input::placeholder{
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
}

@keyframes fadeIn{
  from{
    opacity: 0
  }
  to{
    opacity: 1
  }
}
</style>
