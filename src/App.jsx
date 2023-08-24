import Image from "./components/Image"
import Logo from "./assets/logo.png"
import Facility from "./components/facility"
import PortionHeading from "./components/PortionHeading"
import SubHeading from "./components/SubHeading"
import Button from "./components/Button"
import Product from "./components/Product"





function App() {
  

  return (
    <>
      
      <Image src={Logo}/>
      <Facility/>
      <SubHeading text="sub HEading"/>
      <PortionHeading text="Portion Heading" className=""/>
      <Button text="Add to Cart"/>
      <Product/>
      
      
      

      
      
      
    </>
  )
}

export default App
