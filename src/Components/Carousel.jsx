import RenderCarousel from "../RenderComponents/RenderCarousel"
const MainCarousel = ({CarouselItems}) => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                {
                    CarouselItems.map((items)=><RenderCarousel Items={items} key={items.id}/>)
                }
                </div>
                <button className="carousel-control-prev" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <i className="fa-solid fa-circle-chevron-left prev-ico"></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <i className="fa-solid fa-circle-chevron-right next-ico"></i>
                </button>
            </div>
        </>
    )
}

export default MainCarousel
