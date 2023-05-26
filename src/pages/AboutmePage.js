import { SectionAboutmePage } from "../components/ContentAboutmePage";
import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage";

const AboutmePage = () => {
    return `
    ${HeaderHomepage()}
    ${SectionAboutmePage()}
    ${FooterHomePage()}
    `
}
export default AboutmePage;