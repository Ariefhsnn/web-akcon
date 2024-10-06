import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3801f731 = () => interopDefault(import('../pages/approach/index.vue' /* webpackChunkName: "pages/approach/index" */))
const _68561c0a = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _03ee8ca6 = () => interopDefault(import('../pages/index2.vue' /* webpackChunkName: "pages/index2" */))
const _2607ee24 = () => interopDefault(import('../pages/portofolio/index.vue' /* webpackChunkName: "pages/portofolio/index" */))
const _61ab61a4 = () => interopDefault(import('../pages/us.vue' /* webpackChunkName: "pages/us" */))
const _32557ffd = () => interopDefault(import('../pages/product/designandDiscovery.vue' /* webpackChunkName: "pages/product/designandDiscovery" */))
const _0144ef85 = () => interopDefault(import('../pages/product/development.vue' /* webpackChunkName: "pages/product/development" */))
const _6efe5dce = () => interopDefault(import('../pages/product/support.vue' /* webpackChunkName: "pages/product/support" */))
const _12709e54 = () => interopDefault(import('../pages/product/tailoringandIntegration.vue' /* webpackChunkName: "pages/product/tailoringandIntegration" */))
const _0b2fdab2 = () => interopDefault(import('../pages/services/productdevelopment.vue' /* webpackChunkName: "pages/services/productdevelopment" */))
const _3efaf1f4 = () => interopDefault(import('../pages/services/productdnd.vue' /* webpackChunkName: "pages/services/productdnd" */))
const _1044b788 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _7a43298c = () => interopDefault(import('../pages/portofolio/_id.vue' /* webpackChunkName: "pages/portofolio/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/approach",
    component: _3801f731,
    name: "approach"
  }, {
    path: "/contact",
    component: _68561c0a,
    name: "contact"
  }, {
    path: "/index2",
    component: _03ee8ca6,
    name: "index2"
  }, {
    path: "/portofolio",
    component: _2607ee24,
    name: "portofolio"
  }, {
    path: "/us",
    component: _61ab61a4,
    name: "us"
  }, {
    path: "/product/designandDiscovery",
    component: _32557ffd,
    name: "product-designandDiscovery"
  }, {
    path: "/product/development",
    component: _0144ef85,
    name: "product-development"
  }, {
    path: "/product/support",
    component: _6efe5dce,
    name: "product-support"
  }, {
    path: "/product/tailoringandIntegration",
    component: _12709e54,
    name: "product-tailoringandIntegration"
  }, {
    path: "/services/productdevelopment",
    component: _0b2fdab2,
    name: "services-productdevelopment"
  }, {
    path: "/services/productdnd",
    component: _3efaf1f4,
    name: "services-productdnd"
  }, {
    path: "/",
    component: _1044b788,
    name: "index"
  }, {
    path: "/portofolio/:id",
    component: _7a43298c,
    name: "portofolio-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
