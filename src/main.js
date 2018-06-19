// main.js
import Vue from 'vue'
import App from './App.vue'
import titleMixin from './mixins/title-mixin';
import { createRouter } from './router/router.js'

// export a factory function for creating fresh app, router and store
// instances
export function createApp() {
  // create router instance
  const router = createRouter();

  const app = new Vue({
    mixins: [titleMixin],
    router,
    // the root instance simply renders the App component.
    render: h => h(App)
  });

  return { app, router };
}
