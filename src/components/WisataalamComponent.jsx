import NavigationCom from "./NavigationCom";
import CardComponent from "./Wisataalam/CardComponen";

const WisataalamComponent = () => {
    
    return(
        <div>
             <NavigationCom wisata="Wisata alam" />
            <div className="container">
           <CardComponent />
           </div>
        </div>
    )
}

export default WisataalamComponent;