import Main from "../Components/Main"
const Home = ({ OwlCarouselData, ScrollCardsSliderData, DealsCardData, PickupBannerData, CarouselData }) => {
  return (
    <>
      <Main OwlCarouselProp={OwlCarouselData} ScrollCardsSliderProp={ScrollCardsSliderData} DealsCardsProp={DealsCardData}
      PickupBannersProp={PickupBannerData} CarouselProp={CarouselData}/>
    </>
  )
}

export default Home
