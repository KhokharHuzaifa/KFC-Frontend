const RenderOwlCarousel = ({Items}) => {
  return (
    <>
          <a target='blank' href={Items.target_link}>
              <div className='item owl-img-cont mt-5'>
                  <img src={Items.product_img} className='owl-img' alt="" />
                  <h6 className='owl-title'>{Items.product_title}</h6>
              </div>
              <div id="title-line-carousel"></div>
          </a> 
    </>
  )
}

export default RenderOwlCarousel
