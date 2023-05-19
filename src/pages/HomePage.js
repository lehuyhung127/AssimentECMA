import { AdditionalHomePage } from "../components/AdditionalHomePage";
import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage"
import { SectionLoremHomepage } from "../components/SectionLoremHomePage";
import { Technologies } from "../components/TechnologiesHomepage";
import { dataHomePage } from "../dataProjectHomePage";

 const HomePage = () => {
    return `
    ${HeaderHomepage()}
    ${SectionLoremHomepage()}
    <div class="projects">
        <h2 class="projects--title mb-[50px] ml-[100px] not-italic font-semibold text-[35px] leading-4	text-white">Projects</h2>
        <div class="grid grid-cols-2 gap-8 abc">
        ${dataHomePage.map(function(dataHomePage){
            return `
            <div class="projet--item text-white border-2 border-solid border-white " style="border-radius:  30px 1px;">
                <div class="project--image p-5">
                    <img srcset="${dataHomePage.img} 2x" alt="" class="imgfluid" />
                </div>
                <a href="" class="project--link no-underline text-white">
                    <h3 class="project--name text-center font-semibold	text-[25px] uppercase">${dataHomePage.title}</h3></a
                >
                <p class="project--desc px-5">${dataHomePage.content}
                </p>
                <div class="btn__subkey my-5 ml-8 ">
                    <button class="btn--project py-[10px] px-[30px] rounded-full boder-none text-white " style=" background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);">Look it up</button>
                </div>
            </div>
            `
        }).join("")}
        </div>
      </div>
      ${Technologies()}
      ${AdditionalHomePage()}
      ${FooterHomePage()}
    `
}
export default HomePage;