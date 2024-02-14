import RenderPickupBanner from "../RenderComponents/RenderPickupBanner"
const PickupBanners = ({ PickupItems }) => {
  return (
    <>
        <div className="row mt-5">
            {
                  PickupItems.map((items)=><RenderPickupBanner Items={items} key={items.id}/>)
            }
              <div className="col-md-6 mt-4 last-pick-up">
                          <img src="/Images/pickupBanner4.png" alt="" width={260} className="pickup-img img-fluid last-pickup-img" />
                          <h4>Adding 11 herbs and spices, Explore our menu and add items to your cart.</h4>
                  <a href="https://www.kfcpakistan.com/menu#EverydayValue"><button className="btn pickup-btn">EXPLORE MENU</button></a>
              </div>
        </div> 
    </>
  )
}
export default PickupBanners
