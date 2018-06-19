<template>
  <div id="app" data-server-rendered="true">
    Hello World!
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/about">Go To About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
  import titleMixin from './mixins/title-mixin';
  export default {
    //mixins: [titleMixin],
    title() {
      return 'Un equipo1'
    }
  };
</script>
