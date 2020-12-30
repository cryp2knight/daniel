<template>
  <div class="container is-fluid pt-6 mt-6">
    <div class="box is-flex is-justify-content-center">
      <button class="button is-primary" @click="viewResume">
        <span class="icon is-small mr-3">
          <i class="fa fa-download" aria-hidden="true"></i>
        </span>
        Download PDF
      </button>
    </div>
    <div id="contactInfo" class="box">
      <h4 class="title is-4">
        <i class="fa fa-address-card" aria-hidden="true"></i> Contact
      </h4>
      <h5 class="subtitle is-6">
        <span class="icon is-small mr-3">
          <i class="fa fa-envelope" aria-hidden="true"></i> </span
        >{{ usernames.email }}<br />
        <span class="icon is-small mr-3">
          <i class="fa fa-home" aria-hidden="true"></i> </span
        >Batangas, Philippines
      </h5>
    </div>
    <div class="box" id="education">
      <h4 class="title is-4">
        <i class="fa fa-graduation-cap" aria-hidden="true"></i> Education
      </h4>
      <div class="columns">
        <div class="column">
          <h5 class="title is-5">BS in Computer Sciece</h5>
          <h6 class="subtitle is-6">Aug 2018 – expected June 2022</h6>
        </div>
        <div class="column">
          <a href="htts://batstate-u.edu.ph">
            <h5 class="title is-6">Batangas State University</h5>
          </a>
          <h6 class="subtitle is-6">
            GCH Subd. Brgy. Alangilan, Batangas City, Philippines
          </h6>
        </div>
      </div>
      <hr />
      <div class="columns">
        <div class="column">
          <h5 class="title is-5">
            Senior High School - Computer Programming NCIII (Java and .Net
            Technology)
          </h5>
          <h6 class="subtitle is-6">June 2016 - April 2018</h6>
        </div>
        <div class="column">
          <a href="htts://www.sti.edu">
            <h5 class="title is-6">STI College Batangas</h5>
          </a>
          <h6 class="subtitle is-6">
            STI Academic Center, Kumintang Ibaba, Batangas City, Philippines
          </h6>
        </div>
      </div>
    </div>
    <div class="box" id="experience">
      <h4 class="title is-4">
        <i class="fa fa-briefcase" aria-hidden="true"></i> Experience
      </h4>
      <div class="columns">
        <div class="column">
          <h5 class="title is-5">Web Developer</h5>
          <h6 class="subtitle is-6 ml-3">
            Aug 2020 – present<br />
            Fullstack developer that works on projects using Django, Flask,
            Angular, Vue and Nuxt.
          </h6>
        </div>
        <div class="column">
          <a href="htts://www.firstdigitalfinance.com">
            <h5 class="title is-6">First Digital Finance Corporation</h5>
          </a>
          <h6 class="subtitle is-6">Makati City, Philippines</h6>
        </div>
      </div>
      <hr />
      <div class="columns">
        <div class="column">
          <h5 class="title is-5">Staffer</h5>
          <h6 class="subtitle is-6 ml-3">
            Aug 2018 – present<br />
            Made digital artworks for the different editions of the LATHE <br />
            Assisted and helped in the layout of the Sensus Communis (Magazine
            edition)<br />
            Writes news and features articles
          </h6>
        </div>
        <div class="column">
          <a href="htts://batstate-u.edu.ph">
            <h5 class="title is-6">The LATHE Group of Publications</h5>
          </a>
          <h6 class="subtitle is-6">
            Office of Student Publication, Batangas State University
          </h6>
        </div>
      </div>
    </div>

    <div class="box" id="scholarships">
      <h4 class="title is-4">
        <i class="fa fa-trophy" aria-hidden="true"></i> Awards and Scholarships
      </h4>

      <h5 class="title is-5">
        Department of Science and Technology - Science Education Institute
        (DOST-SEI) Scholarship
      </h5>
      <h6 class="subtitle is-6 ml-3">
        Awarded to students with high aptitude in science and mathematics and
        are willing to pursue careers in the fields of science and technology.
      </h6>
      <hr />
      <h5 class="title is-5">
        Smarter Philippines through Data Analytics R&D, Training and Adoption
        SPARTA Scholarship
      </h5>
      <h6 class="subtitle is-6 ml-3">
        Train and graduate learners in data science, analytics and related
        fields through online learning.
      </h6>
    </div>

    <div class="box" id="activities">
      <h4 class="title is-4">
        <i class="fa fa-star" aria-hidden="true"></i> Extra Curricular
        Activities
      </h4>
      <h5 class="title is-5">Amazon Build On, Philippines 2020</h5>
      <h6 class="subtitle is-6 ml-3">
        September 2020<br />
        3rd runner up<br />
        Proposed a smart reading system for electtric companies
      </h6>
      <hr />
      <h5 class="title is-5">
        University of the Philippines - Association for Computing Machinery
        (UP-ACM) Algolympics 2020
      </h5>
      <h6 class="subtitle is-6 ml-3">
        February 2020<br />
        top 15 team finalists<br />
        An ACM-ICPC type of competitive programming for the higher education
        institutes and universities in the Philippines
      </h6>
      <hr />
      <h5 class="title is-5">
        CALABARZON Regional Higher Education Press Conference 2020
      </h5>
      <h6 class="subtitle is-6 ml-3">
        January 2020 <br />
        Won 3rd Place in Layout and Page Design category
      </h6>

      <hr />
      <h5 class="title is-5">Coca-Cola CODE Festival 2019</h5>
      <h6 class="subtitle is-6 ml-3">
        January 2020 <br />
        Finalist <br />
        Won the “Creative Excellence” award after proposing a smart-bin for
        Coca-Cola cans and bottles utilizing the Microsoft Azure and Powerapp
        platform
      </h6>
      <hr />
      <h5 class="title is-5">IMPACT 2050 Hackathon</h5>
      <h6 class="subtitle is-6 ml-3">
        October 2019 <br />
        Created a platform that enables the community and businesses to buy and
        sell near-expiry goods in lower prices<br />
        Awarded a three-month incubation program by IMPACT Philippines
      </h6>

      <hr />
      <h5 class="title is-5">
        Philippine National Police - Information Technology Information Service
        (PNP-ITMS) Hackathon
      </h5>
      <h6 class="subtitle is-6 ml-3">
        October 2019 <br />
        Finalist <br />
        Proposed and developed a system that allows fast processing of vehicle
        clearances
      </h6>

      <hr />
      <h5 class="title is-5">
        13<sup>th</sup> Schools Press Advisers Movement (SPAM) Confab
      </h5>
      <h6 class="subtitle is-6 ml-3">
        September 2019 <br />
        Nationwide press conference participated by higher education in the
        Philippines<br />
        Champion in Backpack Journalism English category
      </h6>

      <hr />
      <h5 class="title is-5">4<sup>th</sup> Regional iSITE IT Competition</h5>
      <h6 class="subtitle is-6 ml-3">
        March 2019 <br />
        Won 3rd Place in Java Programming competition
      </h6>

      <hr />
      <h5 class="title is-5">
        AWS Siklab Pilipinas cloud computing bootcamp and hackathon
      </h5>
      <h6 class="subtitle is-6 ml-3">
        March 2019 <br />
        Participated in the Amazon AWS cloud computing bootcamp and hackathon
      </h6>
    </div>
    <div class="box" id="skills">
      <h4 class="title is-4">
        <i class="fa fa-laptop" aria-hidden="true"></i> Skills
      </h4>

      <h5 class="title is-5">Programming Languages</h5>
      <h6 class="subtitle is-6 ml-3">
        Python, C++, Java, JavaScript, HTML/CSS
      </h6>
      <hr />
      <h5 class="title is-5">Frameworks</h5>
      <h6 class="subtitle is-6 ml-3">
        Bootstrap, JQuery, Angular, Ionic, Flask
      </h6>
      <hr />
      <h5 class="title is-5">Tools</h5>
      <h6 class="subtitle is-6 ml-3">
        Git, Jupyter, LaTeX, REST API, Adobe Photoshop, Adobe Illustrator, Adobe
        InDesign, Microsoft Office, CAD
      </h6>
      <hr />
      <h5 class="title is-5">Machine Learning</h5>
      <h6 class="subtitle is-6 ml-3">
        regression, classification, clustering, sci-kit learn and SciPy
      </h6>
    </div>
    <div class="box" id="interests">
      <h4 class="title is-4">
        <i class="fa fa-bicycle" aria-hidden="true"></i> Interests
      </h4>

      <h6 class="subtitle is-6 ml-3">
        Writing, Layout design, camping and hiking
      </h6>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import usernames from "~/utils/usernames";

export default Vue.extend({
  computed: {
    usernames() {
      return usernames;
    },
  },
  methods: {
    viewResume() {
      this.$store
        .dispatch("discordify", "Someone looking on your resume. ")
        .then(() => {
          window.location.href = "my_resume_public.pdf";
        });
    },
  },
});
</script>