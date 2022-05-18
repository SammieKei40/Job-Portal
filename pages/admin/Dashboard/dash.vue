<template>
  <div>
  
      <Nav />

<section class="dashboard-sec">
    <div class="dasgboard-content">
        <div class="mag-b bm-b-30">
            <form class="dash-search-form" action="/search/jobs" method="get">
                <div class="search-input-box2" id="dash-keyword-input"> 
                    <input style="border-bottom-left-radius:5px 5px;border-top-left-radius:5px 5px; " class="dash-search-input" placeholder="Company Name or Job Title" name="q" /></div>
                <div class="search-input-box2" id="dash-location-input"> 
                    <input class="dash-search-input" placeholder="Location" name="location" onclick="dropMultiSelect(this,this.nextSibling);" readonly="readonly" />
                    <div class="select-option-house">
                        <div id="select-option-box"><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Abia" />Abia</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Abuja" />Abuja</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Adamawa" />Adamawa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Akwa Ibom" />Akwa Ibom</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Anambra" />Anambra</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Bauchi" />Bauchi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Bayelsa" />Bayelsa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Benue" />Benue</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Borno" />Borno</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Cross River" />Cross River</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Delta" />Delta</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ebonyi" />Ebonyi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Edo" />Edo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ekiti" />Ekiti</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Enugu" />Enugu</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Gombe" />Gombe</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Imo" />Imo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Jigawa" />Jigawa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kaduna" />Kaduna</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kano" />Kano</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Katsina" />Katsina</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kebbi" />Kebbi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kogi" />Kogi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kwara" />Kwara</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Lagos" />Lagos</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Nasarawa" />Nasarawa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Niger" />Niger</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ogun" />Ogun</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ondo" />Ondo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Osun" />Osun</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Other" />Other</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Oyo" />Oyo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Plateau" />Plateau</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Rivers" />Rivers</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Sokoto" />Sokoto</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Taraba" />Taraba</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Yobe" />Yobe</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Zamfara" />Zamfara</label></div>
                    </div>
                </div>
                <input type="submit" value="Search Jobs" class="dash-search-but" id="dash-search-butz" />
            </form>
            <div class="prompt-update" style="border-color:#FC0">
                <h2>Add Education</h2>
                <p class="pu-text">
                    You are yet to add your academic information. Education is a key information employers look out for while hiring. It's very necessary you add it
                </p>
                <nuxt-link to="cv" class="pu-but bg-o">Add Education</nuxt-link>
            </div>
            <div class="prompt-update" style="border-color:#09C">
                <h2>Add Work Experience</h2>
                <p class="pu-text">
                    No work experience added to your profile. Your experience will make you standout. We highly recommend you add your work experience
                </p>
                <nuxt-link to="cv" class="pu-but bg-bl">Add Experience</nuxt-link>
            </div>
            <div class="prompt-update">
                <h2>Add Skills</h2>
                <p class="pu-text">
                    Do you have any skill? Employers are mostly looking for skilled candidates. Add your skill now so employers can find you faster
                </p>
                <nuxt-link to="cv" class="pu-but bg-b3">Add Skill</nuxt-link>
            </div>
        </div>
        <div class="dash-content bm-t-40">
            <div class="recommended-jobs">
                <h2 class="dash-box-title">Latest Jobs<div class="top-switch-jobs">
                        <div class="switch-but" id="top-swith-but">
                            <a href="#" id="switch-but-left" style="color:#FFF; background-color:#F60;">All</a>
                            <a href="#" id="switch-but-right">Personalized</a>
                        </div>
                    </div>
                </h2>
                <ul id="dash-job-ul">
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Pharmacist at Reliance Health</a></h2>
                        <p class="dash-job-desc">
                            We&rsquo;re a health insurance company that acts like a technology company. We&rsquo;re using softwa</p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Accountant at Mactay Consulting</a></h2>
                        <p class="dash-job-desc">
                            MacTay Consulting has been in existence for over 28 years in Nigeria. We are a member of TACK and TM</p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Research Consultants: End of Cycle Evaluation at Malaria Consortium</a></h2>
                        <p class="dash-job-desc">
                            Malaria Consortium Nigeria is committed to tackling the large number of malaria cases and deaths in </p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Enterprise Network System Administrator at Access Solutions Limited</a></h2>
                        <p class="dash-job-desc">
                            Access Solutions provides universal and accessible design consulting services to promote active, saf</p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Inclusive Design Lead at Sightsavers Nigeria</a></h2>
                        <p class="dash-job-desc">
                            Sightsavers is an international organisation that changes lives for the long term. We work in more t</p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Latest Jobs at Advanced Concrete Technology</a></h2>
                        <p class="dash-job-desc">
                            Advanced Concrete Technologies Ltd (ACT) provides advanced and comprehensive waterproofing services.</p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Job Vacancies at the African Development Bank Group (AfDB)</a></h2>
                        <p class="dash-job-desc">
                            The African Development Bank Group (AfDB) is a multilateral development finance institution establis</p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Head, Media and Communications at Pivota Foods Limited</a></h2>
                        <p class="dash-job-desc">
                        </p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Humanitarian Mine Action Manager at Danish Refugee Council (DRC)</a></h2>
                        <p class="dash-job-desc">
                            The Danish Refugee Council (DRC) is a humanitarian, non-governmental, non-profit organisation founde</p>
                        <span id="job-date2">06 May</span>
                    </li>
                    <li>
                        <h2 class="dash-job-h2"><a href="#">Job Openings at Binance Nigeria</a></h2>
                        <p class="dash-job-desc">
                            Binance is the global blockchain company behind the world's largest digital asset exchange by tradin</p>
                        <span id="job-date2">06 May</span>
                    </li>
                </ul>
                <a href="/" class="anko-c">View All Jobs</a>
            </div>
            <div class="dash-rightz">
    
                <div class="dash-job-set">
                    <h2 class="dash-box-title2">Job Settings</h2>
                    <div class="mag-b">
                        <div style="font-size:13px" class="mag-b ts-13 tc-b6 bm-b-20">
                            If you are not satisfied with the jobs you see, you can edit your preference
                        </div>
                        <div class="mag-b-66 fl-r" id="switch-view-sec">
                            <nuxt-link to="setting" style="float:right" class="anko-a fl-r bg-o bp-lr-10 bp-tb-7 tc-w ts-12 br-5">Job Settings</nuxt-link>
                        </div>

                    </div>
                </div>
                <div class="dash-job-set">
                    <h2 class="dash-box-title2">View Mode</h2>
                    <div class="mag-b">
                        <div style="font-size:13px" class="mag-b ts-13 tc-b6 bm-b-20">
                            <div class="mag-b">
                                <div class="mag-b ts-13" id="set-kind-jtxt">
                                    <b> You are on view <span class="tc-o">All Jobs</span> mode.</b><br />
                                    <span class="ts-13 tc-b9">Use the button by the side to change your view mode</span></div>
                                <div class="switch-but">
                                    <a href="/dashboard?view=1" id="switch-but-left" style="color:#FFF; background-color:#F60;">All Jobs</a>
                                    <a href="/dashboard?view=2" id="switch-but-right">Personalized Jobs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mag-pb-5">
            <div class="cv-builder-status">
                <div class="cv-icon">&nbsp;</div>
                <div class="cv-builder-reminder">
                    <h2 class="mag-b ts-18 tc-b3 bm-t-0" style="margin-top:0px; margin-bottom:0px;">
                        Complete Your CV</h2>
                    <div class="mag-b ts-12 tc-b6">Employers will find you 4x faster with a complete profile.
                        You can download your completed profile anytime</div>
                    <div style="float:left; margin-top:15px" class="cv-completing"><span style="background-color:#F90; width:15%">&nbsp;</span></div>
                    <div id="cv-builder-rno" class="cv-completed-no">15% Completed</div>
                </div>
                <nuxt-link to="cv" class="buildcv">Complete CV</nuxt-link>
            </div>
    
            <a href="#0" class="js-cd-top" id="scroll-to-top">&nbsp;</a>
            <script type="text/javascript" language="javascript" src="/js/scroll-page.1649431706.js"></script>
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