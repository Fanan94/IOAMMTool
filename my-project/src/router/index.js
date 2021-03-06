import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import users from '@/pages/users'
import components from '@/pages/components'
import addComponent from '@/pages/addComponent'
import addUser from '@/pages/addUser'
import treeMenu from '@/pages/treeMenu'
import devices from '@/pages/devices'
import addDevice from '@/pages/addDevice'
import modifyDevice from '@/pages/modifyDevice'
import modifyComponent from '@/pages/modifyComponent'
import deploy from '@/pages/deploy'
import ztree from '@/pages/ztree'
import Axios from 'axios'

/* eslint-disable */
Axios.defaults.baseURL = 'http://192.168.0.116:8080/'  //路径提取出来，简化代码
Vue.use(Router)
Vue.prototype.$axios = Axios;

export default new Router({

    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            children: [
                {
                    path: '/users',
                    name: 'users',
                    component: users
                },
                {
                    path: '/components',
                    name: 'components',
                    component: components
                },
                {
                    path: '/addUser',
                    name: 'addUser',
                    component: addUser
                },
                {
                    path: '/addComponent',
                    name: 'addComponent',
                    component: addComponent
                },

                {
                    path: '/treeMenu',
                    name: 'treeMenu',
                    component: treeMenu
                },
                {
                    path: '/devices',
                    name: 'devices',
                    component: devices
                },
                {
                path: '/addDevice',
                name: 'addDevice',
                component: addDevice
              },
              {
                path: '/modifyDevice',
                name: 'modifyDevice',
                component: modifyDevice
              },
              {
                path: '/modifyComponent',
                name: 'modifyComponent',
                component: modifyComponent
              },
              {
                path: '/deploy',
                name: 'deploy',
                component: deploy
              },
              {
                path: '/ztree',
                name: 'ztree',
                component: ztree
              }
            ]
        }
    ]
})
