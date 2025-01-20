import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCreative, Pagination, Autoplay, Navigation} from 'swiper/modules'
import './style.css'
import Button from '../Components/button'

const ContainSlide = () => {

  const data = [
    { id: "1", image: "Avatar.png" },
    { id: "2", image: "Canais.png" },
    { id: "3", image: "divertidamente.png" },
    { id: "4", image: "familia.png" },
    { id: "5", image: "Matador.png" },
    { id: "6", image: "vovo-ninja.png" },
    { id: "7", image: "theWolfman.png" },
    { id: "8", image: "TelefoneToca.png" },
    { id: "9", image: "Superman.png" },
    { id: "10", image: "Deadpool.png" },
  ];


  
  return(
    <div className="container">
        <Button/>
        <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
          grabCursor={true}
          effect={'creative'}
          modules={[Autoplay, EffectCreative, Pagination, Navigation]}
          slidesPerView={1}
          // pagination={{clickable: true}}
          navigation={true}

        >
          {data.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.image} alt="Imagem slide" className='imageSlide'/>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default ContainSlide;