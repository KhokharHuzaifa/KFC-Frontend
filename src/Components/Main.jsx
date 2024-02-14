import MainCarousel from "../Components/Carousel"
import Owlcarousel from "./Owl-carousel"
import ScrollCardsSlider from "./ScrollCardsSlider"
import DealsCards from "./DealsCards"
import PickupBanners from "./PickupBanners"
const Main = ({OwlCarouselProp, ScrollCardsSliderProp, DealsCardsProp, PickupBannersProp, CarouselProp }) => {
  return (
    <>
      <MainCarousel CarouselItems={CarouselProp}/>
      <div className="container main-cont">
        <div className="row">
          <div className="col d-flex justify-content-center mt-3">
            <button className="btn main-btn col-12 col-sm-7" type="button">REORDER</button>
          </div>
        </div>
        <h3 className="mt-5 text-light main-title">EXPLORE MENU</h3>
        <div id="title-line"></div>
        <Owlcarousel OwlItems={OwlCarouselProp}/>
        <h3 className="mt-4 text-light main-title">BEST SELLERS</h3>
        <div id="title-line"></div>
        <ScrollCardsSlider ScrollItems={ScrollCardsSliderProp}/>
        <h3 className="mt-5 text-light main-title">TOP DEALS</h3>
        <div id="title-line"></div>
        <DealsCards DealsItems={DealsCardsProp}/>
        <PickupBanners PickupItems={PickupBannersProp}/>
      </div>
    </>
  )
}
export default Main
