import './App.css'
import Home from './Pages/Home'
import { OwlCarouselDataItems, ScrollCardsSliderDataItems, DealsCardsDataItems, PickupBannersDataItems, CarouselDataItems } from './Components/ItemsDatabase'
function App() {
    return <>
        <Home OwlCarouselData={OwlCarouselDataItems} ScrollCardsSliderData={ScrollCardsSliderDataItems}
        DealsCardData={DealsCardsDataItems} PickupBannerData={PickupBannersDataItems} CarouselData={CarouselDataItems}
        />
    </>
}

export default App
