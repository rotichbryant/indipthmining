<template>
  <!-- Main Content Start -->
  <div>
      <!-- Header start end -->
      <!-- Hero Area -->
      <div class="bg-gradient-1 pt-26 position-relative z-index-1 overflow-hidden">
          <!-- .Hero pattern -->
          <div class="pos-abs-tr w-50 z-index-n2">
              <img src="/images/patterns/hero-pattern.png" alt="" class="gr-opacity-1">
          </div>
          <!-- ./Hero pattern -->
          <div class="container">
              <div class="row position-relative align-items-center">
              <div class="col d-flex align-items-center" data-aos="fade-right" data-aos-duration="800" data-aos-once="true">
                  <div class="col-12">
                      <h1 class="font-size-9 mb-6 pr-md-30 pr-lg-0">Contact Us</h1>
                  </div>
              </div>
              <!-- Hero Right Image -->
              <div class="col-md-6 d-none d-lg-block" data-aos="fade-left" data-aos-duration="800" data-aos-once="true">
                  <div class=" ml-xxl-23 ml-xl-12 ml-md-7">
                      <!-- <img src="/image/aboutus/mavens_2.png" alt="" class="w-100"> -->
                  </div>
              </div>
              <!-- ./Hero Right Image -->
              </div>
          </div>
      </div>
      <!-- Hero Area -->  
      <div class="bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27">
      <div class="container">
        <!-- back Button -->
        <div class="row justify-content-center mt-14">
          <div class="col-xxl-6 col-xl-7 col-lg-8">
            <div class="bg-white px-9 pt-9 pb-7 shadow-8 rounded-4">
              <form action="/">
                <div class="row">
                  <div class="col-12 mb-7">
                    <label for="" class="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Your Name</label>
                    <input type="text" class="form-control" placeholder="Jhon Doe">
                  </div>
                  <div class="col-lg-6 mb-7">
                    <label for="" class="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">E-mail</label>
                    <input type="text" class="form-control" placeholder="example@gmail.com">
                  </div>
                  <div class="col-lg-6 mb-7">
                    <label for="" class="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Subject</label>
                    <input type="text" class="form-control" placeholder="Special contract">
                  </div>
                  <div class="col-lg-12 mb-7">
                    <label for="message" class="font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset">Message</label>
                    <textarea name="" id="" placeholder="Type your message" class="form-control h-px-144"></textarea>
                  </div>
                  <div class="col-lg-12 pt-4">
                    <button class="btn btn-primary text-uppercase w-100 h-px-48">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </div>
  <!-- Main Content end -->
</template>

<script lang="ts" setup>
  useHead({
    title: 'Contact Us'
  })
</script>