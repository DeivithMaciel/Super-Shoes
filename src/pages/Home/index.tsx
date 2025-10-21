import BrandList from '../../components/BrandList'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Carousel brand="nike" />
        <BrandList />
      </div>
      <Footer />
    </>
  )
}

export default Home
