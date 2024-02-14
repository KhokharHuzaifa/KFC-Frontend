const RenderCarousel = ({Items}) => {
  return (
    <>
          <div className={`carousel-item ${Items.active}`} data-bs-interval='3000'>
              <img src={Items.carousel_img} className="carousel-image img-fluid" alt="..." />
          </div>
    </>
  )
}

export default RenderCarousel
