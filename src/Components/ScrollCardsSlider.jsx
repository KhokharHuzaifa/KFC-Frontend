import RenderScrollCarouselSlider from "../RenderComponents/RenderScrollCarouselSlider"
const ScrollCardsSlider = ({ScrollItems}) => {
    return (
        <>
            <div className="scroll-container mt-4">
                {
                    ScrollItems.map((items)=><RenderScrollCarouselSlider Items={items} key={items.id}/>)
                }
            </div>
        </>
    )
}
export default ScrollCardsSlider
