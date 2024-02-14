
const RenderPickupBanner = ({Items}) => {
  return (
    <>
          <div className={`col-md-6 mt-${Items.banner_marginTop} mt-md-${Items.banner_marginTop_md}`}>
              <a href={Items.target_link}>
                  <img src={Items.banner_img} alt="" width={Items.banner_width} className="pickup-img img-fluid" />
              </a>
          </div> 
    </>
  )
}

export default RenderPickupBanner
