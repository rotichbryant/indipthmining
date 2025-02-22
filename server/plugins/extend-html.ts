export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
      // This will be an object representation of the html template.
      [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css',
        'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css',
        '/assets/lib/animate/animate.min.css',
        '/assets/lib/owlcarousel/assets/owl.carousel.min.css',
        '/assets/lib/lightbox/css/lightbox.min.css',
        '/assets/css/bootstrap.min.css',
        '/assets/css/style.css',
      ].forEach((link) => {
        html.head.push(`<link rel="stylesheet" href="${link}" />`)
      });

      [
        'https://code.jquery.com/jquery-3.4.1.min.js',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
        '/assets/lib/wow/wow.min.js',
        '/assets/lib/easing/easing.min.js',
        '/assets/lib/waypoints/waypoints.min.js',
        '/assets/lib/counterup/counterup.min.js',
        '/assets/lib/owlcarousel/owl.carousel.min.js',
        '/assets/lib/isotope/isotope.pkgd.min.js',
        '/assets/lib/lightbox/js/lightbox.min.js',
        '/assets/js/main.js',
      ].forEach((script) => {
        html.bodyAppend.push(`<script type="text/javascript" src="${script}"></script>`)
      });

    })
  })