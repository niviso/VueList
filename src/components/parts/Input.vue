<template>
<div class="InputWrapper">
<input type="text" class="Input"

  v-model="value"
  contentEditable="true"
  @focus="onFocus"
  @blur="onBlur"
  placeholder="Input task"
  v-on:keypress.13="submit">
</div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    onSubmit: Function,
    submitOnBlur: Boolean,
    data: String,
    clearOnSubmit: Boolean
  },
    data () {
    return {
      input: "",
      Focus: true,
      value: this.data
    }
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
