<template>
  <div>
      <Nav />
      <section class="dashboard-sec">
    <div class="dasgboard-content">
        <div class="dash-content">
            <h1 class="new-dash-h1">My CV</h1>
            <div class="settings-cat">
                <div class="mag-b">
                    <form style=" " id="cv-form" action="/user/my-cv" method="post" enctype="multipart/form-data" class="mag-pb-5 bb-a bp-t-20 bm-b-20  br-5 bm-t-20">
                        <label class="user-pic-house bm-b-30" style="float:left; cursor:pointer" title="Click to select photo">
                            <span class="mag-b ts-13 tc-bl bm-b-10">Attach your CV/Doc:</span> <input style="cursor:pointer; display:inline" type="file" name="cv">
                        </label>
                        <label class="mag-b bm-b-30"><span class="mag-b ts-13 tc-bl bm-b-10">Save the cv with this title</span>
                            <input required="" placeholder="Enter title" value="" name="title" type="text" class="form-input">
                        </label>
                        <div class="mag-b  bm-b-30">
                            <div class="mag-b">
                                <input type="submit" name="submit_cv" value="Upload CV" class="update-but bg-o" style="float:left; margin-right:2%;" id="sub-cv-form">
                            </div>
                        </div>
                    </form>
                </div>
                <form id="cover-letter" class="mag-b bm-t-40" action="/user/my-cv#cover-letter" method="post">
                    <div class="mag-b bold ts-14 bm-b-20">Cover Letter <i class="ts-12 tc-o">(Edit your cover letter here)</i></div>
                    <textarea name="cover_letter" class="mag-pb-2 bp-tb-20 bb-a ts-16 bm-b-20" rows="10" style="line-height:23px; font-weight: normal"></textarea>
                    <div id="cover-letter-save" class="mag-b-5">
                        <input type="submit" value="Save Cover Letter" class="update-but bg-o">
                    </div>
                </form>
                <div class="mag-b tc-o ts-12 italiz bm-t-20">Note: The cover letter can only be used to apply for job on MyJobMag by you </div>
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