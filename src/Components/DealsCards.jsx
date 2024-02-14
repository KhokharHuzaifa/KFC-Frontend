import RenderDealsCards from "../RenderComponents/RenderDealsCards"
const DealsCards = ({DealsItems}) => {
    return (
        <>
            <div className="row mt-4 deals-scroll-container">
                {
                    DealsItems.map((items) =><RenderDealsCards Items={items} key={items.id}/> )
                }
            </div>
        </>
    )
}
export default DealsCards
