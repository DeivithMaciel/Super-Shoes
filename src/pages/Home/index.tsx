import BrandList from '../../components/BrandList'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HeroCarousel from '../../components/HeroCarousel'

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <HeroCarousel />
        <BrandList />
      </div>
      <Footer />
    </>
  )
}

export default Home
