<template>
  <div>
      <Nav />
      <section class="dashboard-sec">
    <div class="dasgboard-content">
        <div class="dash-content">
            <h1 class="new-dash-h1">Saved Jobs</h1>
            <div class="settings-cat" id="experience-cat">
                <div class="mag-b bm-t-30 bm-b-30 center">
                    <span class="ts-18">You have not saved any job.</span> <br>
                    <span class="ts-13 tc-b66">When you save a job, it makes it easier for you to locate and apply for the job when ever you are ready.</span>
                </div>
            </div>
            <div class="mag-b bm-b-20 ts-13">
                <a href="/" class="center-but bg-o bm-t-20">View All Jobs</a>
            </div>
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