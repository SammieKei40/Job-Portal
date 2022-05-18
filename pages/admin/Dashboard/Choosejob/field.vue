<template>
  <div>
      <Nav />
      
      <section class="mag-b bg-a4 bb-b">
    <div class="mini-window">
        <h1 class="mag-b center">Choose Job Field</h1>
        <p class="mag-b ts-13 tc-b6 center">Select kind of jobs you are interested in. You can select as many as you want</p>
        <form method="post" action="javascript:;" enctype="multipart/form-data" onsubmit="processChooseField(this)">
            <ul class="category-list2">
                <li onclick="selectJF(this)"><input type="hidden" value="4">Administration / Secretarial</li>
                <li onclick="selectJF(this)"><input type="hidden" value="7">Agriculture / Agro-Allied</li>
                <li onclick="selectJF(this)"><input type="hidden" value="10">Art / Crafts / Languages</li>
                <li onclick="selectJF(this)"><input type="hidden" value="8">Aviation / Airline</li>
                <li onclick="selectJF(this)"><input type="hidden" value="11">Banking</li>
                <li onclick="selectJF(this)"><input type="hidden" value="13">Building and Construction</li>
                <li onclick="selectJF(this)"><input type="hidden" value="53">Catering / Confectionery</li>
                <li onclick="selectJF(this)"><input type="hidden" value="66">Consultancy</li>
                <li onclick="selectJF(this)"><input type="hidden" value="39">Customer Care</li>
                <li onclick="selectJF(this)"><input type="hidden" value="70">Data Science / Research</li>
                <li onclick="selectJF(this)"><input type="hidden" value="22">Driving</li>
                <li onclick="selectJF(this)"><input type="hidden" value="31">Education / Teaching</li>
                <li onclick="selectJF(this)"><input type="hidden" value="1">Engineering / Technical</li>
                <li onclick="selectJF(this)"><input type="hidden" value="71">Expatriate</li>
                <li onclick="selectJF(this)"><input type="hidden" value="61">Finance / Accounting / Audit</li>
                <li onclick="selectJF(this)"><input type="hidden" value="34">General</li>
                <li onclick="selectJF(this)"><input type="hidden" value="14">Graduate Jobs</li>
                <li onclick="selectJF(this)"><input type="hidden" value="25">Hospitality / Hotel / Restaurant</li>
                <li onclick="selectJF(this)"><input type="hidden" value="26">Human Resources / HR</li>
                <li onclick="selectJF(this)"><input type="hidden" value="27">ICT / Computer</li>
                <li onclick="selectJF(this)"><input type="hidden" value="29">Insurance</li>
                <li onclick="selectJF(this)"><input type="hidden" value="69">Internships / Volunteering</li>
                <li onclick="selectJF(this)"><input type="hidden" value="67">Janitorial Services</li>
                <li onclick="selectJF(this)"><input type="hidden" value="28">Law / Legal</li>
                <li onclick="selectJF(this)"><input type="hidden" value="63">Logistics</li>
                <li onclick="selectJF(this)"><input type="hidden" value="17">Manufacturing</li>
                <li onclick="selectJF(this)"><input type="hidden" value="16">Media / Advertising / Branding</li>
                <li onclick="selectJF(this)"><input type="hidden" value="2">Medical / Healthcare</li>
                <li onclick="selectJF(this)"><input type="hidden" value="20">MyJobMag</li>
                <li onclick="selectJF(this)"><input type="hidden" value="30">NGO/Non-Profit</li>
                <li onclick="selectJF(this)"><input type="hidden" value="41">Oil and Gas / Energy</li>
                <li onclick="selectJF(this)"><input type="hidden" value="62">Pharmaceutical</li>
                <li onclick="selectJF(this)"><input type="hidden" value="65">Procurement / Store-keeping / Supply Chain</li>
                <li onclick="selectJF(this)"><input type="hidden" value="18">Project Management</li>
                <li onclick="selectJF(this)"><input type="hidden" value="35">Real Estate</li>
                <li onclick="selectJF(this)"><input type="hidden" value="68">Safety and Environment / HSE</li>
                <li onclick="selectJF(this)"><input type="hidden" value="6">Sales / Marketing / Retail / Business Development</li>
                <li onclick="selectJF(this)"><input type="hidden" value="72">Science</li>
                <li onclick="selectJF(this)"><input type="hidden" value="21">Security / Intelligence</li>
                <li onclick="selectJF(this)"><input type="hidden" value="64">Travels &amp; Tours</li>
            </ul>
            <div class="mag-b bm-t-20">
                <input name="field" type="hidden" id="chosen-fields">
                <input type="submit" class="update-but fl-l bg-o" value="Save" style="margin-bottom:20px">
            </div>
        </form>
    </div>
</section>
  </div>
</template>

<script>
import Nav from "@/components/Nav";


export default {
    components: {
        Nav
    }
}
</script>

<style>

</style>