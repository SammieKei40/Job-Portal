<template>
  <div>
   
<section id="signup-section">
    <div class="content-wrap">
        <h1 class="mag-b center ts-20 tc-b3">Signup Job Portal</h1>
        <div class="line2"></div>
        <ul class="signup-cat">
            <li>
                <img width="66px" height="70px" src="/img/jobseekers2.jpg" />
                <h2>Job Seekers</h2>
                <div class="mag-b" style="min-height:100px;">
                    <p>
                        Apply for exclusive jobs on Job Portal. Be found by employers. Build your CV free with our CV Builder. Download your CV.
                    </p>
                </div>
                 <nuxt-link to="jobseeker"  class="signup-a" id="jobseeker-a">Signup</nuxt-link>
            </li>
            <li id="employer-cat">
                <img width="100px" height="70px" src="images/employers.png" />
                <h2>Employers</h2>
                <div class="mag-b" style="min-height:100px;">
                    <p>
                        Hire the best candidates for your open positions on Job Portal. Register, post jobs and search exclusive candidate profiles
                    </p>
                </div>
                <nuxt-link to="employers" class="signup-a">Signup Now</nuxt-link>
            </li>
        </ul>
        <div class="mag-b tc-b3 ts-14 center bm-b-100">
            If you have an account aready; <nuxt-link to="login" class="tc-o" style=" border:none" >Login Here</nuxt-link>
         </div>
    </div>
</section>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>