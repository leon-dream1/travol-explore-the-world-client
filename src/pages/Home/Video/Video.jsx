import video from "../../../../public/travel-video.mp4";

const Video = () => {
  return (
    <div className="mt-[90px]">
      <div className="relative">
        <video
          style={{ width: "100%", height: "100%" }}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src={video}
        />
        <div className="absolute top-[40%] left-[20%] lg:left-[35%]">
          <h4 className="text-[20px] md:text-[40px] lg:text-[60px] text-center font-merriweather text-white font-bold">
            Costa Victoria Cochin
          </h4>
          <p className="text-[15px] md:text-[20px] lg:text-[30px] text-white text-center">Maldives</p>
        </div>
      </div>
    </div>
  );
};

export default Video;
