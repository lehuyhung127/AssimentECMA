import { AdditionalHomePage } from "../components/AdditionalHomePage";
import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage"
import { SectionLoremHomepage } from "../components/SectionLoremHomePage";
import { Technologies } from "../components/TechnologiesHomepage";
import { dataHomePage } from "../dataProjectHomePage";

 const ProjectsPage = () => {
    return `
    ${HeaderHomepage()}
    <h1 class="text-white uppercase text-center text-[35px] mb-8">list project</h1>
    <div class="grid grid-cols-2 gap-8 abc">
        ${dataHomePage.map(function(dataHomePage){
            return `
            <div class="projet--item text-white border-2 border-solid border-white " style="border-radius:  30px 1px;">
                <div class="project--image p-5 containerimg">
                    <img srcset="${dataHomePage.img} 2x" alt="" class="image imgfluid"  style="height:300px"/>
                    <div class="middle">
                    <a href="/projects/${dataHomePage.id}" class="text">Review</a>
                  </div>
                </div>
                <div class=" text-center"><a href="/projects/${dataHomePage.id}" class="project--name font-semibold no-underline text-white text-[25px] uppercase">${dataHomePage.title}</a></div>
                
                <p class="project--desc px-5">${dataHomePage.content}
                </p>
                <div class="btn__subkey my-5 ml-8 ">
                    <a href="/projects/${dataHomePage.id}" class="btn--project btn-3 py-[10px] px-[30px] rounded-full boder-none text-white " style=" background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);">Look it up</a>
                </div>
            </div>
            `
        }).join("")}
        </div>
    ${FooterHomePage()}
    `
}
export default ProjectsPage;