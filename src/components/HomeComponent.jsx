
import '../App.css';
import CrouselComponent from "./Home/CrouselComponent"
import Hero from "./Home/Hero"
import Menu from "./Home/Menu"


const HomeComponent = () => {
    
    return(
        
        <div>
            <Hero />
            <Menu />
            <CrouselComponent />
        </div>
    )
}
export default HomeComponent;