<template>
  <div>
      <Nav />
      <section class="mag-b bg-a4 bb-b">
    <div class="mini-window">
        <h1 class="mag-b center">Choose Job Location</h1>
        <p class="mag-b ts-13 tc-b6 center">Select your preferred locations. You can select as many as you want</p>
        <form method="post" action="javascript:;" enctype="multipart/form-data" onsubmit="processChooseField(this)">
            <ul class="category-list2">
                <li onclick="selectJF(this)"><input type="hidden" value="156">Abia</li>
                <li onclick="selectJF(this)"><input type="hidden" value="155">Abuja</li>
                <li onclick="selectJF(this)"><input type="hidden" value="157">Adamawa</li>
                <li onclick="selectJF(this)"><input type="hidden" value="158">Akwa Ibom</li>
                <li onclick="selectJF(this)"><input type="hidden" value="152">Anambra</li>
                <li onclick="selectJF(this)"><input type="hidden" value="159">Bauchi</li>
                <li onclick="selectJF(this)"><input type="hidden" value="160">Bayelsa</li>
                <li onclick="selectJF(this)"><input type="hidden" value="161">Benue</li>
                <li onclick="selectJF(this)"><input type="hidden" value="162">Borno</li>
                <li onclick="selectJF(this)"><input type="hidden" value="163">Cross River</li>
                <li onclick="selectJF(this)"><input type="hidden" value="164">Delta</li>
                <li onclick="selectJF(this)"><input type="hidden" value="153">Ebonyi</li>
                <li onclick="selectJF(this)"><input type="hidden" value="165">Edo</li>
                <li onclick="selectJF(this)"><input type="hidden" value="166">Ekiti</li>
                <li onclick="selectJF(this)"><input type="hidden" value="151">Enugu</li>
                <li onclick="selectJF(this)"><input type="hidden" value="167">Gombe</li>
                <li onclick="selectJF(this)"><input type="hidden" value="168">Imo</li>
                <li onclick="selectJF(this)"><input type="hidden" value="169">Jigawa</li>
                <li onclick="selectJF(this)"><input type="hidden" value="170">Kaduna</li>
                <li onclick="selectJF(this)"><input type="hidden" value="171">Kano</li>
                <li onclick="selectJF(this)"><input type="hidden" value="172">Katsina</li>
                <li onclick="selectJF(this)"><input type="hidden" value="173">Kebbi</li>
                <li onclick="selectJF(this)"><input type="hidden" value="174">Kogi</li>
                <li onclick="selectJF(this)"><input type="hidden" value="175">Kwara</li>
                <li onclick="selectJF(this)"><input type="hidden" value="154">Lagos</li>
                <li onclick="selectJF(this)"><input type="hidden" value="181">Nasarawa</li>
                <li onclick="selectJF(this)"><input type="hidden" value="176">Niger</li>
                <li onclick="selectJF(this)"><input type="hidden" value="177">Ogun</li>
                <li onclick="selectJF(this)"><input type="hidden" value="178">Ondo</li>
                <li onclick="selectJF(this)"><input type="hidden" value="179">Osun</li>
                <li onclick="selectJF(this)"><input type="hidden" value="188">Other</li>
                <li onclick="selectJF(this)"><input type="hidden" value="180">Oyo</li>
                <li onclick="selectJF(this)"><input type="hidden" value="182">Plateau</li>
                <li onclick="selectJF(this)"><input type="hidden" value="184">Rivers</li>
                <li onclick="selectJF(this)"><input type="hidden" value="183">Sokoto</li>
                <li onclick="selectJF(this)"><input type="hidden" value="185">Taraba</li>
                <li onclick="selectJF(this)"><input type="hidden" value="186">Yobe</li>
                <li onclick="selectJF(this)"><input type="hidden" value="187">Zamfara</li>
            </ul>
            <div class="mag-b bm-t-20">
                <input name="state" type="hidden" id="chosen-fields">
                <input type="submit" class="update-but fl-l bg-o bm-b-20" style="margin-bottom:20px" value="Save">
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