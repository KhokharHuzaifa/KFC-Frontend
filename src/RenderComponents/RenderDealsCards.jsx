import ScrollCardsBoxes from "../Components/scrollCardsBoxes"
const RenderDealsCards = ({Items}) => {
  return (
    <>
          <div className={`col-lg-3 col-md-6 col-sm-6 col-12 mt-${Items.card_marginTop} 
                            mt-sm-${Items.card_mt_sm} mt-lg-${Items.card_mt_lg}`}>
              <div className="card">
                  <ScrollCardsBoxes />
                  <i className="ri-heart-line"></i>
                  <div className="container-fluid">
                      <img src={Items.card_img} className="card-img-top img-fluid" />
                  </div>
                  <div className="card-body">
                      <h5 className="card-title">{Items.card_title}</h5>
                      <p className="card-desc">{Items.card_desc}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <h6 className="card-price2">Rs {Items.product_price}</h6>
                          <button className="btn btn-outline card-btn">{Items.btn_cart}</button>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default RenderDealsCards
