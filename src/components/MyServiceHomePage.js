import { dataService } from "../dataProjectHomePage";

export const MyService = () => {
    return `
    <div class="section-service">
        <div class=" text-center my-24">
        <h2 class="page-section__title text-white text-[35px]">MY SERVICE</h2>
        <div class="page-section__img flex justify-center my-3">
        <img src="../../public/image/title-style.png" alt="" />
        </div>
        
        <div class=" abc my-service grid grid-cols-3 gap-8 text-white">
        ${dataService.map(function(dataService){
            return `
            <div class="mt-9 border-2 border-solid border-white" >
                <div class="project--image flex justify-center">
                    <img src="${dataService.img} " alt="" class="my-3" />
                </div>
                <a href="" class="">
                    <h3 class="text-[25px] font-semibold">${dataService.title}</h3></a
                >
                <p class="project--desc p-4">${dataService.content}
                </p>
                
            </div>
            `
        }).join("")}
        </div>
    </div>
    `
}