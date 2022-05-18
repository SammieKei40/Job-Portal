<template>
  <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image">
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form class="m-5">

          <!-- Email input -->
          <div class="form-outline mb-4">
            <input v-model="email" type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <!-- Password input -->
          <div class="form-outline mb-3">
            <input v-model="password" type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <!-- Checkbox -->
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button @click="loginUser" type="button" id="btn" class="btn btn-lg text-white"
              style="padding-left: 2.5rem; padding-right: 2.5rem; background-color: #f30">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                 <nuxt-link to="signin" class="link-danger" style="color: #f30">Register</nuxt-link> </p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5" style="background-color: #f30">
    <!-- Copyright -->
    <div class="text-white mb-3 mb-md-0" >
      Copyright © 2020. All rights reserved.
    </div>
    <!-- Copyright -->

    <!-- Right -->
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
    <!-- Right -->
  </div>
</section>
</template>

<script>
export default {
data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    async loginUser() {
      console.log("strted");
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        window.location.href = 'https://www.facebook.com';
        this.$router.push('www.facebook.com');
      } catch (e) {
        handleError(e);
      }
    }
  }
}
</script>

<style>
#btn{
    background-color: #f30;
}
</style>