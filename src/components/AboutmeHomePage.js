export const AboumeHompe = () => {
    return `
  <section class="aboutme mb-20">
  <div class="abc page-section">
    <div class=" text-center ">
      <h2 class="page-section__title text-white text-[35px]">ABOUT ME</h2>
      <div class="page-section__img flex justify-center my-3">
        <img src="./image/title-style.png" alt="" />
      </div>
      
    </div>
    <div class="page-section__info flex justify-around items-center gap-8 mt-7 text-white">
      <div class="page-section__img">
        <img src="https://i.gifer.com/Wczc.gif"
          alt="" />
      </div>
      <div class="page-section__profile ">
        <p class=" w-11/12 mb-3 about__description">Thank you for giving me the opportunity to introduce myself.

        Well, I am Le Huy Hung and I am from Thanh Hoa. I have recently done my post-graduation in Computer Science from FPT Polytechnic.
        
        I am quite good at Coppy and Pate. My hobbies are traveling, coding and listening to music.
        
        My short term goal is that I want to be a part of a Frontend team, to build a platform that can show my skills and grow my career. I am always enthusiastic to grow myself along with the organization.</p>
        <div class="flex justify-around">
          <div class="">
            <p class="about__bio"><strong>NAME :</strong> Le Huy Hung</p>
            <p class="about__bio"><strong>AGE :</strong> 20</p>
          </div>
          <div class="">
            <p class="about__bio"><strong>JOB TITLE :</strong> Front Developer</p>
            <p class="about__bio"><strong>LOCATION :</strong> TVB, HN</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block text-center mt-14 ">
        <a class="button btn-3 button--colorful button--margin btn--primary py-3 px-10 border-none rounded-full" href="/contact">HIRE ME</a>
      </div>
  </div>
</section>
    `;
};