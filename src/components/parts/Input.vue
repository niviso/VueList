<template>
<div class="InputWrapper"
v-bind:style="{ backgroundColor: bgColor, color: fontColor, fontSize: Sizes[size]}"
>
<input type="text" class="Input"
v-bind:style="{ backgroundColor: bgColor, color: fontColor, textAlign: txtAlign}"

  v-model="value"
  contentEditable="true"
  @focus="onFocus"
  @blur="onBlur"
  placeholder="Input task"
  v-on:keypress.13="submit">
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
    bgColor: String,
    fontColor: String,
    txtAlign: String
  },
    data () {
    return {
      input: "",
      Focus: true,
      value: this.data,
      mySize: this.size || 'm',
      Sizes: Sizes

    }
  },
  created(){
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.onSubmit(this.value);
      this.clearInput();
    },
    clearInput(){
      if(this.clearOnSubmit){
        this.value = "";
      }
    },
    onFocus() {

    },
    onBlur(e){
      if(this.submitOnBlur){
        this.submit(e);
      }

    }
  }
}
</script>

<style scoped>
.InputWrapper{
    border-bottom: 1px solid black;
    width: 100%;
}
.Input{
  width: 100%;
  border: 0px;
  outline: 0;
  font-size: inherit;
  background: none;
  padding: 10px;
}
</style>
