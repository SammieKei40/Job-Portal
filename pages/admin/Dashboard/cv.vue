<template>
  <div>

      <Nav />

      <section class="dashboard-sec">
    <div class="dasgboard-content" id="dasgboard-content">
        <div class="dash-content">
            <h1 class="new-dash-h1" style="width:auto; float:left; margin-bottom:10px">Profile Completion</h1>
            <div class="mag-b italiz fl-r ts-12 tc-b6">
                Employers will find you 4x faster with a complete profile.
                You can download your completed profile anytime
            </div>
            <div id="cv-completed-status" class="cv-status-box bm-b-20">
                <div style="float:left; margin-right:15px" class="cv-completing"><span id="cv-status-bar" style="background-color:#F90; width:15%">&nbsp;</span></div>
                <div style="float:left" class="cv-completed-no"><b id="cv-status-number">15</b>% Completed</div>
            </div>
            <div class="cv-prev-down-box ">
                <a href="/cv-preview" id="prev-cv-but" class="cv-buts1 bg-b6 bold tc-w ">Preview CV</a>
                <a href="/cv-preview?d" name="cv-download-button" class="cv-buts1 bold tc-w bg-o" id="download-cv-but">Download CV</a>
            </div>
            <div class="settings-cat" id="experience-cat">
                <div class="cv-dispplay-box" style="height: 0px;">
                    <div class="mag-b">
                        <h2 id="builder-name">Shodipo Samuel</h2>
                        <div class="cv-personal-infox">
                            <div class="cv-info-group">
                                <span>Email:</span> <b>shodiposamuel1@gmail.com</b>
                            </div>
                            <div class="cv-info-group">
                                <span>Phone:</span><b class="user-profile-phone">-</b>
                            </div>
                            <div class="cv-info-group">
                                <span>Age:</span> <b class="user-profile-birthday">-</b>
                            </div>
                            <div class="cv-info-group">
                                <span>State of Origin:</span> <b class="user-profile-state">-</b>
                            </div>
                            <div class="cv-info-group">
                                <span>State of Residence:</span> <b class="user-profile-rstate">-</b>
                            </div>
                            <div class="cv-info-group">
                                <span>LGA of Residence:</span> <b class="user-profile-lga">-</b>
                            </div>
                            <div class="cv-info-group">
                                <span class="mag-b">Contact Address:</span> <b class="user-profile-address">-</b>
                            </div>
                            <div class="cv-info-group">
                                <span class="mag-b">Linkedin Page:</span><br> <b class="user-profile-linkedin">-</b>
                            </div><a href="javascript:;" onclick="showEditCVForm2(this)" id="cv-basic-info-but" class="edit-cv">Edit</a>
                        </div>
                        <div class="cv-profile-pix"> <a href="/user/change-photo" class="user-big-pix"><img width="100%" src="/pictures/users/300/515980525381.jpg"><span class="change-cv-photo">Change</span></a></div>
                    </div>
                </div>
                <form action="" method="post" class="cv-edit-form" style="height: 434px;">
                    <div class="mag-b bm-t-30 bp-t-30" id="cv-form-in">
                        <div class="cv-info-group">
                            <span class="mag-b">First Name:</span>
                            <input name="fname" type="text" value="Shodipo" class="user-input">
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">Last Name:</span>
                            <input name="lname" type="text" value="Samuel" class="user-input">
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">Birthday:</span>
                            <select name="bday" class="user-input" style="width:28%">
                                <option value="">dd</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select class="user-input" name="bmonth" style="width:28%">
                                <option value="">mm</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                            <select class="user-input" name="byear" id="user-byear">
                                <option value="">yyyy</option>
                                <option value="1940">1940</option>
                                <option value="1941">1941</option>
                                <option value="1942">1942</option>
                                <option value="1943">1943</option>
                                <option value="1944">1944</option>
                                <option value="1945">1945</option>
                                <option value="1946">1946</option>
                                <option value="1947">1947</option>
                                <option value="1948">1948</option>
                                <option value="1949">1949</option>
                                <option value="1950">1950</option>
                                <option value="1951">1951</option>
                                <option value="1952">1952</option>
                                <option value="1953">1953</option>
                                <option value="1954">1954</option>
                                <option value="1955">1955</option>
                                <option value="1956">1956</option>
                                <option value="1957">1957</option>
                                <option value="1958">1958</option>
                                <option value="1959">1959</option>
                                <option value="1960">1960</option>
                                <option value="1961">1961</option>
                                <option value="1962">1962</option>
                                <option value="1963">1963</option>
                                <option value="1964">1964</option>
                                <option value="1965">1965</option>
                                <option value="1966">1966</option>
                                <option value="1967">1967</option>
                                <option value="1968">1968</option>
                                <option value="1969">1969</option>
                                <option value="1970">1970</option>
                                <option value="1971">1971</option>
                                <option value="1972">1972</option>
                                <option value="1973">1973</option>
                                <option value="1974">1974</option>
                                <option value="1975">1975</option>
                                <option value="1976">1976</option>
                                <option value="1977">1977</option>
                                <option value="1978">1978</option>
                                <option value="1979">1979</option>
                                <option value="1980">1980</option>
                                <option value="1981">1981</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                            </select>
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">State of Origin:</span>
                            <select class="user-input" name="origin_state">
                                <option value="">select</option>
                                <option value="156">Abia</option>
                                <option value="155">Abuja</option>
                                <option value="157">Adamawa</option>
                                <option value="158">Akwa Ibom</option>
                                <option value="152">Anambra</option>
                                <option value="159">Bauchi</option>
                                <option value="160">Bayelsa</option>
                                <option value="161">Benue</option>
                                <option value="162">Borno</option>
                                <option value="163">Cross River</option>
                                <option value="164">Delta</option>
                                <option value="153">Ebonyi</option>
                                <option value="165">Edo</option>
                                <option value="166">Ekiti</option>
                                <option value="151">Enugu</option>
                                <option value="167">Gombe</option>
                                <option value="168">Imo</option>
                                <option value="169">Jigawa</option>
                                <option value="170">Kaduna</option>
                                <option value="171">Kano</option>
                                <option value="172">Katsina</option>
                                <option value="173">Kebbi</option>
                                <option value="174">Kogi</option>
                                <option value="175">Kwara</option>
                                <option value="154">Lagos</option>
                                <option value="181">Nasarawa</option>
                                <option value="176">Niger</option>
                                <option value="177">Ogun</option>
                                <option value="178">Ondo</option>
                                <option value="179">Osun</option>
                                <option value="188">Other</option>
                                <option value="180">Oyo</option>
                                <option value="182">Plateau</option>
                                <option value="184">Rivers</option>
                                <option value="183">Sokoto</option>
                                <option value="185">Taraba</option>
                                <option value="186">Yobe</option>
                                <option value="187">Zamfara</option>
                            </select>
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">State of Residence:</span>
                            <select onchange="loadLga(this.value)" class="user-input" name="residence_state">
                                <option value="">select</option>
                                <option value="156">Abia</option>
                                <option value="155">Abuja</option>
                                <option value="157">Adamawa</option>
                                <option value="158">Akwa Ibom</option>
                                <option value="152">Anambra</option>
                                <option value="159">Bauchi</option>
                                <option value="160">Bayelsa</option>
                                <option value="161">Benue</option>
                                <option value="162">Borno</option>
                                <option value="163">Cross River</option>
                                <option value="164">Delta</option>
                                <option value="153">Ebonyi</option>
                                <option value="165">Edo</option>
                                <option value="166">Ekiti</option>
                                <option value="151">Enugu</option>
                                <option value="167">Gombe</option>
                                <option value="168">Imo</option>
                                <option value="169">Jigawa</option>
                                <option value="170">Kaduna</option>
                                <option value="171">Kano</option>
                                <option value="172">Katsina</option>
                                <option value="173">Kebbi</option>
                                <option value="174">Kogi</option>
                                <option value="175">Kwara</option>
                                <option value="154">Lagos</option>
                                <option value="181">Nasarawa</option>
                                <option value="176">Niger</option>
                                <option value="177">Ogun</option>
                                <option value="178">Ondo</option>
                                <option value="179">Osun</option>
                                <option value="188">Other</option>
                                <option value="180">Oyo</option>
                                <option value="182">Plateau</option>
                                <option value="184">Rivers</option>
                                <option value="183">Sokoto</option>
                                <option value="185">Taraba</option>
                                <option value="186">Yobe</option>
                                <option value="187">Zamfara</option>
                            </select>
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">LGA of Residence:</span><br>
                            <select id="residence-lga-tag" class="user-input" name="residence_lga">
                            </select>
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">Phone:</span>
                            <input name="phone" type="text" value="" class="user-input">
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">Contact Address:</span>
                            <input class="user-input" name="contact_address" value="">
                        </div>
                        <div class="cv-info-group">
                            <span class="mag-b">Linkedin Page:</span>
                            <input placeholder="https://www.linkedin.com/in/adaobi" name="linkedin" type="text" value="" class="user-input">
                        </div>
                        <div class="mag-pb-2">
                            <input type="button" onclick="updateBasicInfo(this)" value="Save" class="save-cv">
                            <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                        </div>
                    </div>
                </form>
            </div>
            <div class="settings-cat" id="experience-cat">
                <h2 id="cv-builder-h2">Summary</h2>
                <div class="cv-dispplay-box">
                    <div class="mag-pb-2 ts-13 tc-b3">
                        <div class="mag-b bm-t-20" id="display-summary-box">
                        </div><a id="education" href="javascript:;" onclick="showEditCVForm(this)" class="edit-cv">Edit</a>
                    </div>
                </div>
                <form action="javascript:;" method="post" class="cv-edit-form" style="">
                    <div class="mag-pb-2 " id="cv-form-in">
                        <div class="ts-12 tc-b6 italiz bm-b-10">
                            You are expected to write how many years experience you have in your work field. Mention the relevant skills you have. You can as well mention your most notable career achievement.
                        </div>
                        <textarea onkeyup="countWord(this)" id="display-summary-input" maxlength="400" class="user-input" name="summary"></textarea>
                        <div id="word-count-box"><span>0</span> / 400</div>
                        <div class="mag-b bm-t-20">
                            <input type="button" onclick="saveSummary(this)" value="Save" class="save-cv bg-o tc-w">
                            <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">

                        </div>
                    </div>
                </form>
            </div>
            <div class="settings-cat" id="education">
                <h2 id="cv-builder-h2">Education</h2>
                <div class="mag-b">
                    <div style=" border-top:none" class="edu-list" data-id="" id="edu-list-box">
                        <span class="edu-school-box" style="font-size:13.6px"></span>
                        <span style="  " class="edu-field-box"></span>
                        <span class="edu-date-box"></span>
                        <span style="  " class="edu-grade-box"></span>
                        <div class="mag-b bm-b-10">
                            <a href="javascript:;" onclick="deleteCvData(this,'educations')" class="delete-cv" title="Delete Education">X</a>
                            <a href="javascript:;" onclick="showEditCv(this)" class="edit-cv">Edit</a>
                        </div>
                        <form action="javascript:;" method="post" class="cv-edit-form">
                            <div id="cv-form-in" class="mag-pb-2">
                                <div class="mag-b bm-b-15">
                                    <span class="mag-b ts-13 tc-b3">School Name:</span>
                                    <div class="mag-b">
                                        <input style="margin-top:12px" autocomplete="off" onblur="hideSuggestionBox(this)" value="" name="school" class="user-input" type="text">
                                    </div>
                                </div>
                                <div class="edu-uni-inputs" style="  ">
                                    <div class="mag-b-66 bm-b-15 ">
                                        <span class="mag-b ts-13 tc-b3 bm-b-5">Qualification:</span>
                                        <select name="degree" class="user-input">
                                            <option value="175"> Nigeria Certificate In Education - NCE</option>
                                            <option value="26">Bachelor of Accountancy</option>
                                            <option value="4">Bachelor of Architecture - BA</option>
                                            <option value="27">Bachelor of Arts</option>
                                            <option value="5">Bachelor of Biochemistry</option>
                                            <option value="6">Bachelor of Biomedical Science</option>
                                            <option value="7">Bachelor of Business Administration</option>
                                            <option value="8">Bachelor of Clinical Science</option>
                                            <option value="9">Bachelor of Commerce</option>
                                            <option value="11">Bachelor of Community Health</option>
                                            <option value="10">Bachelor of Computer Applications</option>
                                            <option value="12">Bachelor of Computer Information Systems</option>
                                            <option value="13">Bachelor of Criminal Justice</option>
                                            <option value="14">Bachelor of Divinity</option>
                                            <option value="15">Bachelor of Economics</option>
                                            <option value="1">Bachelor of Education - B.Ed</option>
                                            <option value="2">Bachelor of Engineering - B.Eng</option>
                                            <option value="16">Bachelor of Fine Arts</option>
                                            <option value="18">Bachelor of Information Systems</option>
                                            <option value="17">Bachelor of Letters</option>
                                            <option value="19">Bachelor of Management</option>
                                            <option value="20">Bachelor of Music</option>
                                            <option value="21">Bachelor of Pharmacy</option>
                                            <option value="22">Bachelor of Philosophy</option>
                                            <option value="23">Bachelor of Public Affairs and Policy Management</option>
                                            <option value="3">Bachelor of Science - B.Sc</option>
                                            <option value="24">Bachelor of Social Work</option>
                                            <option value="25">Bachelor of Technology</option>
                                            <option value="140">Doctor of Arts</option>
                                            <option value="141">Doctor of Audiology</option>
                                            <option value="142">Doctor of Aviation</option>
                                            <option value="143">Doctor of Business Administration</option>
                                            <option value="144">Doctor of Canon Law</option>
                                            <option value="145">Doctor of Chiropractic</option>
                                            <option value="146">Doctor of Commerce</option>
                                            <option value="147">Doctor of Community Health</option>
                                            <option value="148">Doctor of Dental Surgery</option>
                                            <option value="149">Doctor of Divinity</option>
                                            <option value="150">Doctor of Education</option>
                                            <option value="151">Doctor of Engineering</option>
                                            <option value="152">Doctor of Fine Arts</option>
                                            <option value="153">Doctor of Health Administration</option>
                                            <option value="154">Doctor of Health Science</option>
                                            <option value="155">Doctor of Juridical Science</option>
                                            <option value="156">Doctor of Law</option>
                                            <option value="157">Doctor of Liberal Studies</option>
                                            <option value="158">Doctor of Management</option>
                                            <option value="159">Doctor of Medicine</option>
                                            <option value="160">Doctor of Ministry</option>
                                            <option value="161">Doctor of Modern Languages</option>
                                            <option value="162">Doctor of Musical Arts</option>
                                            <option value="163">Doctor of Naturopathic Medicine</option>
                                            <option value="164">Doctor of Optometry</option>
                                            <option value="165">Doctor of Osteopathic Medicine</option>
                                            <option value="166">Doctor of Pharmacy</option>
                                            <option value="167">Doctor of Philosophy</option>
                                            <option value="168">Doctor of Public Administration</option>
                                            <option value="172">Doctor of Radio oncology</option>
                                            <option value="169">Doctor of Science</option>
                                            <option value="170">Doctor of Theology</option>
                                            <option value="171">Doctor of Veterinary Medicine</option>
                                            <option value="174">Higher National Diploma - HND</option>
                                            <option value="56">Master in Creative Technologies</option>
                                            <option value="28">Master of Accountancy</option>
                                            <option value="29">Master of Accounting and Information Systems</option>
                                            <option value="30">Master of Advanced Study</option>
                                            <option value="31">Master of Applied Finance</option>
                                            <option value="32">Master of Applied Mathematical Sciences</option>
                                            <option value="33">Master of Applied Psychology</option>
                                            <option value="34">Master of Applied Science</option>
                                            <option value="35">Master of Architecture</option>
                                            <option value="36">Master of Arts</option>
                                            <option value="37">Master of Bioethics</option>
                                            <option value="38">Master of Bioinformatics</option>
                                            <option value="39">Master of Biotechnology</option>
                                            <option value="42">Master of Business</option>
                                            <option value="40">Master of Business Administration</option>
                                            <option value="41">Master of Business Administration Management of Technology</option>
                                            <option value="43">Master of Business Economics</option>
                                            <option value="44">Master of Business Engineering</option>
                                            <option value="45">Master of Business Informatics</option>
                                            <option value="46">Master of Chemistry</option>
                                            <option value="47">Master of City Planning</option>
                                            <option value="48">Master of Commerce</option>
                                            <option value="53">Master of Communication</option>
                                            <option value="49">Master of Community Health</option>
                                            <option value="50">Master of Computational Finance</option>
                                            <option value="51">Master of Computer Applications</option>
                                            <option value="52">Master of Computer Science</option>
                                            <option value="54">Master of Counselling</option>
                                            <option value="55">Master of Criminal Justice</option>
                                            <option value="57">Master of Design</option>
                                            <option value="58">Master of Divinity</option>
                                            <option value="59">Master of Economics</option>
                                            <option value="60">Master of Education</option>
                                            <option value="61">Master of Educational Technology</option>
                                            <option value="62">Master of Engineering</option>
                                            <option value="63">Master of Engineering Management</option>
                                            <option value="64">Master of Enterprise</option>
                                            <option value="65">Master of European Law</option>
                                            <option value="66">Master of Finance</option>
                                            <option value="67">Master of Financial Economics</option>
                                            <option value="68">Master of Financial Engineering</option>
                                            <option value="69">Master of Financial Mathematics</option>
                                            <option value="70">Master of Fine Arts</option>
                                            <option value="71">Master of Geospatial Science &amp; Technology</option>
                                            <option value="72">Master of Health Administration</option>
                                            <option value="73">Master of Health Science</option>
                                            <option value="74">Master of Humanities</option>
                                            <option value="75">Master of Industrial and Labor Relations</option>
                                            <option value="81">Master of Information</option>
                                            <option value="82">Master of Information Management</option>
                                            <option value="84">Master of Information System Management</option>
                                            <option value="83">Master of Information Systems</option>
                                            <option value="76">Master of International Affairs</option>
                                            <option value="77">Master of International Business</option>
                                            <option value="78">Master of International Economics</option>
                                            <option value="79">Master of International Public Policy</option>
                                            <option value="80">Master of International Studies</option>
                                            <option value="85">Master of Islamic Studies</option>
                                            <option value="86">Master of IT</option>
                                            <option value="87">Master of Jurisprudence</option>
                                            <option value="90">Master of Landscape Architecture</option>
                                            <option value="88">Master of Laws</option>
                                            <option value="91">Master of Letters</option>
                                            <option value="92">Master of Liberal Arts</option>
                                            <option value="93">Master of Library and Information Science</option>
                                            <option value="94">Master of Management</option>
                                            <option value="95">Master of Mass Communication and Journalism</option>
                                            <option value="96">Master of Mathematical Finance</option>
                                            <option value="97">Master of Mathematics</option>
                                            <option value="98">Master of Mathematics and Computer Science</option>
                                            <option value="99">Master of Mathematics and Philosophy</option>
                                            <option value="100">Master of Medical Science</option>
                                            <option value="101">Master of Medicine</option>
                                            <option value="102">Master of Military Art and Science</option>
                                            <option value="103">Master of Music</option>
                                            <option value="104">Master of Network and Communications Management</option>
                                            <option value="105">Master of Occupational Therapy</option>
                                            <option value="106">Master of Pharmacy</option>
                                            <option value="107">Master of Philosophy</option>
                                            <option value="108">Master of Physician Assistant Studies</option>
                                            <option value="109">Master of Physics</option>
                                            <option value="110">Master of Political Science</option>
                                            <option value="111">Master of Professional Studies</option>
                                            <option value="112">Master of Psychology</option>
                                            <option value="113">Master of Public Administration</option>
                                            <option value="114">Master of Public Affairs</option>
                                            <option value="115">Master of Public Diplomacy</option>
                                            <option value="116">Master of Public Health</option>
                                            <option value="117">Master of Public Management</option>
                                            <option value="118">Master of Public Policy</option>
                                            <option value="119">Master of Public Relations</option>
                                            <option value="120">Master of Public Service</option>
                                            <option value="121">Master of Quantitative Finance</option>
                                            <option value="122">Master of Rabbinic Studies</option>
                                            <option value="123">Master of Real Estate Development</option>
                                            <option value="124">Master of Religious Education</option>
                                            <option value="125">Master of Research</option>
                                            <option value="126">Master of Sacred Music</option>
                                            <option value="127">Master of Sacred Theology</option>
                                            <option value="128">Master of Science</option>
                                            <option value="129">Master of Social Science</option>
                                            <option value="130">Master of Social Work</option>
                                            <option value="131">Master of Statistics</option>
                                            <option value="132">Master of Strategic Studies</option>
                                            <option value="133">Master of Studies</option>
                                            <option value="89">Master of Studies in Law</option>
                                            <option value="134">Master of Surgery</option>
                                            <option value="136">Master of Technology</option>
                                            <option value="135">Master of Theological Studies</option>
                                            <option value="137">Master of Theology</option>
                                            <option value="138">Master of Urban Planning</option>
                                            <option value="139">Master of Veterinary Science</option>
                                            <option value="173">Ordinary National Diploma - OND</option>
                                            <option value="176">Postgraduate Diploma - PGD</option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                    <div class="mag-b-66 bm-b-15 fl-r">
                                        <span class="mag-b ts-13 tc-b3">Field of study:</span>
                                        <div class="mag-b">
                                            <input autocomplete="off" onkeyup="suggestOptions(this,'courses','name',this.value,50)" onblur="hideSuggestionBox(this)" style="margin-top:12px" name="field" value="" class="user-input" type="text">
                                        </div>
                                    </div>
                                    <div class="mag-b bm-b-15 ">
                                        <span class="mag-b ts-13 tc-b3 bm-b-5">Grade:</span>
                                        <select name="grade" class="user-input">
                                            <option value="1">First class</option>
                                            <option value="2">Second Class Upper</option>
                                            <option value="3">Second Class Lower</option>
                                            <option value="4">Third Class</option>
                                            <option value="5">Pass</option>
                                            <option value="6">Fail</option>
                                            <option value="7">Distinction</option>
                                            <option value="8">Upper Credit</option>
                                            <option value="9">Lower Credit</option>
                                            <option value=""></option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mag-b-66 bm-b-15">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">Start Year:</span>
                                    <select name="start_year" class="user-input">
                                        <option value="">Year</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>
                                        <option>2006</option>
                                        <option>2005</option>
                                        <option>2004</option>
                                        <option>2003</option>
                                        <option>2002</option>
                                        <option>2001</option>
                                        <option>2000</option>
                                        <option>1999</option>
                                        <option>1998</option>
                                        <option>1997</option>
                                        <option>1996</option>
                                        <option>1995</option>
                                        <option>1994</option>
                                        <option>1993</option>
                                        <option>1992</option>
                                        <option>1991</option>
                                        <option>1990</option>
                                        <option>1989</option>
                                        <option>1988</option>
                                        <option>1987</option>
                                        <option>1986</option>
                                        <option>1985</option>
                                        <option>1984</option>
                                        <option>1983</option>
                                        <option>1982</option>
                                        <option>1981</option>
                                        <option>1980</option>
                                        <option>1979</option>
                                        <option>1978</option>
                                        <option>1977</option>
                                        <option>1976</option>
                                        <option>1975</option>
                                        <option>1974</option>
                                        <option>1973</option>
                                        <option>1972</option>
                                        <option>1971</option>
                                        <option>1970</option>
                                    </select>
                                </div>
                                <div class="mag-b-66 bm-b-15 fl-r">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">End Year:</span>
                                    <select name="end_year" class="user-input">
                                        <option value="">Year</option>
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>
                                        <option>2006</option>
                                        <option>2005</option>
                                        <option>2004</option>
                                        <option>2003</option>
                                        <option>2002</option>
                                        <option>2001</option>
                                        <option>2000</option>
                                        <option>1999</option>
                                        <option>1998</option>
                                        <option>1997</option>
                                        <option>1996</option>
                                        <option>1995</option>
                                        <option>1994</option>
                                        <option>1993</option>
                                        <option>1992</option>
                                        <option>1991</option>
                                        <option>1990</option>
                                        <option>1989</option>
                                        <option>1988</option>
                                        <option>1987</option>
                                        <option>1986</option>
                                        <option>1985</option>
                                        <option>1984</option>
                                        <option>1983</option>
                                        <option>1982</option>
                                        <option>1981</option>
                                        <option>1980</option>
                                        <option>1979</option>
                                        <option>1978</option>
                                        <option>1977</option>
                                        <option>1976</option>
                                        <option>1975</option>
                                        <option>1974</option>
                                        <option>1973</option>
                                        <option>1972</option>
                                        <option>1971</option>
                                        <option>1970</option>
                                    </select>
                                </div>
                                <div class="mag-b bm-t-20">
                                    <input type="hidden" name="education_id" value="">
                                    <input type="hidden" id="education-type-input" name="education_type" value="">
                                    <input type="button" onclick="saveEducation(this)" value="Save" class="save-cv">
                                    <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="mag-pb-2">
                    <a id="experience" href="javascript:;" onclick="showAddEducation(this,1)" class="add-cv"><b>+</b> Add Secondary Education</a>
                    <a href="javascript:;" onclick="showAddEducation(this,2)" id="add-uni" class="add-cv"><b>+</b> Add Tertiary/Other Education</a>
                </div>
                <form action="javascript:;" method="post" class="cv-edit-form">
                    <div id="cv-form-in" class="mag-pb-2">
                        <div class="mag-b bm-b-15">
                            <span class="mag-b ts-13 tc-b3">School Name:</span>
                            <div class="mag-b">
                                <input style="margin-top:12px" autocomplete="off" onblur="hideSuggestionBox(this)" value="" name="school" class="user-input" type="text">
                            </div>
                        </div>
                        <div class="edu-uni-inputs" style="  ">
                            <div class="mag-b-66 bm-b-15 ">
                                <span class="mag-b ts-13 tc-b3 bm-b-5">Qualification:</span>
                                <select name="degree" class="user-input">
                                    <option value="175"> Nigeria Certificate In Education - NCE</option>
                                    <option value="26">Bachelor of Accountancy</option>
                                    <option value="4">Bachelor of Architecture - BA</option>
                                    <option value="27">Bachelor of Arts</option>
                                    <option value="5">Bachelor of Biochemistry</option>
                                    <option value="6">Bachelor of Biomedical Science</option>
                                    <option value="7">Bachelor of Business Administration</option>
                                    <option value="8">Bachelor of Clinical Science</option>
                                    <option value="9">Bachelor of Commerce</option>
                                    <option value="11">Bachelor of Community Health</option>
                                    <option value="10">Bachelor of Computer Applications</option>
                                    <option value="12">Bachelor of Computer Information Systems</option>
                                    <option value="13">Bachelor of Criminal Justice</option>
                                    <option value="14">Bachelor of Divinity</option>
                                    <option value="15">Bachelor of Economics</option>
                                    <option value="1">Bachelor of Education - B.Ed</option>
                                    <option value="2">Bachelor of Engineering - B.Eng</option>
                                    <option value="16">Bachelor of Fine Arts</option>
                                    <option value="18">Bachelor of Information Systems</option>
                                    <option value="17">Bachelor of Letters</option>
                                    <option value="19">Bachelor of Management</option>
                                    <option value="20">Bachelor of Music</option>
                                    <option value="21">Bachelor of Pharmacy</option>
                                    <option value="22">Bachelor of Philosophy</option>
                                    <option value="23">Bachelor of Public Affairs and Policy Management</option>
                                    <option value="3">Bachelor of Science - B.Sc</option>
                                    <option value="24">Bachelor of Social Work</option>
                                    <option value="25">Bachelor of Technology</option>
                                    <option value="140">Doctor of Arts</option>
                                    <option value="141">Doctor of Audiology</option>
                                    <option value="142">Doctor of Aviation</option>
                                    <option value="143">Doctor of Business Administration</option>
                                    <option value="144">Doctor of Canon Law</option>
                                    <option value="145">Doctor of Chiropractic</option>
                                    <option value="146">Doctor of Commerce</option>
                                    <option value="147">Doctor of Community Health</option>
                                    <option value="148">Doctor of Dental Surgery</option>
                                    <option value="149">Doctor of Divinity</option>
                                    <option value="150">Doctor of Education</option>
                                    <option value="151">Doctor of Engineering</option>
                                    <option value="152">Doctor of Fine Arts</option>
                                    <option value="153">Doctor of Health Administration</option>
                                    <option value="154">Doctor of Health Science</option>
                                    <option value="155">Doctor of Juridical Science</option>
                                    <option value="156">Doctor of Law</option>
                                    <option value="157">Doctor of Liberal Studies</option>
                                    <option value="158">Doctor of Management</option>
                                    <option value="159">Doctor of Medicine</option>
                                    <option value="160">Doctor of Ministry</option>
                                    <option value="161">Doctor of Modern Languages</option>
                                    <option value="162">Doctor of Musical Arts</option>
                                    <option value="163">Doctor of Naturopathic Medicine</option>
                                    <option value="164">Doctor of Optometry</option>
                                    <option value="165">Doctor of Osteopathic Medicine</option>
                                    <option value="166">Doctor of Pharmacy</option>
                                    <option value="167">Doctor of Philosophy</option>
                                    <option value="168">Doctor of Public Administration</option>
                                    <option value="172">Doctor of Radio oncology</option>
                                    <option value="169">Doctor of Science</option>
                                    <option value="170">Doctor of Theology</option>
                                    <option value="171">Doctor of Veterinary Medicine</option>
                                    <option value="174">Higher National Diploma - HND</option>
                                    <option value="56">Master in Creative Technologies</option>
                                    <option value="28">Master of Accountancy</option>
                                    <option value="29">Master of Accounting and Information Systems</option>
                                    <option value="30">Master of Advanced Study</option>
                                    <option value="31">Master of Applied Finance</option>
                                    <option value="32">Master of Applied Mathematical Sciences</option>
                                    <option value="33">Master of Applied Psychology</option>
                                    <option value="34">Master of Applied Science</option>
                                    <option value="35">Master of Architecture</option>
                                    <option value="36">Master of Arts</option>
                                    <option value="37">Master of Bioethics</option>
                                    <option value="38">Master of Bioinformatics</option>
                                    <option value="39">Master of Biotechnology</option>
                                    <option value="42">Master of Business</option>
                                    <option value="40">Master of Business Administration</option>
                                    <option value="41">Master of Business Administration Management of Technology</option>
                                    <option value="43">Master of Business Economics</option>
                                    <option value="44">Master of Business Engineering</option>
                                    <option value="45">Master of Business Informatics</option>
                                    <option value="46">Master of Chemistry</option>
                                    <option value="47">Master of City Planning</option>
                                    <option value="48">Master of Commerce</option>
                                    <option value="53">Master of Communication</option>
                                    <option value="49">Master of Community Health</option>
                                    <option value="50">Master of Computational Finance</option>
                                    <option value="51">Master of Computer Applications</option>
                                    <option value="52">Master of Computer Science</option>
                                    <option value="54">Master of Counselling</option>
                                    <option value="55">Master of Criminal Justice</option>
                                    <option value="57">Master of Design</option>
                                    <option value="58">Master of Divinity</option>
                                    <option value="59">Master of Economics</option>
                                    <option value="60">Master of Education</option>
                                    <option value="61">Master of Educational Technology</option>
                                    <option value="62">Master of Engineering</option>
                                    <option value="63">Master of Engineering Management</option>
                                    <option value="64">Master of Enterprise</option>
                                    <option value="65">Master of European Law</option>
                                    <option value="66">Master of Finance</option>
                                    <option value="67">Master of Financial Economics</option>
                                    <option value="68">Master of Financial Engineering</option>
                                    <option value="69">Master of Financial Mathematics</option>
                                    <option value="70">Master of Fine Arts</option>
                                    <option value="71">Master of Geospatial Science &amp; Technology</option>
                                    <option value="72">Master of Health Administration</option>
                                    <option value="73">Master of Health Science</option>
                                    <option value="74">Master of Humanities</option>
                                    <option value="75">Master of Industrial and Labor Relations</option>
                                    <option value="81">Master of Information</option>
                                    <option value="82">Master of Information Management</option>
                                    <option value="84">Master of Information System Management</option>
                                    <option value="83">Master of Information Systems</option>
                                    <option value="76">Master of International Affairs</option>
                                    <option value="77">Master of International Business</option>
                                    <option value="78">Master of International Economics</option>
                                    <option value="79">Master of International Public Policy</option>
                                    <option value="80">Master of International Studies</option>
                                    <option value="85">Master of Islamic Studies</option>
                                    <option value="86">Master of IT</option>
                                    <option value="87">Master of Jurisprudence</option>
                                    <option value="90">Master of Landscape Architecture</option>
                                    <option value="88">Master of Laws</option>
                                    <option value="91">Master of Letters</option>
                                    <option value="92">Master of Liberal Arts</option>
                                    <option value="93">Master of Library and Information Science</option>
                                    <option value="94">Master of Management</option>
                                    <option value="95">Master of Mass Communication and Journalism</option>
                                    <option value="96">Master of Mathematical Finance</option>
                                    <option value="97">Master of Mathematics</option>
                                    <option value="98">Master of Mathematics and Computer Science</option>
                                    <option value="99">Master of Mathematics and Philosophy</option>
                                    <option value="100">Master of Medical Science</option>
                                    <option value="101">Master of Medicine</option>
                                    <option value="102">Master of Military Art and Science</option>
                                    <option value="103">Master of Music</option>
                                    <option value="104">Master of Network and Communications Management</option>
                                    <option value="105">Master of Occupational Therapy</option>
                                    <option value="106">Master of Pharmacy</option>
                                    <option value="107">Master of Philosophy</option>
                                    <option value="108">Master of Physician Assistant Studies</option>
                                    <option value="109">Master of Physics</option>
                                    <option value="110">Master of Political Science</option>
                                    <option value="111">Master of Professional Studies</option>
                                    <option value="112">Master of Psychology</option>
                                    <option value="113">Master of Public Administration</option>
                                    <option value="114">Master of Public Affairs</option>
                                    <option value="115">Master of Public Diplomacy</option>
                                    <option value="116">Master of Public Health</option>
                                    <option value="117">Master of Public Management</option>
                                    <option value="118">Master of Public Policy</option>
                                    <option value="119">Master of Public Relations</option>
                                    <option value="120">Master of Public Service</option>
                                    <option value="121">Master of Quantitative Finance</option>
                                    <option value="122">Master of Rabbinic Studies</option>
                                    <option value="123">Master of Real Estate Development</option>
                                    <option value="124">Master of Religious Education</option>
                                    <option value="125">Master of Research</option>
                                    <option value="126">Master of Sacred Music</option>
                                    <option value="127">Master of Sacred Theology</option>
                                    <option value="128">Master of Science</option>
                                    <option value="129">Master of Social Science</option>
                                    <option value="130">Master of Social Work</option>
                                    <option value="131">Master of Statistics</option>
                                    <option value="132">Master of Strategic Studies</option>
                                    <option value="133">Master of Studies</option>
                                    <option value="89">Master of Studies in Law</option>
                                    <option value="134">Master of Surgery</option>
                                    <option value="136">Master of Technology</option>
                                    <option value="135">Master of Theological Studies</option>
                                    <option value="137">Master of Theology</option>
                                    <option value="138">Master of Urban Planning</option>
                                    <option value="139">Master of Veterinary Science</option>
                                    <option value="173">Ordinary National Diploma - OND</option>
                                    <option value="176">Postgraduate Diploma - PGD</option>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div class="mag-b-66 bm-b-15 fl-r">
                                <span class="mag-b ts-13 tc-b3">Field of study:</span>
                                <div class="mag-b">
                                    <input autocomplete="off" onkeyup="suggestOptions(this,'courses','name',this.value,50)" onblur="hideSuggestionBox(this)" style="margin-top:12px" name="field" value="" class="user-input" type="text">
                                </div>
                            </div>
                            <div class="mag-b bm-b-15 ">
                                <span class="mag-b ts-13 tc-b3 bm-b-5">Grade:</span>
                                <select name="grade" class="user-input">
                                    <option value="1">First class</option>
                                    <option value="2">Second Class Upper</option>
                                    <option value="3">Second Class Lower</option>
                                    <option value="4">Third Class</option>
                                    <option value="5">Pass</option>
                                    <option value="6">Fail</option>
                                    <option value="7">Distinction</option>
                                    <option value="8">Upper Credit</option>
                                    <option value="9">Lower Credit</option>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div class="mag-b-66 bm-b-15">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">Start Year:</span>
                            <select name="start_year" class="user-input">
                                <option value="">Year</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                                <option>1990</option>
                                <option>1989</option>
                                <option>1988</option>
                                <option>1987</option>
                                <option>1986</option>
                                <option>1985</option>
                                <option>1984</option>
                                <option>1983</option>
                                <option>1982</option>
                                <option>1981</option>
                                <option>1980</option>
                                <option>1979</option>
                                <option>1978</option>
                                <option>1977</option>
                                <option>1976</option>
                                <option>1975</option>
                                <option>1974</option>
                                <option>1973</option>
                                <option>1972</option>
                                <option>1971</option>
                                <option>1970</option>
                            </select>
                        </div>
                        <div class="mag-b-66 bm-b-15 fl-r">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">End Year:</span>
                            <select name="end_year" class="user-input">
                                <option value="">Year</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                                <option>1990</option>
                                <option>1989</option>
                                <option>1988</option>
                                <option>1987</option>
                                <option>1986</option>
                                <option>1985</option>
                                <option>1984</option>
                                <option>1983</option>
                                <option>1982</option>
                                <option>1981</option>
                                <option>1980</option>
                                <option>1979</option>
                                <option>1978</option>
                                <option>1977</option>
                                <option>1976</option>
                                <option>1975</option>
                                <option>1974</option>
                                <option>1973</option>
                                <option>1972</option>
                                <option>1971</option>
                                <option>1970</option>
                            </select>
                        </div>
                        <div class="mag-b bm-t-20">
                            <input type="hidden" name="education_id" value="">
                            <input type="hidden" id="education-type-input" name="education_type" value="">
                            <input type="button" onclick="saveEducation(this)" value="Save" class="save-cv">
                            <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                        </div>
                    </div>
                </form>
            </div>
            <div class="settings-cat" id="experience">
                <h2 id="cv-builder-h2">Work Experience</h2>
                <div class="mag-b">
                    <div style=" border-top:none" class="work-list" data-id="" id="work-list-box">
                        <span class="work-title-box" style="font-weight:bold"></span>
                        <span class="work-company-box"></span>
                        <span class="work-date-box"></span>
                        <span class="work-desc-box"></span>
                        <div class="mag-b bm-b-10">
                            <a href="javascript:;" onclick="deleteCvData(this,'work_experience')" class="delete-cv" title="Delete Experience">X</a>
                            <a href="javascript:;" onclick="showEditCv(this)" class="edit-cv">Edit</a>
                        </div>
                        <form action="" method="post" class="cv-edit-form ">
                            <div id="cv-form-in" class="mag-pb-2 ">
                                <div class="mag-b bm-b-15 ">
                                    <span class="mag-b ts-13 tc-b3 ">Title:</span>
                                    <div class="mag-b">
                                        <input style="margin-top:12px" autocomplete="off" onkeyup="suggestOptions(this,'job_titles','title',this.value,50)" onblur="hideSuggestionBox(this)" required="" name="job_title" value="" class="user-input" type="text">
                                    </div>
                                </div>
                                <div class="mag-b bm-b-15 fl-r">
                                    <span class="mag-b ts-13 tc-b3">Company Name:</span>
                                    <div class="mag-b">
                                        <input autocomplete="off" style="margin-top:12px;" onkeyup="suggestOptions(this,'companies','company_name',this.value,50)" required="" name="company_name" onblur="hideSuggestionBox(this)" value="" class="user-input" type="text">
                                    </div>
                                </div>
                                <div class="mag-b bm-b-5">
                                    <div class="mag-b-66 bm-b-15">
                                        <span class="mag-b ts-13 tc-b3 bm-b-5">Start date:</span>
                                        <select name="start_month" class="user-input">
                                            <option value="">Month</option>
                                            <option value="1">Jan</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Mar</option>
                                            <option value="4">Apr</option>
                                            <option value="5">May</option>
                                            <option value="6">Jun</option>
                                            <option value="7">Jul</option>
                                            <option value="8">Aug</option>
                                            <option value="9">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div class="mag-b-66 fl-r bm-b-15">
                                        <span class="mag-b bm-b-5">&nbsp;</span>
                                        <select name="start_year" class="user-input">
                                            <option value="">Year</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                            <option>2009</option>
                                            <option>2008</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                            <option>1989</option>
                                            <option>1988</option>
                                            <option>1987</option>
                                            <option>1986</option>
                                            <option>1985</option>
                                            <option>1984</option>
                                            <option>1983</option>
                                            <option>1982</option>
                                            <option>1981</option>
                                            <option>1980</option>
                                            <option>1979</option>
                                            <option>1978</option>
                                            <option>1977</option>
                                            <option>1976</option>
                                            <option>1975</option>
                                            <option>1974</option>
                                            <option>1973</option>
                                            <option>1972</option>
                                            <option>1971</option>
                                            <option>1970</option>
                                        </select>
                                    </div>
                                </div>
                                <label class="mag-b bm-b-15 ts-13 tc-b3"><input value="job_ended" onclick="showWorkEndDate(this)" type="checkbox" name="job_ended"><span>I am currently in this role</span></label>
                                <div style=" " class="mag-b">
                                    <div class="mag-b-66 bm-b-15">
                                        <span class="mag-b ts-13 tc-b3 bm-b-5">End date:</span>
                                        <select name="end_month" class="user-input">
                                            <option value="">Month</option>
                                            <option value="1">Jan</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Mar</option>
                                            <option value="4">Apr</option>
                                            <option value="5">May</option>
                                            <option value="6">Jun</option>
                                            <option value="7">Jul</option>
                                            <option value="8">Aug</option>
                                            <option value="9">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div class="mag-b-66 fl-r bm-b-15">
                                        <span class="mag-b bm-b-5">&nbsp;</span>
                                        <select name="end_year" class="user-input">
                                            <option value="">Year</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>
                                            <option>2009</option>
                                            <option>2008</option>
                                            <option>2007</option>
                                            <option>2006</option>
                                            <option>2005</option>
                                            <option>2004</option>
                                            <option>2003</option>
                                            <option>2002</option>
                                            <option>2001</option>
                                            <option>2000</option>
                                            <option>1999</option>
                                            <option>1998</option>
                                            <option>1997</option>
                                            <option>1996</option>
                                            <option>1995</option>
                                            <option>1994</option>
                                            <option>1993</option>
                                            <option>1992</option>
                                            <option>1991</option>
                                            <option>1990</option>
                                            <option>1989</option>
                                            <option>1988</option>
                                            <option>1987</option>
                                            <option>1986</option>
                                            <option>1985</option>
                                            <option>1984</option>
                                            <option>1983</option>
                                            <option>1982</option>
                                            <option>1981</option>
                                            <option>1980</option>
                                            <option>1979</option>
                                            <option>1978</option>
                                            <option>1977</option>
                                            <option>1976</option>
                                            <option>1975</option>
                                            <option>1974</option>
                                            <option>1973</option>
                                            <option>1972</option>
                                            <option>1971</option>
                                            <option>1970</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mag-b">
                                    <span class="mag-b bm-b-5 ts-13">Description</span>
                                    <textarea name="description" class="user-input" style=" height:100px"></textarea>
                                </div>
                                <div class="mag-b bm-t-20">
                                    <input type="hidden" name="experience_id" value="">
                                    <input type="button" value="Save" onclick="saveExperience(this)" class="save-cv bg-o tc-w">
                                    <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="mag-pb-2">
                    <a id="skill" href="javascript:;" onclick="showAddCVdata(this)" class="add-cv"><b>+</b> Add Experience</a>
                </div>
                <form action="" method="post" class="cv-edit-form ">
                    <div id="cv-form-in" class="mag-pb-2 ">
                        <div class="mag-b bm-b-15 ">
                            <span class="mag-b ts-13 tc-b3 ">Title:</span>
                            <div class="mag-b">
                                <input style="margin-top:12px" autocomplete="off" onkeyup="suggestOptions(this,'job_titles','title',this.value,50)" onblur="hideSuggestionBox(this)" required="" name="job_title" value="" class="user-input" type="text">
                            </div>
                        </div>
                        <div class="mag-b bm-b-15 fl-r">
                            <span class="mag-b ts-13 tc-b3">Company Name:</span>
                            <div class="mag-b">
                                <input autocomplete="off" style="margin-top:12px;" onkeyup="suggestOptions(this,'companies','company_name',this.value,50)" required="" name="company_name" onblur="hideSuggestionBox(this)" value="" class="user-input" type="text">
                            </div>
                        </div>
                        <div class="mag-b bm-b-5">
                            <div class="mag-b-66 bm-b-15">
                                <span class="mag-b ts-13 tc-b3 bm-b-5">Start date:</span>
                                <select name="start_month" class="user-input">
                                    <option value="">Month</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                            </div>
                            <div class="mag-b-66 fl-r bm-b-15">
                                <span class="mag-b bm-b-5">&nbsp;</span>
                                <select name="start_year" class="user-input">
                                    <option value="">Year</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>
                                    <option>2012</option>
                                    <option>2011</option>
                                    <option>2010</option>
                                    <option>2009</option>
                                    <option>2008</option>
                                    <option>2007</option>
                                    <option>2006</option>
                                    <option>2005</option>
                                    <option>2004</option>
                                    <option>2003</option>
                                    <option>2002</option>
                                    <option>2001</option>
                                    <option>2000</option>
                                    <option>1999</option>
                                    <option>1998</option>
                                    <option>1997</option>
                                    <option>1996</option>
                                    <option>1995</option>
                                    <option>1994</option>
                                    <option>1993</option>
                                    <option>1992</option>
                                    <option>1991</option>
                                    <option>1990</option>
                                    <option>1989</option>
                                    <option>1988</option>
                                    <option>1987</option>
                                    <option>1986</option>
                                    <option>1985</option>
                                    <option>1984</option>
                                    <option>1983</option>
                                    <option>1982</option>
                                    <option>1981</option>
                                    <option>1980</option>
                                    <option>1979</option>
                                    <option>1978</option>
                                    <option>1977</option>
                                    <option>1976</option>
                                    <option>1975</option>
                                    <option>1974</option>
                                    <option>1973</option>
                                    <option>1972</option>
                                    <option>1971</option>
                                    <option>1970</option>
                                </select>
                            </div>
                        </div>
                        <label class="mag-b bm-b-15 ts-13 tc-b3"><input value="job_ended" onclick="showWorkEndDate(this)" type="checkbox" name="job_ended"><span>I am currently in this role</span></label>
                        <div style=" " class="mag-b">
                            <div class="mag-b-66 bm-b-15">
                                <span class="mag-b ts-13 tc-b3 bm-b-5">End date:</span>
                                <select name="end_month" class="user-input">
                                    <option value="">Month</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                            </div>
                            <div class="mag-b-66 fl-r bm-b-15">
                                <span class="mag-b bm-b-5">&nbsp;</span>
                                <select name="end_year" class="user-input">
                                    <option value="">Year</option>
                                    <option>2022</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                    <option>2018</option>
                                    <option>2017</option>
                                    <option>2016</option>
                                    <option>2015</option>
                                    <option>2014</option>
                                    <option>2013</option>
                                    <option>2012</option>
                                    <option>2011</option>
                                    <option>2010</option>
                                    <option>2009</option>
                                    <option>2008</option>
                                    <option>2007</option>
                                    <option>2006</option>
                                    <option>2005</option>
                                    <option>2004</option>
                                    <option>2003</option>
                                    <option>2002</option>
                                    <option>2001</option>
                                    <option>2000</option>
                                    <option>1999</option>
                                    <option>1998</option>
                                    <option>1997</option>
                                    <option>1996</option>
                                    <option>1995</option>
                                    <option>1994</option>
                                    <option>1993</option>
                                    <option>1992</option>
                                    <option>1991</option>
                                    <option>1990</option>
                                    <option>1989</option>
                                    <option>1988</option>
                                    <option>1987</option>
                                    <option>1986</option>
                                    <option>1985</option>
                                    <option>1984</option>
                                    <option>1983</option>
                                    <option>1982</option>
                                    <option>1981</option>
                                    <option>1980</option>
                                    <option>1979</option>
                                    <option>1978</option>
                                    <option>1977</option>
                                    <option>1976</option>
                                    <option>1975</option>
                                    <option>1974</option>
                                    <option>1973</option>
                                    <option>1972</option>
                                    <option>1971</option>
                                    <option>1970</option>
                                </select>
                            </div>
                        </div>
                        <div class="mag-b">
                            <span class="mag-b bm-b-5 ts-13">Description</span>
                            <textarea name="description" class="user-input" style=" height:100px"></textarea>
                        </div>
                        <div class="mag-b bm-t-20">
                            <input type="hidden" name="experience_id" value="">
                            <input type="button" value="Save" onclick="saveExperience(this)" class="save-cv bg-o tc-w">
                            <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                        </div>
                    </div>
                </form>
            </div>
            <div class="settings-cat" id="skill">
                <h2 id="cv-builder-h2">Skills </h2>
                <form action="" method="post" class="mag-pb-2">
                    <div id="skill-hold-box" class="mag-b "></div><input type="button" onclick="deleteSkills(this)" name="delete-skills" id="delete-skills" class="add-cv" style=" display:none; border:none;background-color:transparent;" value="X Remove Marked Skills">
                </form>
                <div class="mag-b" style="position:relative;">
                    <div class="mag-pb-2">
                        <a href="javascript:;" onclick="showAddCVdata(this)" class="add-cv"><b>+</b> Add Skills</a></div>
                    <form style="position:static" action="" method="post" enctype="multipart/form-data" class="cv-edit-form">
                        <div id="cv-form-in" class="mag-pb-2 bm-t-10">
                            <div class="mag-b-6 bm-b-10" id="skill-wrap-box">
                                <div class="mag-b ts-13 tc-b3 bm-b-5">Skill Title: (Use each box for each skill)</div>
                                <div class="mag-b" id="all-skill-inputs">
                                    <input type="text" onkeyup="suggestOptions(this,'skills','name',this.value,50)" name="skill" autocomplete="off" placeholder="Skill 1" maxlength="50" class="user-input" id="cv-skill-input" onblur="hideSuggestionBox(this)">
                                    <input type="text" onkeyup="suggestOptions(this,'skills','name',this.value,50)" name="skill" autocomplete="off" placeholder="Skill 2" maxlength="50" class="user-input" id="cv-skill-input" onblur="hideSuggestionBox(this)">
                                </div>
                            </div>
                            <a id="add-more-skill" href="javascript:;" class="anko-a tc-o ts-12 bm-t-10" onclick="addMoreSkill(this)"><b>+</b> Add More Skills</a><input type="hidden" name="skill_no" value="1" id="skill_no">
                            <div class="mag-b bm-t-20">
                                <input type="button" onclick="saveSkills(this)" value="Save" class="save-cv bg-o tc-w">
                                <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="mag-b bm-b-15">
                <a name="sc" href="javascript:;" class="pm-anko" onclick="showCVSection(this)"><span>+</span>Licenses &amp; certifications <i>(optional)</i></a>
            </div>
            <div style="display:none" class="settings-cat">
                <h2 id="cv-builder-h2">Licenses &amp; certifications</h2>
                <div class="mag-b">
                    <div style=" border-top:none" class="cert-list" data-id="" id="cert-list-box">
                        <span class="cert-name-box" style="font-size:13.6px"><b> </b> - </span>
                        <span class="cert-date-box"> </span>
                        <span class="cert-cid-box">Credential ID </span>
                        <div class="mag-b bm-b-10">
                            <a href="javascript:;" onclick="deleteCvData(this,'certifications')" class="delete-cv" title="Delete Certification">X</a>
                            <a href="javascript:;" onclick="showEditCv(this)" class="edit-cv">Edit</a>
                        </div>
                        <form action="" method="post" class="cv-edit-form">
                            <div id="cv-form-in" class="mag-pb-2">
                                <div class="mag-b bm-b-15">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">Name:</span>
                                    <input required="" name="certificate_name" class="user-input" type="text" value="">
                                </div>
                                <div class="mag-b bm-b-15 fl-r">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">Issuing organization:</span>
                                    <input name="issuer" class="user-input" type="text" value="">
                                </div>
                                <div class="mag-b bm-b-15 fl-r">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">Credential ID:</span>
                                    <input name="certificate_id" class="user-input" type="text" value="">
                                </div>
                                <div class="mag-b bm-b-5">
                                    <div class="mag-b-66 bm-b-15">
                                        <span class="mag-b ts-13 tc-b3 bm-b-5">Issue date:</span>
                                        <select name="issued_month" class="user-input">
                                            <option value="">Month</option>
                                            <option value="1">Jan</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Mar</option>
                                            <option value="4">Apr</option>
                                            <option value="5">May</option>
                                            <option value="6">Jun</option>
                                            <option value="7">Jul</option>
                                            <option value="8">Aug</option>
                                            <option value="9">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div class="mag-b-66 fl-r bm-b-15">
                                        <span class="mag-b bm-b-5">&nbsp;</span>
                                        <select class="user-input" name="issued_year">
                                            <option value="">Year</option>
                                            <option>2000</option>
                                            <option>2001</option>
                                            <option>2002</option>
                                            <option>2003</option>
                                            <option>2004</option>
                                            <option>2005</option>
                                            <option>2006</option>
                                            <option>2007</option>
                                            <option>2008</option>
                                            <option>2009</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                        </select>
                                    </div>
                                </div>
                                <label class="mag-b bm-b-15 ts-13 tc-b3"><input name="dont_expire" onclick="showCertiExpDate(this)" type="checkbox"><span>Does not expire</span></label>
                                <div class="mag-b" style="  ">
                                    <div class="mag-b-66 bm-b-15">
                                        <span class="mag-b ts-13 tc-b3 bm-b-5">Expiration date:</span>
                                        <select name="expiration_month" class="user-input">
                                            <option value="">Month</option>
                                            <option value="1">Jan</option>
                                            <option value="2">Feb</option>
                                            <option value="3">Mar</option>
                                            <option value="4">Apr</option>
                                            <option value="5">May</option>
                                            <option value="6">Jun</option>
                                            <option value="7">Jul</option>
                                            <option value="8">Aug</option>
                                            <option value="9">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                        </select>
                                    </div>
                                    <div class="mag-b-66 fl-r bm-b-15">
                                        <span class="mag-b bm-b-5">&nbsp;</span>
                                        <select name="expiration_year" class="user-input">
                                            <option value="">Year</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                            <option>2026</option>
                                            <option>2027</option>
                                            <option>2028</option>
                                            <option>2029</option>
                                            <option>2030</option>
                                            <option>2031</option>
                                            <option>2032</option>
                                            <option>2033</option>
                                            <option>2034</option>
                                            <option>2035</option>
                                            <option>2036</option>
                                            <option>2037</option>
                                            <option>2038</option>
                                            <option>2039</option>
                                            <option>2040</option>
                                            <option>2041</option>
                                            <option>2042</option>
                                            <option>2043</option>
                                            <option>2044</option>
                                            <option>2045</option>
                                            <option>2046</option>
                                            <option>2047</option>
                                            <option>2048</option>
                                            <option>2049</option>
                                            <option>2050</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mag-b bm-t-20">
                                    <input type="hidden" name="cert_id" value="">
                                    <input type="button" onclick="saveCertificate(this)" value="Save" class="save-cv bg-o tc-w">
                                    <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="mag-pb-2">
                    <a href="javascript:;" onclick="showAddCVdata(this)" class="add-cv"><b>+</b> Add Certifications</a>
                </div>
                <form action="" method="post" class="cv-edit-form">
                    <div id="cv-form-in" class="mag-pb-2">
                        <div class="mag-b bm-b-15">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">Name:</span>
                            <input required="" name="certificate_name" class="user-input" type="text" value="">
                        </div>
                        <div class="mag-b bm-b-15 fl-r">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">Issuing organization:</span>
                            <input name="issuer" class="user-input" type="text" value="">
                        </div>
                        <div class="mag-b bm-b-15 fl-r">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">Credential ID:</span>
                            <input name="certificate_id" class="user-input" type="text" value="">
                        </div>
                        <div class="mag-b bm-b-5">
                            <div class="mag-b-66 bm-b-15">
                                <span class="mag-b ts-13 tc-b3 bm-b-5">Issue date:</span>
                                <select name="issued_month" class="user-input">
                                    <option value="">Month</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                            </div>
                            <div class="mag-b-66 fl-r bm-b-15">
                                <span class="mag-b bm-b-5">&nbsp;</span>
                                <select class="user-input" name="issued_year">
                                    <option value="">Year</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                </select>
                            </div>
                        </div>
                        <label class="mag-b bm-b-15 ts-13 tc-b3"><input name="dont_expire" onclick="showCertiExpDate(this)" type="checkbox"><span>Does not expire</span></label>
                        <div class="mag-b" style="  ">
                            <div class="mag-b-66 bm-b-15">
                                <span class="mag-b ts-13 tc-b3 bm-b-5">Expiration date:</span>
                                <select name="expiration_month" class="user-input">
                                    <option value="">Month</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                            </div>
                            <div class="mag-b-66 fl-r bm-b-15">
                                <span class="mag-b bm-b-5">&nbsp;</span>
                                <select name="expiration_year" class="user-input">
                                    <option value="">Year</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                    <option>2029</option>
                                    <option>2030</option>
                                    <option>2031</option>
                                    <option>2032</option>
                                    <option>2033</option>
                                    <option>2034</option>
                                    <option>2035</option>
                                    <option>2036</option>
                                    <option>2037</option>
                                    <option>2038</option>
                                    <option>2039</option>
                                    <option>2040</option>
                                    <option>2041</option>
                                    <option>2042</option>
                                    <option>2043</option>
                                    <option>2044</option>
                                    <option>2045</option>
                                    <option>2046</option>
                                    <option>2047</option>
                                    <option>2048</option>
                                    <option>2049</option>
                                    <option>2050</option>
                                </select>
                            </div>
                        </div>
                        <div class="mag-b bm-t-20">
                            <input type="hidden" name="cert_id" value="">
                            <input type="button" onclick="saveCertificate(this)" value="Save" class="save-cv bg-o tc-w">
                            <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                        </div>
                    </div>
                </form>
            </div>
            <div class="mag-b bm-b-15">
                <a name="sc" href="javascript:;" class="pm-anko" onclick="showCVSection(this)"><span>+</span>Honors &amp; awards <i>(optional)</i></a>
            </div>
            <div style="display:none" class="settings-cat">
                <h2 id="cv-builder-h2">Honors &amp; awards</h2>
                <div class="mag-b">
                    <div style=" border-top:none" data-id="" id="award-list-box" class="award-list">
                        <span class="award-name-box" style="font-size:13.6px"><b> </b> - </span>
                        <span class="award-date-box"></span>
                        <span class="award-desc-box"></span>
                        <div class="mag-b bm-b-10">
                            <a href="javascript:;" onclick="deleteCvData(this,'awards')" class="delete-cv" title="Delete Award">X</a>
                            <a href="javascript:;" onclick="showEditCv(this)" class="edit-cv">Edit</a>
                        </div>
                        <form action="javascript:;" method="post" class="cv-edit-form">
                            <div id="cv-form-in" class="mag-pb-2">
                                <div class="mag-b-66 bm-b-15">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">Name:</span>
                                    <input required="" value="" name="award_name" class="user-input" type="text">
                                </div>
                                <div class="mag-b-66 bm-b-15 fl-r">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">Issuer:</span>
                                    <input name="issuer" value="" class="user-input" type="text">
                                </div>
                                <div class="mag-b-66 bm-b-15">
                                    <span class="mag-b ts-13 tc-b3 bm-b-5">Issue date:</span>
                                    <select name="issued_month" class="user-input">
                                        <option value="">Month</option>
                                        <option value="1">Jan</option>
                                        <option value="2">Feb</option>
                                        <option value="3">Mar</option>
                                        <option value="4">Apr</option>
                                        <option value="5">May</option>
                                        <option value="6">Jun</option>
                                        <option value="7">Jul</option>
                                        <option value="8">Aug</option>
                                        <option value="9">Sep</option>
                                        <option value="10">Oct</option>
                                        <option value="11">Nov</option>
                                        <option value="12">Dec</option>
                                    </select>
                                </div>
                                <div class="mag-b-66 fl-r bm-b-15">
                                    <span class="mag-b bm-b-5">&nbsp;</span>
                                    <select class="user-input" name="issued_year">
                                        <option value="">Year</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                    </select>
                                </div>
                                <span class="mag-b bm-b-5 ts-13">Description</span>
                                <textarea name="description" class="user-input" style=" height:100px"></textarea>
                                <div class="mag-b bm-t-20">
                                    <input type="hidden" name="award_id" value="">
                                    <input type="button" onclick="saveAward(this)" value="Save" class="save-cv">
                                    <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="mag-pb-2">
                    <a href="javascript:;" onclick="showAddCVdata(this)" class="add-cv"><b>+</b> Add Award</a></div>
                <form action="javascript:;" method="post" class="cv-edit-form">
                    <div id="cv-form-in" class="mag-pb-2">
                        <div class="mag-b-66 bm-b-15">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">Name:</span>
                            <input required="" value="" name="award_name" class="user-input" type="text">
                        </div>
                        <div class="mag-b-66 bm-b-15 fl-r">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">Issuer:</span>
                            <input name="issuer" value="" class="user-input" type="text">
                        </div>
                        <div class="mag-b-66 bm-b-15">
                            <span class="mag-b ts-13 tc-b3 bm-b-5">Issue date:</span>
                            <select name="issued_month" class="user-input">
                                <option value="">Month</option>
                                <option value="1">Jan</option>
                                <option value="2">Feb</option>
                                <option value="3">Mar</option>
                                <option value="4">Apr</option>
                                <option value="5">May</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Aug</option>
                                <option value="9">Sep</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                            </select>
                        </div>
                        <div class="mag-b-66 fl-r bm-b-15">
                            <span class="mag-b bm-b-5">&nbsp;</span>
                            <select class="user-input" name="issued_year">
                                <option value="">Year</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                            </select>
                        </div>
                        <span class="mag-b bm-b-5 ts-13">Description</span>
                        <textarea name="description" class="user-input" style=" height:100px"></textarea>
                        <div class="mag-b bm-t-20">
                            <input type="hidden" name="award_id" value="">
                            <input type="button" onclick="saveAward(this)" value="Save" class="save-cv">
                            <input type="button" value="Close" class="save-cv" id="cancel-save-cv" onclick="hideEditCVForm(this)">
                        </div>
                    </div>
                </form>
            </div>
            <div class="mag-b bm-b-15">
                <a name="sc" href="javascript:;" class="pm-anko" onclick="showCVSection(this); document.getElementById('portEditBut').click()"><span>+</span>Portfolio <i>(optional)</i></a>
            </div>
            <div style=" margin-bottom:0px; display:none;" class="settings-cat" id="experience-cat">
                <h2 id="cv-builder-h2">Portfolio</h2>
                <div class="cv-dispplay-box">
                    <div class="mag-pb-2 ts-13 tc-b3">
                        <div class="mag-b bm-t-20" id="dispay-portfolio-box">
                        </div><a href="javascript:;" id="portEditBut" onclick="showEditCVForm(this)" class="edit-cv">Edit</a>
                    </div>
                </div>
                <form style=" height:auto" action="javascript:;" method="post" class="cv-edit-form">
                    <div class="mag-pb-2 " id="cv-form-in">
                        <textarea id="dispay-portfolio-input" class="user-input" name="portfolio"></textarea>
                        <div class="mag-b bm-t-20">
                            <input type="button" onclick="savePortfolio(this)" value="Save" class="save-cv bg-o tc-w">
                            <input type="button" value="Close" class="save-cv bg-a tc-b3" onclick="hideEditCVForm(this)" id="cancel-save-cv">

                        </div>
                    </div>
                </form>
                <img width="31px" height="31px" src="images/load.gif" style="display:none">
            </div>
            <label class="fl-l tc-b3 ts-12">
                <span class="bg-w fl-l br-5 bm-r-5" style="border-radius:3px 3px; padding-top:1px; padding-bottom:0px; height:20px; padding-right:1px;"><input onclick="setViewCV(this)" type="checkbox" name="show_my_cv" class="" checked=""></span>
                I want my CV to be visible to employers
            </label>
            <div class="mag-b center bm-b-30 bm-t-30">
                <a id="prev-cv-but" href="/cv-preview" style="color:#fff;" class="cv-buts bg-b6 bold tc-w ">Preview CV</a>
                <a href="/cv-preview?d" name="cv-download-button" style="color:#fff;" class="cv-buts bold tc-w bg-o" id="download-cv-but">Download CV</a>
            </div>
            <div class="cv-download-warning" style="text-align:center; margin-bottom:40px; margin-top:-23px">You can only download your CV when you complete <b>70%</b></div>
        </div>
        <div class="mag-pb-5">
            <a href="#0" class="js-cd-top" id="scroll-to-top">&nbsp;</a>
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