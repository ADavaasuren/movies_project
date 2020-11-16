<template>
  <v-card dark height="110">
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
         {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>     
</template>


<script>
// import VueRouter from 'vue-router';
// import Vue from 'vue'
// import router from 'vue-router'


// Vue.use(VueRouter)

export default {
    name: 'Footer',

  //   mounted() {
    
  //   this.getRoutesXML();
  //   },

  // getRoutesList: function(routes, pre) {
  //   return routes.reduce((array, route) => {
  //     const path = `${pre}${route.path}`;
  
  //     if (route.path !== '*') {
  //       array.push(path);
  //     }
  
  //     if (route.children) {
  //       array.push(...getRoutesList(route.children, `${path}/`));
  //     }
  
  //     return array;
  //   }, []);
  // },
  
  // getRoutesXML: function() {
  //     const list = getRoutesList(router.options.routes, 'http://localhost:8080/#/')
  //       .map(route => `<url><loc>${route}</loc></url>`)
  //       .join('\r\n');
  //     return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  //     ${list}
  //     </urlset>`;
  //   }
  
}

</script>



<style scoped>

</style>