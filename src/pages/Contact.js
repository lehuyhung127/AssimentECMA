import { ContactPage } from "../components/Contact";
import { FooterHomePage } from "../components/FooterHomePage";
import { HeaderHomepage } from "../components/HeaderHomePage"

const Contact = () => {
    return `
    ${HeaderHomepage()}
    ${ContactPage()}
    ${FooterHomePage()}
    `

}
export default Contact;