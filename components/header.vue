<template>
<!-- Header start  -->
<!-- Header Area -->
<header class="site-header site-header--menu-right bg-default py-7 py-lg-0 site-header--absolute site-header--sticky">
    <div class="container">
    <nav class="navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0">
        <!-- Brand Logo-->
        <div class="brand-logo">
        <!-- <a href="./index.html">
            <img src="/images/logo-main-black.png" alt="" class="light-version-logo default-logo">
            <img src="/images/logo-main-white.png" alt="" class="dark-version-logo">
        </a> -->
        </div>
        <div class="collapse navbar-collapse" id="mobile-menu">
        <div class="navbar-nav-wrapper">
            <ul class="navbar-nav main-menu">
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/">Home</NuxtLink>
            </li>
            <!-- <li class="nav-item">
                <NuxtLink class="nav-link" to="/about">About Us</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/stories">Success Stories</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
            </li> -->
            <!-- <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle gr-toggle-arrow" id="navbarDropdown" href="#features" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home <i class="icon icon-small-down"></i></a>
                <ul class="gr-menu-dropdown dropdown-menu" aria-labelledby="navbarDropdown">
                <li class="drop-menu-item">
                    <a href="home-1.html">
                    Homepage 01
                    </a>
                </li>
                <li class="drop-menu-item">
                    <a href="home-2.html">
                    Homepage 02
                    </a>
                </li>
                <li class="drop-menu-item">
                    <a href="home-3.html">
                    Homepage 03
                    </a>
                </li>
                </ul>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle gr-toggle-arrow" id="navbarDropdown2" href="#features" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <i class="icon icon-small-down"></i></a>
                <ul class="gr-menu-dropdown dropdown-menu" aria-labelledby="navbarDropdown2">
                <li class="drop-menu-item dropdown">
                    <a class="dropdown-toggle gr-toggle-arrow" id="navbarDropdown242" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Job Pages
                    <i class="icon icon-small-down"></i>
                    </a>
                    <ul class="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown242">
                    <li class="drop-menu-item">
                        <a href="./search-grid.html">
                        Job Grid
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./search-list-1.html">
                        Job List
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./jobdetails.html">
                        Job Details
                        </a>
                    </li>
                    </ul>
                </li>
                <li class="drop-menu-item dropdown">
                    <a class="dropdown-toggle gr-toggle-arrow" id="navbarDropdown21" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dashboard
                    <i class="icon icon-small-down"></i>
                    </a>
                    <ul class="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown21">
                    <li class="drop-menu-item">
                        <a href="./dashboard-main.html">
                        Dashboard Main
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./dashboard-settings.html">
                        Settings
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./dashboard-posted-applicants.html">
                        Applicants
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./dashboard-posted-applicants.html">
                        Posted Jobs
                        </a>
                    </li>
                    </ul>
                </li>
                <li class="drop-menu-item dropdown">
                    <a class="dropdown-toggle gr-toggle-arrow" id="navbarDropdown25g" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Candidate Pages
                    <i class="icon icon-small-down"></i>
                    </a>
                    <ul class="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown25g">
                    <li class="drop-menu-item">
                        <a href="./candidate-profile-main.html">
                        Candidate Profile
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./candidate-profile.html">
                        Candidate Profile 02
                        </a>
                    </li>
                    </ul>
                </li>
                <li class="drop-menu-item dropdown">
                    <a class="dropdown-toggle gr-toggle-arrow" id="navbarDropdown242" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Search Pages
                    <i class="icon icon-small-down"></i>
                    </a>
                    <ul class="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown242">
                    <li class="drop-menu-item">
                        <a href="./search-grid.html">
                        Search Grid
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./search-list-1.html">
                        Search List 01
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./search-list-2.html">
                        Search List 02
                        </a>
                    </li>
                    </ul>
                </li>
                <li class="drop-menu-item">
                    <a href="./company-profile.html">
                    Company Profile
                    </a>
                </li>
                <li class="drop-menu-item dropdown">
                    <a class="dropdown-toggle gr-toggle-arrow" id="navbarDropdown242" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Account
                    <i class="icon icon-small-down"></i>
                    </a>
                    <ul class="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown242">
                    <li class="drop-menu-item">
                        <a href="javacript:" data-toggle="modal" data-target="#login">
                        Sign In
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="javacript:" data-toggle="modal" data-target="#signup">
                        Sign Up
                        </a>
                    </li>
                    </ul>
                </li>
                <li class="drop-menu-item dropdown">
                    <a class="dropdown-toggle gr-toggle-arrow" id="navbarDropdown26" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Essential
                    <i class="icon icon-small-down"></i>
                    </a>
                    <ul class="gr-menu-dropdown dropdown-menu dropdown-left" aria-labelledby="navbarDropdown26">
                    <li class="drop-menu-item">
                        <a href="faq.html">
                        Faq
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./error-404.html">
                        404
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./pricing-page.html">
                        Pricing page
                        </a>
                    </li>
                    <li class="drop-menu-item">
                        <a href="./contact.html">Contact</a>
                    </li>
                    </ul>
                </li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Support</a>
            </li> -->
            </ul>
        </div>
        </div>
        <!-- Mobile Menu Hamburger-->
        <button class="navbar-toggler btn-close-off-canvas  hamburger-icon border-0" type="button" data-toggle="collapse" data-target="#mobile-menu" aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <i class="icon icon-simple-remove icon-close"></i> -->
        <span class="hamburger hamburger--squeeze js-hamburger">
        <span class="hamburger-box">
        <span class="hamburger-inner"></span>
        </span>
        </span>
        </button>
        <!--/.Mobile Menu Hamburger Ends-->
    </nav>
    </div>
</header>
<!-- navbar- -->
</template>