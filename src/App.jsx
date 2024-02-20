import './App.css'
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact'
import { OwlCarouselDataItems, ScrollCardsSliderDataItems, DealsCardsDataItems, PickupBannersDataItems, CarouselDataItems } from './Components/ItemsDatabase'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from './Pages/Layout';
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<Layout />}>
                <Route path="/" element={
                    <Home
                        OwlCarouselData={OwlCarouselDataItems}
                        ScrollCardsSliderData={ScrollCardsSliderDataItems}
                        DealsCardData={DealsCardsDataItems}
                        PickupBannerData={PickupBannersDataItems}
                        CarouselData={CarouselDataItems} />
                } />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Route>
    )
)
function App() {
    return <>
        <RouterProvider router={router} />
    </>
}

export default App
