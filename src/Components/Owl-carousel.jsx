import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RenderOwlCarousel from '../RenderComponents/RenderOwlCarousel';
const Owlcarousel = ({ OwlItems }) => {
    const options ={
        nav:true,dots:false,responsiveClass: true,navText: ['<i class="fa-solid fa-circle-chevron-left owl-slide-prev" aria-hidden="true"></i>', '<i class="fa-solid fa-circle-chevron-right owl-slide-next" aria-hidden="true"></i>'],
        responsive: {0: {items: 2},800: {items: 3},1000: {items: 4},1200: {items: 5}},
    }
  return (
    <>
          <OwlCarousel className='owl-theme' loop margin={25} touchDrag {...options}> 
          {
            OwlItems.map((items)=><RenderOwlCarousel Items={items} key={items.id}/>)
          }
          </OwlCarousel>
    </>
  )
}
export default Owlcarousel
