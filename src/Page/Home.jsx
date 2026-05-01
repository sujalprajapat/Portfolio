import AboutSection from "../Component/Home/AboutSection";
import ContactUs from "../Component/Home/ContactUs";
import HeroSection from "../Component/Home/HeroSection";
import Project from "../Component/Home/Project";
import Technologies from "../Component/Home/Technologies";
function Home(){
    return(
        <>
        <HeroSection/>
        <AboutSection/>
        <Technologies/>
        <Project/>
        <ContactUs/>
        </>
    )
}
export default Home; 