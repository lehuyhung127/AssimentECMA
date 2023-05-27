import { AboumeHompe } from "../components/AboutmeHomePage";
import { AdditionalHomePage } from "../components/AdditionalHomePage";
import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage"
import { MyService } from "../components/MyServiceHomePage";
import { SectionLoremHomepage } from "../components/SectionLoremHomePage";
import { Technologies } from "../components/TechnologiesHomepage";
import { dataHomePage } from "../dataProjectHomePage";

 const HomePage = () => {
    return `
    ${HeaderHomepage()}
    ${SectionLoremHomepage()}
    ${AboumeHompe()}
    <div class="projects">
    <div class=" text-center mb-8">
    <h2 class="page-section__title text-white text-[35px]">PROJECTS</h2>
    <div class="page-section__img flex justify-center my-3">
      <img src="./image/title-style.png" alt="" />
    </div>
    
  </div>
        <div class="grid grid-cols-2 gap-8 abc">
        ${dataHomePage.map(function(dataHomePage){
            return `
            <div class="projet--item text-white border-2 border-solid border-white " style="border-radius:  30px 1px;">
                <div class="project--image p-5 containerimg">
                    <img srcset="${dataHomePage.img} 2x" alt="" class="image imgfluid" style="height:300px"/>
                    <div class="middle">
                    <a href="/projects/${dataHomePage.id}" class="text">Review</a>
                  </div>
                </div>
                <div class="project--link no-underline text-white text-center">
                    <a href="/projects/${dataHomePage.id}" class="project--name text-center font-semibold	text-[25px] uppercase">${dataHomePage.title}</a></div
                >
                <p class="project--desc px-5">${dataHomePage.content}
                </p>
                <div class="btn__subkey my-5 ml-8 ">
                    <a href="/projects/${dataHomePage.id}" class="btn--project py-[10px] px-[30px] rounded-full boder-none text-white btn-3" style=" background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);">Look it up</a>
                </div>
            </div>
            `
        }).join("")}
        </div>
      </div>
      ${Technologies()}
      ${MyService()}
      ${AdditionalHomePage()}
      ${FooterHomePage()}
    `
}
export default HomePage;