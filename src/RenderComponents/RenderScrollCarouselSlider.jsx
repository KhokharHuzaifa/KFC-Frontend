import ScrollCardsBoxes from "../Components/scrollCardsBoxes"
const RenderScrollCarouselSlider = ({Items}) => {
  return (
    <>
          <div className={`ms-${Items.bs_margin_start} scroll-container-card`}>
              <ScrollCardsBoxes />
              <div style={{ display: 'flex', justifyContent: 'space-between' }} className="pt-4 card-sm">
                  <h4 className="card-text ms-3">{Items.card_title}</h4>
                  <div className="card-price ">
                      <div><h6 style={{ fontWeight: '700' }} className="sm-rs">Rs</h6></div><div><h4 style={{ fontWeight: '900' }} className="ms-1 sm-price">{Items.price}</h4></div></div>
              </div>
              <img className="img-fluid" src={Items.card_img} alt="Mountains" />
          </div>
    </>
  )
}

export default RenderScrollCarouselSlider
