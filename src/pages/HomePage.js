import  Header from "../components/Header";
import CustomerReview  from "../components/CustomerReviews";
const HomePage = () => {
    return `
    <div class="container max-w-7xl mx-auto px-4">
    ${Header()} 
    ${CustomerReview()}
    </div>
    `
}
export default HomePage;