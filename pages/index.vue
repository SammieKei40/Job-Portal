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
                    <li id="close-menue" @click="close">X</li>
                 
                    <li class="nav-li" id="login-nav">
                        <nuxt-link to="admin/login"  >Login ~ Jobseeker</nuxt-link>
                    </li>
                    <li class="nav-li" id="signup-nav">
                        <nuxt-link to="admin/signin"  >Signup</nuxt-link>
                    </li>
                    <li class="nav-li" id="login-nav">
                        <nuxt-link to="admin/loginEmployer"  >Login ~ Employer</nuxt-link>
                    </li>
                </ul>
            </nav>
            <ul class="nav-2" style="margin-right:0px">
               <li>
                 <nuxt-link to="admin/login" style=" border-color:#FFF" >Login ~ Jobseeker</nuxt-link>
                 </li>
                <li>
                  <nuxt-link to="admin/signin"  >Signup</nuxt-link>
                </li>
                <li>
                 <nuxt-link to="admin/loginEmployer" style=" border-color:#FFF" >Login ~ Employer</nuxt-link>
                 </li>
            </ul>
           
            <a href="javascript:;" class="mobile-search-icon" onclick="showSearchBox(1,this)">&nbsp;</a>
        </div>
    </div>
    <div class="mobile-nav">
        <a href="index.vue" id="mn-jobs">Jobs</a>
        <a href="blog.html" id="mn-advice">Career Advice</a>
        <nuxt-link to="admin/signin"  style=" border-right:none" id="mn-signup">Signup</nuxt-link>
    </div>
    <div id="search" class="dsearch-class1">
        <div class="content-wrap">
            <form class="search-form" action="https://www.myjobmag.com/search/jobs" method="get">
                <label id="search-title">Search for Jobs</label>
                <div class="search-input-wrap">
                    <div class="search-input-box">

                        <input class="search-input" type="text" id="search-key" autocomplete="off" placeholder="Company Name or Job Title" name="q" />
                    </div>
                    <div class="search-input-box">
                        <input style="color:#CCC" title="Location" id="search-location" class="search-input" type="text" value="Location" onclick="dropMultiSelect(this,this.nextSibling);" readonly="readonly" />
                        <div class="select-option-house">
                            <div id="select-option-box"><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Abia" />Abia</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Abuja" />Abuja</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Adamawa" />Adamawa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Akwa Ibom" />Akwa Ibom</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Anambra" />Anambra</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Bauchi" />Bauchi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Bayelsa" />Bayelsa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Benue" />Benue</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Borno" />Borno</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Cross River" />Cross River</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Delta" />Delta</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ebonyi" />Ebonyi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Edo" />Edo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ekiti" />Ekiti</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Enugu" />Enugu</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Gombe" />Gombe</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Imo" />Imo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Jigawa" />Jigawa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kaduna" />Kaduna</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kano" />Kano</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Katsina" />Katsina</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kebbi" />Kebbi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kogi" />Kogi</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Kwara" />Kwara</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Lagos" />Lagos</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Nasarawa" />Nasarawa</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Niger" />Niger</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ogun" />Ogun</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Ondo" />Ondo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Osun" />Osun</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Other" />Other</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Oyo" />Oyo</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Plateau" />Plateau</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Rivers" />Rivers</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Sokoto" />Sokoto</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Taraba" />Taraba</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Yobe" />Yobe</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'location')" type="checkbox" value="Zamfara" />Zamfara</label></div>
                        </div>
                    </div>
                    <div id="advance-fields">
                        <div class="search-input-box">
                            <input style="color:#CCC" title="Field" id="search-field" class="search-input" type="text" value="Field" onclick="dropMultiSelect(this,this.nextSibling);" readonly="readonly" />
                            <div class="select-option-house">
                                <div id="select-option-box"><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Administration / Secretarial" />Administration / Secretarial</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Agriculture / Agro-Allied" />Agriculture / Agro-Allied</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Art / Crafts / Languages" />Art / Crafts / Languages</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Aviation / Airline" />Aviation / Airline</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Banking" />Banking</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Building and Construction" />Building and Construction</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Catering / Confectionery" />Catering / Confectionery</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Consultancy" />Consultancy</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Customer Care" />Customer Care</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Data Science / Research" />Data Science / Research</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Driving" />Driving</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Education / Teaching" />Education / Teaching</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Engineering / Technical" />Engineering / Technical</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Expatriate" />Expatriate</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Finance / Accounting / Audit" />Finance / Accounting / Audit</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="General" />General</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Graduate Jobs" />Graduate Jobs</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Hospitality / Hotel / Restaurant" />Hospitality / Hotel / Restaurant</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Human Resources / HR" />Human Resources / HR</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="ICT / Computer" />ICT / Computer</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Insurance" />Insurance</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Internships / Volunteering" />Internships / Volunteering</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Janitorial Services" />Janitorial Services</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Law / Legal" />Law / Legal</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Logistics" />Logistics</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Manufacturing" />Manufacturing</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Media / Advertising / Branding" />Media / Advertising / Branding</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Medical / Healthcare" />Medical / Healthcare</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="MyJobMag" />MyJobMag</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="NGO/Non-Profit" />NGO/Non-Profit</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Oil and Gas / Energy" />Oil and Gas / Energy</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Pharmaceutical" />Pharmaceutical</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Procurement / Store-keeping / Supply Chain" />Procurement / Store-keeping / Supply Chain</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Project Management" />Project Management</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Real Estate" />Real Estate</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Safety and Environment / HSE" />Safety and Environment / HSE</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Sales / Marketing / Retail / Business Development" />Sales / Marketing / Retail / Business Development</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Science" />Science</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Security / Intelligence" />Security / Intelligence</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'field')" type="checkbox" value="Travels &amp; Tours" />Travels &amp; Tours</label></div>
                            </div>
                        </div>
                        <div class="search-input-box">
                            <input style="color:#CCC" title="Industry" id="search-industry" class="search-input" type="text" value="Industry" onclick="dropMultiSelect(this,this.nextSibling);" readonly="readonly" />
                            <div class="select-option-house">
                                <div id="select-option-box"><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Engineering / Technical" />Engineering / Technical</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Healthcare / Medical" />Healthcare / Medical</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Creative / Arts" />Creative / Arts</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Education / Teaching" />Education / Teaching</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Oil and Gas / Marine" />Oil and Gas / Marine</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Manufacturing / Production / FMCG" />Manufacturing / Production / FMCG</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Media / Radio / TV" />Media / Radio / TV</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Agriculture / Agro-Allied" />Agriculture / Agro-Allied</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="NGO / Non-Profit Associations" />NGO / Non-Profit Associations</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Government" />Government</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Building / Construction" />Building / Construction</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Hospitality" />Hospitality</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Insurance" />Insurance</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Law / Legal" />Law / Legal</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Consulting" />Consulting</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Banking / Financial Services" />Banking / Financial Services</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Food Services" />Food Services</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="ICT / Telecommunication" />ICT / Telecommunication</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Travel and Tours" />Travel and Tours</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Logistics and Transportation" />Logistics and Transportation</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Sales / Retail" />Sales / Retail</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="General" />General</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Real Estate" />Real Estate</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Security" />Security</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Aviation / Airline" />Aviation / Airline</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Pharmaceuticals" />Pharmaceuticals</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Religious" />Religious</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Advertising / Branding / PR" />Advertising / Branding / PR</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Online Sales / Marketing" />Online Sales / Marketing</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Professional / Social Associations" />Professional / Social Associations</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Janitorial Services / Environment" />Janitorial Services / Environment</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Power / Energy" />Power / Energy</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Research" />Research</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Science" />Science</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Internet / E-commerce" />Internet / E-commerce</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Raffle" />Raffle</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'industry')" type="checkbox" value="Blockchain" />Blockchain</label></div>
                            </div>
                        </div>
                        <div class="search-input-box">
                            <input style="color:#CCC" title="Education" id="search-education" class="search-input" type="text" value="Education" onclick="dropMultiSelect(this,this.nextSibling);" readonly="readonly" />
                            <div class="select-option-house">
                                <div id="select-option-box"><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="BA/BSc/HND" />BA/BSc/HND</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="First School Leaving Certificate" />First School Leaving Certificate</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="MBA/MSc/MA" />MBA/MSc/MA</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="NCE" />NCE</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="OND" />OND</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="Others" />Others</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="PhD/Fellowship" />PhD/Fellowship</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="Secondary School (SSCE)" />Secondary School (SSCE)</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'education')" type="checkbox" value="Vocational" />Vocational</label></div>
                            </div>
                        </div>
                        <div class="search-input-box">
                            <input style="color:#CCC" title="Experience" id="search-experience" class="search-input" type="text" value="Experience" onclick="dropMultiSelect(this,this.nextSibling);" readonly="readonly" />
                            <div class="select-option-house">
                                <div id="select-option-box"><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'experience')" type="checkbox" value="None" />None</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'experience')" type="checkbox" value="1 - 4" />1 - 4 years</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'experience')" type="checkbox" value="5 - 10" />5 - 10 years</label><label class="mag-b bp-bt-5" id="input-rap"><input autocomplete="off" onchange="selectOption(this,this.parentNode.parentNode,'experience')" type="checkbox" value="11 - 35" />11 - 35 years</label></div>
                            </div>
                        </div>
                        <div id="close-advance" onClick="closeAdvanceSearch(this)">Close</div>
                    </div>
                </div>
                <input type="submit" class="search-but" value="Search Job" id="search-but" />
                <div onClick="showAdvanceSearch(this)" id="advance-search-but" class="advance-search-but">Advance Search</div>
            </form>
        </div>
    </div>
    <div class="mag-b" style="margin-top:0px;">
        <div id="jobs-sec">
            <div class="content-wrap2">
                <div class="left-section">
                    <div class="job-list-li center">
                    </div>

                    <div class="mag-b">
                        <h2 class="main-h2-2" style="margin-bottom: 20px">
                            Featured Jobs
                        </h2>
                        <ul class="featured-jobs" style="padding-bottom: 20px; margin-top: 0px">
                            <li><a title="" href="#">Training Curriculum Development Consultant at John Snow, Incorporated</a></li>
                            <li><a title="" href="#">Accountant at BizPoint Consults Limited</a></li>
                            <li><a title="" href="#">Marketing & Sales Business Development Executive at Mejo Marketing Agency</a></li>
                            <li><a title="" href="#">Medical Sales Representatives at a Pharmaceutical Company</a></li>
                            <li><a title="" href="#">Head, Risk Management at Neptune Microfinance Bank</a></li>
                            <li><a title="" href="#">Quality Assurance/Control Officers at BizPoint Consults Limited</a></li>
                            <li style="width:50%; background-image: none; padding-left: 0px"><a title="Search jobs by location" href="#" id="view-all" style="float: left;">See More</a></li>
                        </ul>
                    </div>
                    <h1 class="main-h2-2">
                        Latest Jobs in Nigeria 2022
                    </h1>
                    <div class="choose-ur-job">Choose the kind of jobs you see 
                    <nuxt-link to="admin/jobseeker"  class="signup-a" id="jobseeker-a">Signup</nuxt-link>
                    </div>
                    <ul class="job-list">
                        <li class="job-list-li">
                            <ul>
                                <li class="job-logo">
                                 </li>
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Expression of Interest at Ipas Nigeria</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            Founded in 1973, Ipas is a global nongovernmental organization dedicated to ending preventable deaths and disabilities from unsafe abortion. Through local, national and global partnerships, Ipas works...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li" style="text-align:center;">
                        </li>
                        <li class="job-list-li">
                            <ul>
          
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Sales Manager at an FMCG Company</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            This company is looking to recruit qualified applicants for Sales Manager role
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li">
                            <ul>
          
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Sales Officer at Obikason Agro</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            Obikason Agro is a company incorporated in Nigeria who believes in delivering exceptional agro tools and accessories through best in kind customer service. Obikason Agro makes it possible for farmers...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li">
                            <ul>
          
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Human Resources Assistant at CNG GLASS NIGRIA FZE</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            This company is looking to recruit qualified applicants for Human Resources Assistant role
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li">
                            <ul>
          
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Telesales Repesentative at WebNig</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            We are a premier digital marketing agency in Nigeria offering an integrated service for businesses that want to get ahead. And we see a partnership with you as a key part of the journey. Blending high...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">05 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li" style="text-align:center;">
                        </li>
                        <li class="job-list-li">
                            <ul>
          
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Experienced Loan Officer at Neptune Microfinance Bank</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            Neptune is on a mission to empower people through financial inter-mediation in Nigeria and Africa. We are poised to meet your business and personal financial needs.
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">05 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li">
                            <ul>
                      
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Head, Risk Management at Neptune Microfinance Bank</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            Neptune is on a mission to empower people through financial inter-mediation in Nigeria and Africa. We are poised to meet your business and personal financial needs.
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">05 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li">
                            <ul>
                      
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Production of Animation Videos on the KCC (Kotex) Menstrual Hygiene Management Project in Bauchi State at Plan International Nigeria</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            Plan International was founded over 75 years ago with a mission to promote and protect the rights of children.
                                            The organisation was set up by British journalist John Langdon-Davies and refugee work...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">05 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                       
                        <li class="job-list-li">
                            <ul>
                                                      <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Jobs at ARM Pension Managers (PFA) Limited</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            ARM Life formerly CrystaLife Assurance Plc. is the insurance subsidiary of Asset &amp; Resource Management Company Ltd (ARM).
                                            Its parent company, ARM is one of the largest non-bank financial servic...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                        <li class="sub-job-sec">
                                            <ul id="sbu-job-list">
                                                <li><a href="#">Business Development Executive(Taraba)</a></li>
                                                <li><a href="#">Business Development Executive(Osun)</a></li>
                                                <li><a href="#">Business Development Executive(Imo)</a></li>
                                                <li><a href="#">Business Development Executive(Abia)</a></li>
                                                <li><a href="#">Business Development Executive(Ebonyi)</a></li>
                                                <li><a href="#">Business Development Executive(Enugu)</a></li>
                                                <li><a href="#">Business Development Executive(Delta)</a></li>
                                                <li><a href="#">Business Development Executive(Lagos)</a></li>
                                                <li><a href="#">Business Development Executive(Benue)</a></li>
                                                <li><a href="#">Business Development Executive(Rivers)</a></li>
                                                <li><a href="#">Business Development Executive(Nasarawa)</a></li>
                                                <li><a href="#">Business Development Executive(Zamfara)</a></li>
                                                <li><a href="#">Business Development Executive(Kano)</a></li>
                                                <li><a href="#">Business Development Executive(Anambra)</a></li>
                                                <li><a href="#">Business Development Executive(Akwa Ibom)</a></li>
                                                <li><a href="#">Business Development Executive(Kaduna)</a></li>
                                                <li><a href="#">Business Development Executive(Kogi)</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li" style="text-align:center;">
                        </li>
                        <li class="job-list-li">
                            <ul>
                       
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Fresh Jobs at Alneli</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            Quality Bathroom And Home Improvement Products At Great Prices Guaranteed.
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                        <li class="sub-job-sec">
                                            <ul id="sbu-job-list">
                                                <li><a href="#">Content Creator and Social Media Manager</a></li>
                                                <li><a href="#">Project Sales Manager</a></li>
                                                <li><a href="#">Inventory Officer</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                       
                        <li class="job-list-li">
                            <ul>
                       
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Executive Driver at Institute of Credit Administration (ICA)</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            No economy grows without the use of credit and there is no example of any advanced society without the use of credit. Credit at whatever level of sector, if not properly managed could spell doom for a...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                                            <li class="job-list-li" style="text-align:center;">
                        </li>
                        <li class="job-list-li">
                            <ul>
                    
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Technical Drawing Educator at Bradfield Consulting</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            Bradfield is equipped not only to attract excellent personnel but to ensure that they are improved and empowered to deliver on every client&rsquo;s strategic intent/organizational goal. Our value is t...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li">
                            <ul>
                                                    <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Fresh Jobs at GUS Consulting Limited</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            GUS Consulting Ltd is a dynamic provider of value-adding services to the oil &amp; gas, energy &amp; maritime industries. Over the years, our service delivery method has remained of the highest indust...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                        <li class="sub-job-sec">
                                            <ul id="sbu-job-list">
                                                <li><a href="#">Assistant Marketing Manager</a></li>
                                                <li><a href="#">Assistant Marketing Manager - Automobile Service</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="job-list-li">
                            <ul>
                
                                <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Electrical Engineer at Jaykay Group</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            We are into the production and manufacture of rugs and carpets
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                            <ul>
                                                  <li class="job-info">
                                    <ul>
                                        <li class="mag-b">
                                            <h2><a href="#">Front Desk Officer at an FMCG Company - First Excelsia Professional Services Limited</a></h2>
                                        </li>
                                        <li class="job-desc">
                                            FirstExcelsia is a firm of highly versatile and renowned Human Resources, Organisational Development and Management consultants. We have an in-depth understanding of the Nigerian business terrain and...
                                        </li>
                                        <li class="job-item">
                                            <ul>
                                                <li id="job-date">06 May</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        
                    </ul>
                    <div class="mag-b bm-b-20">
                        <div id="choose-job-down" class="choose-ur-job">Choose the kind of jobs you see <a href="jobseekers/signup.html" class="but-1">Signup</a></div>
                        <ul class='setPaginate'>
                            <li><a class='current_page'>1</a></li>
                            <li><a href='#'>2</a></li>
                            <li><a href='#'>3</a></li>
                            <li><a href='#'>4</a></li>
                            <li><a href='#'>5</a></li>
                        </ul>
                    </div>

                    <div class="mag-b bm-b-10 center">

                    </div>
                </div>
                <div class="right-section">

                    <div class="mag-b bm-b-30">
                        <div id="subscription" style="width: 90%; padding-left: 5%; padding-right: 5%; padding-top: 30px; padding-bottom: 30px; margin-top: 0px; margin-bottom: 20px">
                            <div class="mag-b">
                                <h2 class="main-h2">Subscribe to Job Alert</h2>
                                <div class="h2-line bm-b-10" id="subscr-h2-line">&nbsp;</div>
                                <p class="center ts-14 tc-b66">Join our happy subscribers</p>
                            </div>

                            <form @submit.prevent="activeSubscribe" name="subscribe-form" class="subscribe-form" action="#" method="post">
                                <input v-model="email"  autocomplete="on"  id="subscribe-user-email2" class="subscribe-input" type="email" name="subscribe_email_input" placeholder="Enter your email here!"  />
        
                                <button id="subscribe-but2" @submit="activeSubscribe">Subscribe</button>
                                <div id="mail-host-house" style="margin-top: 0px">
                                    <ul class="mail-hosts">
                                        <li onClick="choseEmailHost(this)">@gmail.com</li>
                                        <li onClick="choseEmailHost(this)">@yahoo.com</li>
                                        <li onClick="choseEmailHost(this)">@outlook.com
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="mag-b bm-b-10 center">

                    </div>
                    <div class="mag-b bm-b-30">
                        <ul class="category-box" style="border-bottom:none;">
                            <li id="job-cat-head">Job By States </li>
                            <li style="width:100%">
                                <div class="h3-line bm-b-20">&nbsp;</div>
                            </li>
                            <li><a title="Jobs in Abuja" href="#">Jobs in Abuja</a></li>
                            <li><a title="Jobs in Rivers" href="#">Jobs in Rivers</a></li>
                            <li><a title="Jobs in Enugu" href="#">Jobs in Enugu</a></li>
                            <li><a title="Jobs in Akwa Ibom" href="#">Jobs in Akwa Ibom</a></li>
                            <li><a title="Jobs in Delta" href="#">Jobs in Delta</a></li>
                            <li><a title="Jobs in Ogun" href="#">Jobs in Ogun</a></li>
                            <li><a title="Jobs in Lagos" href="#">Jobs in Lagos</a></li>
                            <li style="width:100%"><a title="Search jobs by location" href="#" id="view-all">Search jobs by location</a></li>
                        </ul>
                        <ul class="category-box" style="border-bottom:none;">
                            <li id="job-cat-head">Job By Education </li>
                            <li style="width:100%">
                                <div class="h3-line bm-b-20">&nbsp;</div>
                            </li>
                            <li><a title="First School Leaving Certificate (FSLC) Jobs" href="#">First School Leaving Certificate (FSLC) Jobs</a></li>
                            <li><a title="Secondary School (SSCE) Jobs" href="#">Secondary School (SSCE) Jobs</a></li>
                            <li><a title="NCE Jobs" href="#">NCE Jobs</a></li>
                            <li><a title="OND Jobs" href="#">OND Jobs</a></li>
                            <li><a title="BA/BSc/HND Jobs" href="#">BA/BSc/HND Jobs</a></li>
                            <li><a title="MBA/MSc/MA Jobs" href="#">MBA/MSc/MA Jobs</a></li>
                            <li><a title="PhD/Fellowship Jobs" href="#">PhD/Fellowship Jobs</a></li>
                            <li><a title="Vocational Jobs" href="#">Vocational Jobs</a></li>
                            <li style="width:100%"><a title="Search jobs by qualification" href="#" id="view-all">Search jobs by qualification</a></li>
                        </ul>
                        <ul class="category-box" style="border-bottom:none;">
                            <li id="job-cat-head">Job By Field </li>
                            <li style="width:100%">
                                <div class="h3-line bm-b-20">&nbsp;</div>
                            </li>
                            <li><a title="Graduate Jobs" href="#">Graduate Jobs</a></li>
                            <li><a title="Internship Jobs" href="#">Internship Jobs</a></li>
                            <li><a title="Administration / Secretarial Jobs" href="#">Administration / Secretarial Jobs</a></li>
                            <li><a title="Sales / Marketing Jobs" href="#">Sales / Marketing Jobs</a></li>
                            <li><a title="Engineering / Technical Jobs" href="#">Engineering / Technical Jobs</a></li>
                            <li><a title="Finance / Accounting / Audit Jobs" href="#">Finance / Accounting / Audit Jobs</a></li>
                            <li><a title="Information Technology ( ICT ) Jobs" href="#">Information Technology ( ICT ) Jobs</a></li>
                            <li><a title="Customer Care Jobs" href="#">Customer Care Jobs</a></li>
                            <li style="width:100%"><a title="Search jobs by field" href="#" id="view-all">Search jobs by field</a></li>
                        </ul>

                        <ul class="category-box" style="border-bottom:none;">
                            <li id="job-cat-head">Job By Region </li>
                            <li style="width:100%">
                                <div class="h3-line bm-b-20">&nbsp;</div>
                            </li>
                            <li><a title="Jobs in South West" href="#">Jobs in South West</a></li>
                            <li><a title="Jobs in North Central" href="#">Jobs in North Central</a></li>
                            <li><a title="Jobs in South South" href="#">Jobs in South South</a></li>
                            <li><a title="Jobs in North East" href="#">Jobs in North East</a></li>
                            <li><a title="Jobs in South East" href="#">Jobs in South East</a></li>
                            <li><a title="Jobs in North West" href="#">Jobs in North West</a></li>

                        </ul>
                        <ul class="category-box" style="border-bottom:none;">
                            <li id="job-cat-head">Job By Industry </li>
                            <li style="width:100%">
                                <div class="h3-line bm-b-20">&nbsp;</div>
                            </li>
                            <li><a title="ICT / Telecommunications Jobs" href="#">ICT / Telecommunications Jobs</a></li>
                            <li><a title="NGO / Non-Profit Associations Jobs" href="#">NGO / Non-Profit Associations Jobs</a></li>
                            <li><a title="Oil and Gas / Energy / Marine Jobs" href="#">Oil and Gas / Energy / Marine Jobs</a></li>
                            <li><a title="Manufacturing / FMCG Jobs" href="#">Manufacturing / FMCG Jobs</a></li>
                            <li><a title="Banking / Financial Services Jobs" href="#">Banking / Financial Services Jobs</a></li>
                            <li><a title="Healthcare / Medical Jobs" href="#">Healthcare / Medical Jobs</a></li>
                            <li><a title="Education / Teaching Jobs" href="#">Education / Teaching Jobs</a></li>
                            <li><a title="Engineering / Power / Energy Jobs" href="#">Engineering / Power / Energy Jobs</a></li>
                            <li style="width:100%"><a href="#" id="view-all">Search jobs by industry</a></li>
                        </ul>
                        <ul class="category-box" style="border-bottom:none;">
                            <li id="job-cat-head">Job By Title </li>
                            <li style="width:100%">
                                <div class="h3-line bm-b-20">&nbsp;</div>
                            </li>
                            <li><a title="Graphic Designer Jobs" href="#">Graphic Designer Jobs</a></li>
                            <li><a title="Writer Jobs" href="#">Writer Jobs</a></li>
                            <li><a title="Intern Jobs" href="#">Intern Jobs</a></li>
                            <li><a title="Web Developer Jobs" href="#">Web Developer Jobs</a></li>
                            <li><a title="Front Desk Jobs" href="#">Front Desk Jobs</a></li>
                            <li><a title="Sales Manager Jobs" href="#">Sales Manager Jobs</a></li>
                            <li><a title="Medical Representative Jobs" href="#">Medical Representative Jobs</a></li>
                            <li><a title="Accountant Jobs" href="#">Accountant Jobs</a></li>
                            <li style="width:100%"><a title="Search jobs by title" href="#" id="view-all">Search jobs by title</a></li>
                        </ul>
                    </div>
                    <div class="mag-b bm-b-30">

                    </div>
                    
                    <div class="mag-b bm-b-30">
                        <div id="subscription" style="width: 90%; padding-left: 5%; padding-right: 5%; padding-top: 30px; padding-bottom: 30px; margin-top: 0px; margin-bottom: 20px">
                            <div class="mag-b">
                                <h2 class="main-h2">Subscribe to Job Alert</h2>
                                <div class="h2-line bm-b-10" id="subscr-h2-line">&nbsp;</div>
                                <p class="center ts-14 tc-b66">Join our happy subscribers</p>
                            </div>

                            <form @submit.prevent="activeSubscribe" name="subscribe-form" class="subscribe-form" action="#" method="post">
                                <input v-model="email"  autocomplete="on"  id="subscribe-user-email2" class="subscribe-input" type="email" name="subscribe_email_input" placeholder="Enter your email here!"  />
        
                                <button id="subscribe-but2" @submit="activeSubscribe">Subscribe</button>
                                <div id="mail-host-house" style="margin-top: 0px">
                                    <ul class="mail-hosts">
                                        <li onClick="choseEmailHost(this)">@gmail.com</li>
                                        <li onClick="choseEmailHost(this)">@yahoo.com</li>
                                        <li onClick="choseEmailHost(this)">@outlook.com
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="mag-b bm-b-50">
                        <div class="box-title">
                            <h2>Career Advice</h2>
                        </div>
                        <ul class="job-tips">
                            <li class="" style=" border-bottom:none; ">
                                <h3><a href="#">How to Shortlist Faster using MyJobMag Screening Questions</a></h3>
                            </li>
                            <li class="bg-a4" style=" border-bottom:none; ">
                                <h3><a href="#">How to hire passive candidates</a></h3>
                            </li>
                            <li class="" style=" border-bottom:none; ">
                                <h3><a href="#">Welcome to a New Dispensation! - Attend the Study World Exhibition this March</a></h3>
                            </li>
                            <li class="bg-a4" style=" border-bottom:none; ">
                                <h3><a href="#">Guinness Nigeria Undergraduate Scholarship Scheme</a></h3>
                            </li>
                        </ul>
                        <a href="blog.html" class="view-all-post">View All Career Advice</a>
                    </div>
                    <div class="mag-b" id="br-all-str-rt">&nbsp;</div>
                    <div class="mag-b bm-b-50" id="right-main-ad3">

                    </div>
                </div>
            </div>
        </div>
       
            <div class="mag-b bm-b-30">
                        <div id="subscription" style="width: 90%; padding-left: 5%; padding-right: 5%; padding-top: 30px; padding-bottom: 30px; margin-top: 0px; margin-bottom: 20px">
                            <div class="mag-b">
                                <h2 class="main-h2">Subscribe to Job Alert</h2>
                                <div class="h2-line bm-b-10" id="subscr-h2-line">&nbsp;</div>
                                <p class="center ts-14 tc-b66">Join our happy subscribers</p>
                            </div>

                            <form @submit.prevent="activeSubscribe" name="subscribe-form" class="subscribe-form" action="#" method="post">
                                <input v-model="email"  autocomplete="on"  id="subscribe-user-email2" class="subscribe-input" type="email" name="subscribe_email_input" placeholder="Enter your email here!"  />
        
                                <button id="subscribe-but2" @submit="activeSubscribe">Subscribe</button>
                                <div id="mail-host-house" style="margin-top: 0px">
                                    <ul class="mail-hosts">
                                        <li onClick="choseEmailHost(this)">@gmail.com</li>
                                        <li onClick="choseEmailHost(this)">@yahoo.com</li>
                                        <li onClick="choseEmailHost(this)">@outlook.com
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>

        <section class="mag-b">
            <div class="content-wrap">
                <div id="mjm-desc-sec">
                    <h2 class="ts-18 tc-b3" style="margin-top:0px;">Current Jobs in Nigeria</h2>
                    <div class="mjm-desc-detail ts-13">
                        <h2>Available Jobs in Nigeria Today</h2>
                        <p>Job Portal is a fast-growing jobs in Nigeria publishing platform.</p>
                        <p>We assist job seekers by providing a listing of common jobs in Nigeria, verified job vacancies in Nigeria and career information from employers and recruiters in all Nigerian states. We ensure candidates get to apply for insider job openings near them that go unadvertised both online and in newspapers. Our job services are FREE ie. we do not expect jobseekers to pay for our career services. Subscribe to Job Portal via the following channels: <a href="index.html#subscription">email</a>, <a href="https://www.facebook.com/myjobmag" >Facebook</a>, <a href="https://twitter.com/myjobmag" >Twitter</a>, <a href="https://www.linkedin.com/company/myjobmag-com/" target="_blank">Linkedin</a> and you can check out the latest trending <a href="hot-nigerian-jobs.html">hot nigerian jobs</a> today</p>
                        <h2>Leading Job Site in Nigeria</h2>
                        <p>As the leading job website in Nigeria, Job Portal is much more than just a job listing platform. We offer various articles, tip, resource and tools for both job seekers and employers.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <footer id="main-footer">
        <div class="content-wrap">
                <li class="mjm-desc">
                </li>
                <li class="footer-list">
                    <ul>
                        <li id="footer-title">Candidates</li>
                        <li id="footer-head-line"></li>
                        <li><a href="#" >Job Listing</a></li>
                        <li><a href="#" >CV Rewrite Service</a></li>
                        <li><a href="#" >Salaries & Reviews</a></li>
                        <li><a href="#" >Internship</a></li>
                        <li><a href="#" >Career Tips & Info</a></li>
                        <li><a href="#" >Training</a></li>
                        <li><a href="#" >Scholarships</a></li>
                        <li><a href="#" >Buy 72 hours to the job you love</a></li>
                    </ul>
                </li>
                
            <div class="footer-butom">
                <a href="#" >About Us</a>
                <a href="#" >Contact Us</a>
                <a href="#" >Privacy Policy</a>
                <a href="#" >Terms of Use</a>
                <a id="footer-email" href="mailto:services@myjobportal.com">Email: <b>services@myjobportal.com</b></a>
                <span class="copy-rit">Copyright © 2022 <a style="border-right-style:none" href="#">Job Portal</a></span>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
      data(){
          return {
            email: '',
          }
      },
    methods: {
      close() {
        this.$emit('close');
      },
        activeSubscribe(email){
            axios.post('https://job-portal-ccf02-default-rtdb.firebaseio.com/posts.json', email)
            .then(result => 
                alert('Email submitted successfully'),
                this.email = null
                
            )
            .catch(e => console.log(e))
            console.log(this.email)
        }
    },
  };
</script>
