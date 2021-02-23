export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
    title: "Développeur Web Gérald Ferron",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Développeur Web Ferron Gérald , création d'applications en ligne , site internet , spécialiste Javascript (Vue.js , Nuxt.js , Node.js , Express) , Cms : Prestashop , Wordpress , Référencement Seo."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/GF.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/plugin.js",
    {
      src: "~plugins/aos.js",
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
