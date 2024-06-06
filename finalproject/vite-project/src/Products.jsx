import AllProduct from './AllProduct'
import ProductList from './ProductList'
import Search from './Search'
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import Footer from './footer'



function Products(){
    return(
        <>
            
            <Nav1/>
            <Nav2/>
            <AllProduct/>
            <Search/>
            <ProductList/>
            <Footer/>
        </>
    )
}


export default Products