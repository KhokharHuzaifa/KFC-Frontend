import Navigation from "../Components/Navbar"
import Main from "../Components/Main"
import Footer from "../Components/Footer"
const Home = ({ OwlCarouselData, ScrollCardsSliderData, DealsCardData, PickupBannerData, CarouselData }) => {
  return (
    <>
      <Navigation/>
      <Main OwlCarouselProp={OwlCarouselData} ScrollCardsSliderProp={ScrollCardsSliderData} DealsCardsProp={DealsCardData}
      PickupBannersProp={PickupBannerData} CarouselProp={CarouselData}/>
      <Footer/>
    </>
  )
}

export default Home
