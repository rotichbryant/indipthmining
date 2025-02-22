export default defineNuxtRouteMiddleware((to, from) => {
  const { public:{ NUXT_APP_MAINTENANCE } } = useRuntimeConfig()
  switch( JSON.parse(NUXT_APP_MAINTENANCE) ){
    case true:
      if( to.name != 'maintenance' ) return navigateTo('/maintenance');
      return true;
    break;
    case false:
      if( to.name == 'maintenance' ) return navigateTo('/');
      return true
    break;
  }
})