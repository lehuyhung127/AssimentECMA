import { AboumeHompe } from "../components/AboutmeHomePage";
import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage";
import { Technologies } from "../components/TechnologiesHomepage";
import ProjectsPage from "./ProjectsPage";

const AboutmePage = () => {
    return `
    ${HeaderHomepage()}
    ${AboumeHompe()}
    ${Technologies()}
    ${FooterHomePage()}
    `
}
export default AboutmePage;