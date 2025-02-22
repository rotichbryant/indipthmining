<template>
    <div>
        <!-- Topbar Start -->
        <div class="container-fluid bg-light p-0">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-map-marker-alt text-primary me-2"></small>
                        <small>Lavington chalbi drive, No 53A</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center py-3">
                        <small class="far fa-clock text-primary me-2"></small>
                        <small>Mon - Fri : 08.00 AM - 05.00 PM</small>
                    </div>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-phone-alt text-primary me-2"></small>
                        <small>+254208000288</small>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->


        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a href="#" @click.prevent="$router.push({ name: 'home'})"  class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 class="m-0 text-primary">Indipth Mining</h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <NuxtLink  to="/"         class="nav-item nav-link">Home</NuxtLink>
                    <NuxtLink  to="about"     class="nav-item nav-link">About Us</NuxtLink>
                    <NuxtLink  to="services"  class="nav-item nav-link">Services</NuxtLink>
                    <NuxtLink  to="facts"     class="nav-item nav-link">Mining In Kenya</NuxtLink>
                    <NuxtLink  to="contact"   class="nav-item nav-link">Contact</NuxtLink >
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
    </div>
</template>

<style scoped>
.nav-link.router-link-active {
    color: var(--primary);
}
.nav-link.router-link-active:hover {
    color: var(--primary);
}
</style>
<script lang="ts" setup>
  const $router = useRouter()
</script>