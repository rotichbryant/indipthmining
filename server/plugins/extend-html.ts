export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
      // This will be an object representation of the html template.
      [
        '/assets/css/bootstrap.css',
        '/assets/fonts/icon-font/css/style.css',
        '/assets/fonts/typography-font/typo.css',
        '/assets/fonts/fontawesome-5/css/all.css',
        '/assets/plugins/aos/aos.min.css',
        '/assets/plugins/fancybox/jquery.fancybox.min.css',
        '/assets/plugins/nice-select/nice-select.min.css',
        '/assets/plugins/slick/slick.min.css',
        '/assets/plugins/ui-range-slider/jquery-ui.css',
        '/assets/css/main.css'
      ].forEach((link) => {
        html.head.push(`<link rel="stylesheet" href="${link}" />`)
      });

      [
        '/assets/js/vendor.min.js',
        '/assets/plugins/fancybox/jquery.fancybox.min.js',
        '/assets/plugins/nice-select/jquery.nice-select.min.js',
        '/assets/plugins/aos/aos.min.js',
        '/assets/plugins/slick/slick.min.js',
        '/assets/plugins/counter-up/jquery.counterup.min.js',
        '/assets/plugins/counter-up/jquery.waypoints.min.js',
        '/assets/plugins/ui-range-slider/jquery-ui.js',
        '/assets/js/custom.js',
      ].forEach((script) => {
        html.bodyAppend.push(`<script type="text/javascript" src="${script}"></script>`)
      });

    })
  })