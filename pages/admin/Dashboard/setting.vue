<template>
  <div>
      <Nav />

      <section class="dashboard-sec">
    <div class="dasgboard-content">
      
        <div class="dash-content">
            <h1 class="new-dash-h1">Job Settings</h1>
            <h2 class="mag-b ts-13 tc-b6 ">Tips on selecting your preferences:</h2>
            <ul class="mag-b-8 ts-12 tc-b6 bm-b-40" id="job-set-tips">
                <li>On location, do not limit yourself to one state. Example, if you are in Location A, you may also select neighbouring locations. Select all states if you are willing to relocate.</li>
                <li>Be open with the fields. Unless you are a "specialist", it is good to be open to new roles.</li>
                <li>It is always a bad idea to limit your industry of interest. Explore industries as this will add to your experience.</li>
            </ul>

            <div class="settings-cat" id="experience-cat">
                <h2>Job Experience &amp; Qualification</h2>
                <div class="mag-b">
                    <div class="mag-b-66">
                        <div class="mag-b ts-13 tc-b3 bm-b-5">Work Experience</div>
                        <div class="mag-b ts-13 tc-b3 bm-b-5">
                            <span class="ts-12">None</span> </div>
                    </div>
                    <div class="mag-b-66 fl-r">
                        <div class="mag-b ts-12 tc-b3 bm-b-5">Maximum Qualification</div>
                        <span class="ts-12">None </span>
                    </div>
                </div>
                <div class="mag-b bm-t-20">
                    <nuxt-link id="experience-cat-anko" class="anko-a fl-r ts-13 tc-o" to="ChooseJob/qualification">Edit</nuxt-link>
                </div>
            </div>
            <div class="settings-cat">
                <h2>Job Location</h2>
                <div class="mag-b">
                </div>
                <div class="mag-b bm-t-20">
                    <nuxt-link class="anko-a fl-r ts-13 tc-o" to="ChooseJob/location">Edit</nuxt-link>
                </div>
            </div>
            <div class="settings-cat">
                <h2>Job Fields</h2>
                <div class="mag-b">
                </div>
                <div class="mag-b bm-t-20">
                    <nuxt-link class="anko-a fl-r ts-13 tc-o" to="ChooseJob/field">Edit</nuxt-link>
                </div>
            </div>
            <div class="settings-cat" id="e-alert">
                <h2>Personalized Email Alert</h2>
                <div class="mag-b">
                    <div class="mag-b-2" id="switch-but-box">
                        <div class="switch-but" style="margin-top:10px;">
                            <a href="/job-setting?e=1" id="switch-but-left" style="color:#FFF; background-color:#F60;">ON</a>
                            <a href="/job-setting?e=0" id="switch-but-right">OFF</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/" class="center-but bg-o bm-b-20">View Jobs</a>
        </div>
       
    </div>
    
    <DashboardNav />
</section>
  </div>
</template>

<script>
import DashboardNav from "@/components/DashboardNav";
import Nav from "@/components/Nav";


export default {
    components: {
        DashboardNav,
        Nav
    }
}
</script>

<style>

</style>