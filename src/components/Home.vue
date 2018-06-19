<template>
  <div id="app">
    Hello World2!
  </div>
</template>
<script>
  import titleMixin from '../mixins/title-mixin';
  export default {
    mixins: [titleMixin],
    title() {
      return 'Un equipo1'
    }
  };
</script>