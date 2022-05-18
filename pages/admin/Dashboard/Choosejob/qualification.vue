<template>
  <div>
      <Nav />
      <section class="mag-b bg-a4 bb-b">
    <div class="mini-window">
        <h1 class="mag-b center">Set Your Qualification</h1>
        <p class="mag-b ts-13 tc-b6 center">Select your maximum academic qualification and years of experience</p>
        <form class="mag-b bm-t-30" method="post" action="" enctype="multipart/form-data">
            <div class="mag-b bm-b-20">
                <div class="mag-b ts-14 tc-b3 bm-b-10">Maximum Qualification</div>
                <select name="qualification" class="form-input">
                    <option value="">None</option>
                    <option value="5">BA/BSc/HND</option>
                    <option value="1">First School Leaving Certificate</option>
                    <option value="6">MBA/MSc/MA</option>
                    <option value="3">NCE</option>
                    <option value="4">OND</option>
                    <option value="9">Others</option>
                    <option value="7">PhD/Fellowship</option>
                    <option value="2">Secondary School (SSCE)</option>
                    <option value="8">Vocational</option>
                </select>
            </div>
            <div class="mag-b">
                <div class="mag-b ts-14 tc-b3 bm-b-10">Working Experience</div>
                <select name="experience" class="form-input">
                    <option value="None">None</option>
                    <option value="1 - 4">1 - 4 years</option>
                    <option value="5 - 10">5 - 10 years</option>
                    <option value="11 - 35">11 - 35 years</option>
                </select>
            </div>
            <div class="mag-b bm-t-20">
                <input name="industry" type="hidden" id="chosen-fields">
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