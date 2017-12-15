// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueDragTree from 'vue-drag-tree'
// import TreeView from 'vue-json-tree-view'
import router from './router'

Vue.component('vue-drag-tree', VueDragTree)
Vue.config.productionTip = false
// vue.use(TreeView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
