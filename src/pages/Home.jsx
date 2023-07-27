import "./Home.css"
import Navbar from '../componats/navbar/Navbar'
import Footer from '../componats/footer/Footer'
import SecondSection from '../componats/secondSection/SecondSection'
import FirstSection from '../componats/firstSection/FirstSection'
import OurServices from '../componats/ourServices/OurServices'

const Home = () => {
  return (
    <div className="">
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <OurServices/>
        <Footer/>
    </div>
  )
}

export default Home