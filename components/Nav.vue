<template>
  <div>
          <div class="header" id="dheader">
    <div class="content-wrap">
        <a id="d-site-logo" href="#" class="logo">Job Portal</a>
         <nav>
                <div id="menue-back-box" onclick="document.getElementById('check01').click()"></div>
                <input id="check01" type="checkbox" name="menu" class="menu-check" onclick="checkMenueBox(this)" />
                <label for="check01" id="menue-but-box">Menu</label>
        
        
        <ul id="nav-ul" class="site-menu">
            <li id="close-menue" onclick="closeMenueBox(this)">X</li>
            <li class="nav-li" id="employer-postjob-nav"><a href="/employers/" class="nav-a">Employers, Post a Job</a></li>
    
            <li class="nav-li ">
                <a href="/blog" class="nav-a" id="get-advice-nav">Get Advice</a>
                <ul id="jobs-by-nav">
                    <li id="career-advice-nav"><a href="/blog">Career Advice</a></li>
                    <li id="hr-recruiter-advice-nav"><a href="/blog/category/hr-advice">HR/Recruiter Advice</a></li>
                    <li id="job-trends-nav"><a href="/job-trends">Job Trends</a></li>
                </ul>
            </li>
            <li class="nav-li ">
                <a href="/rewrite-services" class="nav-a" id="cv-services-nav">CV Services</a>
            </li>
     
            <li class="nav-li ">
                <a target="_blank" href="https://www.mysalaryscale.com" class="nav-a" id="salaries-nav">Salaries</a>
                <ul id="jobs-by-nav">
                    <li id="salaries-nav"><a href="https://www.mysalaryscale.com">Salaries</a></li>
                    <li id="salary-research-nav"><a href="https://www.mysalaryscale.com/salary-research">Salary Research</a></li>
                    <li id="company-reviews-nav"><a href="https://www.mysalaryscale.com/company-reviews">Company Reviews</a></li>
                </ul>
            </li>
            <li class="nav-li ">
                <a href="/employers/" class="nav-a" id="post-jobs-nav">Post Jobs</a>
            </li>
            <li id="post-a-job-navx" class="nav-li"><a href="/employers/" class="nav-a">Post A Job / Recruit</a></li>

            <li class="nav-li" id="logout-nav">
                <nuxt-link to="/" class="nav-a" style=" border:none">Sign Out</nuxt-link>
            </li>
        </ul>
                    </nav>

        <div class="profile-detail">

            <input id="check03" type="checkbox" name="menu" class="user-menu-check" />
            <label for="check03" id="user-name-pix">
                <label for="check03" class="profile-pic">
                    <img width="100%" height="auto" src="~/assets/Img/2.png" /></label>
                <label for="check03" class="profile-name">Hi User <font color="#FFF"> &nbsp; [jobseeker]</font> </label>
            </label>
            <ul id="user-menue">
                <div class="menue-point"></div>
                <div class="mag-pb-5 bp-tb-20 bg-a3" id="menu-top-box">
                    <div class="mag-b-4 fl-l" style="float:left;">
                        <a href="/user/change-photo" class="user-pixx">
                            <span>Change</span>
                             <img width="100%" height="auto" src="~/assets/Img/2.png" />
                        </a>
                    </div>
                    <div class="mag-b-7 fl-r" style="float:right">
                        <div class="mag-b"><a class="anko-a tc-b" href="/cv-building">Username</a></div>
                        <div class="mag-b ts-12 tc-b9">User Email</div>
                        <div class="mag-b tc-b6 ts-12 bm-b-10">Jobseeker</div>
                        <nuxt-link to="cv" class="ts-13 tc-o anko-a">Edit Info</nuxt-link>
                    </div>
                </div>
    
                <nuxt-link to="dash" id="job-dashboard-a" class="logout-but">Dashboard</nuxt-link>
                <nuxt-link to="cv" id="cv-builder-a" class="logout-but">Profile</nuxt-link>
                <nuxt-link to="setting" id="job-setting-a" class="logout-but">Job Settings</nuxt-link>
                <nuxt-link to="saved-jobs" id="cv-builder-a" class="logout-but">Saved Jobs</nuxt-link>
                <nuxt-link class="logout-but" to="/">Sign out</nuxt-link>
            </ul>
        </div>
        <a href="/notification" class="alert-box">&nbsp; </a>
    </div>
</div>
        <div class="mobile-nav">
        <a href="#" id="mn-jobs">Jobs</a>
        <a href="#" id="mn-advice">Career Advice</a>
        <nuxt-link style=" border-right:none" id="mn-signup" to="cv">Profile</nuxt-link>
        </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>