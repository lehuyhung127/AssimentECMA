import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage";
import { MyService } from "../components/MyServiceHomePage";
import { dataHomePage } from "../dataProjectHomePage"

const ProjectDetail = (id) => {
    const projects = dataHomePage.find((projects) => projects.id === +id);
    if(!projects) return `404 Not Found`;
    return `
    ${HeaderHomepage()}
    <h2 class="text-center text-white text-[35px] my-8">Thông Tin Dự Án</h2>
    <div class="">
        <div class="flex justify-center gap-8">
            <div>
                <img src="${projects.img}" class=""  style="height:300px;"/>
            </div>
            <div class="text-white">
                <h1 class=" text-center text-[20px] mb-2">${projects.title}</h1>
                <p>- ${projects.info}</p>
                <p>- Các cộng nghệ: ${projects.technologies}</p>
                <div class="mt-4"><a href="/..." class="btn--project py-[10px] px-[30px] rounded-full boder-none text-white " style=" background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);">Xem chi tiết</a></div>
                
            </div>
        </div>
    </div>
    ${MyService()}
    ${FooterHomePage()}
    `;
}
export default ProjectDetail;