<template>
<div class="InputWrapper">
<input type="text" class="Input"

  v-model="value"
  contentEditable="true"
  @focus="onFocus"
  @blur="onBlur"
  placeholder="Input task"
  v-bind:style="{ fontSize: Sizes[mySize]}"
  v-on:keypress.13="submit">
</div>
</template>

<script>
import Sizes from '../../helpers/Sizes';
export default {
  name: 'Input',
  components: {
    Sizes
  },
  props: {
    onSubmit: Function,
    submitOnBlur: Boolean,
    data: String,
    clearOnSubmit: Boolean,
    size: String
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
    onBlur(){
      if(this.submitOnBlur){
        this.submit();
      }

    }
  }
}
</script>

<style scoped>
.Input{
  width: 100%;
  border: 0px;
  outline: 0;
  font-size: inherit;
  background: none;
  padding: 10px;
  border-bottom: 1px solid black;
}
</style>
