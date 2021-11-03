export default {
  mode: "static",
  router: {
    base: "/sellme/",
    linkPrefetchedClass: "nuxt-link-prefetched",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "B2K",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css", "animate.css/animate.min.css"],

  loading: {
    color: "blue",
    height: "5px",
  },

  loadingIndicator: {
    name: "wandering-cubes",
    color: "#3B8070",
    background: "blue",
  },

  googleFonts: {
    families: {
      // basic
      Lato: [200, 400],
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/preview.client.js",
    { src: "~/plugins/persistedState.client.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-fonts"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/pwa",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
