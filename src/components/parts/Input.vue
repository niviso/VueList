<template>
<div class="InputWrapper">
<input type="text" class="Input"
  v-model="data"
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
    align: String,
    clearOnSubmit: Boolean
  },
    data () {
    return {
      input: "",
      Focus: true,
      align: "center"
    }
  },

  methods: {
    submit(e) {
      e.preventDefault();
      this.onSubmit(this.data);
      if(this.clearOnSubmit){
        this.input = "";
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
  text-align: {{align}};
  padding: 10px;
}
</style>
