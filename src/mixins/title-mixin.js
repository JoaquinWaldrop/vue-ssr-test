// title-mixin.js

function getTitle(vm) {
  // components can simply provide a `title` option
  // which can be either a string or a function
  const { title } = vm.$options
  if (title && vm) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

const serverTitleMixin = {
  created() {
    const title = getTitle(this)
    if (title && this.$ssrContext) {
      this.$ssrContext.title = title
    }
  }
}

const clientTitleMixin = {
  mounted() {
    const title = getTitle(this)
    if (title && document) {
      document.title = title
    }
  }
}

// `VUE_ENV` can be injected with `webpack.DefinePlugin`
export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin