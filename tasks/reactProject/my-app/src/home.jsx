import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";
import ProductCard from "./components/product/productCard";
import MainHome from "./components/main";


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