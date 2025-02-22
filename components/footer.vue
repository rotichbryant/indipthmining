<template>
  <!-- Footer Start -->
  <div class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
          <div class="row g-5">
              <div class="col-lg-3 col-md-6">
                  <h4 class="text-light mb-4">Address</h4>
                  <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Lavington chalbi drive, No 53</p>
                  <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>P.O. Box 76669-00508</p>
                  <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+254208000288</p>
                  <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@indipthmining.com</p>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h4 class="text-light mb-4">Services</h4>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Service'})">Asset Management</a>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Service'})">Feasibility Study</a>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Service'})">Mine planning and design</a>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Service'})">Mining resources estimation</a>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Service'})">Infrastructure and Logistics</a>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Service'})">Environmental Health & Safety</a>
              </div>
              <div class="col-lg-3 col-md-6">
                  <h4 class="text-light mb-4">Quick Links</h4>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'AboutUs'})">About Us</a>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Contact'})">Contact Us</a>
                  <a class="btn btn-link" href="" @click.prevent="$router.push({ name: 'Service'})">Our Services</a>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="copyright">
              <div class="row">
                  <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                      &copy; <a class="border-bottom" href="#">Indipth Mining Limited</a>, All Right Reserved.
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- Footer End -->
</template>