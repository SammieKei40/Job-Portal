<template>
  <div>
      <section class="" style="background-color: #eee;">
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up as a Jobseeker</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw mr-3"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input v-model="name" type="text" id="form3Example1c" class="form-control" placeholder="First Name Last Name"/>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw mr-3"></i>
                    <div class="form-outline flex-fill mb-0" :class="[ isEmailValid()]">
                      <input v-model="email" type="email" id="email" class="form-control" placeholder="Email Address"/>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fas fa-phone-alt me-3 fa-fw mr-3"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example3c" class="form-control" placeholder="Phone Number"/>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw mr-3"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input v-model="password" type="password" id="password" class="form-control" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
            
                    </div>
                  </div>


                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button @click="createUser" type="button" class="btn btn-lg text-white" style="background-color: #f30">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>


export default {
data: () => ({
    name: "",
    email: "",
    password: "",
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  }),
  methods: {
    async createUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
      const actionCodeSettings = {
        url: 'https://www.naviclearn.com/evolveI',
        handleCodeInApp: true
      }
      firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
        .then(data => {
          alert('User successfully created!')
          console.log(data)
          this.$router.push({ name: 'evolveGo' })
        })
        .catch(error => {
          this.error = error.message
        })
    },
    isEmailValid: function() {
      return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
    }
  }

}
</script>

<style scoped>
.has-screen{
  color:green
}
.has-error{
  color:red
}
</style>