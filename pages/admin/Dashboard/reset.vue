<template>
  <div>
      <Nav />
      <section class="dashboard-sec">
    <div class="dasgboard-content">
        <div class="dash-content">
            <h1 class="new-dash-h1">Set Password</h1>
            <div class="settings-cat">
                <form class="mag-b-5 bp-bt-30" method="post" enctype="multipart/form-data" action="" id="uza-change-pass-form">
                    <div class="mag-b bm-b-40" id="warning_box">
                        <h2>Warning</h2>
                        <div id="warning_box_info">
                            <ul></ul>
                        </div>
                    </div>
                    <label class="mag-b bm-b-20"><span class="mag-b ts-13 tc-b3 bm-b-10">New Password </span>
                        <input id="password-1" required="" placeholder="Enter new password" value="" name="password1" type="password" class="form-input">
                    </label>
                    <label><span class="mag-b ts-13 tc-b3 bm-b-10">Retype new password </span>
                        <input id="password-2" required="" placeholder="Retype password" name="password2" type="password" class="form-input" value="">
                    </label>
                    <div class="mag-b bm-t-20">
                        <input class=" update-but bg-o" type="submit" value="Save">
                    </div>
                </form>
            </div>

        </div>
        <div class="mag-b bm-b-30">
            <div id="adbox">

                <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-0011597892009729" data-ad-slot="4400994352" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
                </script>
            </div>
        </div>
        <a href="#0" class="js-cd-top" id="scroll-to-top">&nbsp;</a>
        <script type="text/javascript" language="javascript" src="/js/scroll-page.1649431706.js"></script>
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