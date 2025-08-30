import Footer from "./components/footer/footer";
import MainHome from "./components/mainSection/MainSection";
import NavBar from "./components/navBar/navBar";
import ProductCard from "./components/product/productCard";



export default function Home (){
    return(
<div>

<NavBar/>
<MainHome/>
<ProductCard/>

<Footer/>
</div>


    );
}