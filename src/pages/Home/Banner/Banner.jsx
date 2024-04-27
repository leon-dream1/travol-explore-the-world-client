const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="bg-banner1 ">
            <h1>Explore</h1>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="bg-banner1 "></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="bg-banner1 "></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="bg-banner1 "></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <div className="bg-banner1"></div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// <Swiper
//   slidesPerView={1}
//   spaceBetween={30}
//   loop={true}
//   // autoplay={{
//   //   delay: 2500,
//   //   disableOnInteraction: false,
//   // }}
//   pagination={{
//     clickable: true,
//   }}
//   navigation={true}
//   modules={[Pagination, Navigation]}
// >
//   <SwiperSlide>
//     <div className="h-[850px] bg-banner1 bg-no-repeat bg-top">
//       Explore the World
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="bg-banner2 h-[850px] bg-no-repeat bg-cover">
//       Explore the World
//     </div>
//   </SwiperSlide>
//   <SwiperSlide className="h-[700px]">
//     <div className="bg-banner3 h-[700px] bg-no-repeat bg-center">
//       Explore the World
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="bg-banner4 h-[850px] bg-no-repeat bg-cover">
//       Explore the World
//     </div>
//   </SwiperSlide>
//   <SwiperSlide>
//     <div className="bg-banner5 h-[850px] bg-no-repeat bg-cover">
//       Explore the World
//     </div>
//   </SwiperSlide>
// </Swiper>;
