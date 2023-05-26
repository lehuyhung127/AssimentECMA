import { AdditionalHomePage } from "../components/AdditionalHomePage";
import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage"
import { SectionLoremHomepage } from "../components/SectionLoremHomePage";
import { Technologies } from "../components/TechnologiesHomepage";
import { dataHomePage } from "../dataProjectHomePage";

 const ProjectsPage = () => {
    return `
    ${HeaderHomepage()}
    <h1 class="text-white">Page Prodcts</h1>
    ${FooterHomePage()}
    `
}
export default ProjectsPage;