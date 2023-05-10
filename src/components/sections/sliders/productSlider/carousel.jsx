import React, { useRef, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";

SwiperCore.use([Navigation]);

String.prototype.toPersianDigits = function () {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

let array = [
  {
    image: "/static/images/image-1.png",
    open: false,
  },
  {
    image: "/static/images/image-2.png",
    open: false,
  },
  {
    image: "/static/images/image-1.png",
    open: false,
  },
  {
    image: "/static/images/image-2.png",
    open: false,
  },
  {
    image: "/static/images/image-1.png",
    open: false,
  },
  {
    image: "/static/images/image-2.png",
    open: false,
  },
  {
    image: "/static/images/image-1.png",
    open: false,
  },
  {
    image: "/static/images/image-2.png",
    open: false,
  },
  {
    image: "/static/images/image-1.png",
    open: false,
  },
  {
    image: "/static/images/image-2.png",
    open: false,
  },
  {
    image: "/static/images/image-1.png",
    open: false,
  },
];

export default function Carousel() {
  const [updateUI, setUpdateUI] = useState(false);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const openInfoHandler = (index) => {
    array[index].open = !array[index].open;
    setUpdateUI(!updateUI);
  };

  return (
    <div className="flex justify-center items-center mt-[5em]">
      <div
        className="p-[1.5em] rounded-[1.25em] bg-cblue ml-[-4.5em] mr-[1em]"
        onClick={handlePrev}
      >
        <img
          src="/static/icons/smarrowleft.png"
          className="w-[.5em] h-[.5em]"
        />
      </div>
      <Swiper slidesPerView={4} spaceBetween={30} loop={true} ref={sliderRef}>
        {array.map((item, index) => {
          return (
            <SwiperSlide className="bg-[whitesmoke] p-[.5em] rounded-md">
              <div className="flex items-center flex-col h-[28em]">
                {item.open === true ? (
                  <>
                    <div className="flex justify-center items-center w-full">
                      <img
                        src="/static/images/smimage.png"
                        className="mr-auto"
                      />
                      <div className="flex flex-col items-center justify-center gap-[2em] ml-auto">
                        <div>
                          <img src="/static/icons/bookmark.png" />
                        </div>
                        <div>
                          <img src="/static/icons/cancle.png" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[1.15em] mt-[1.15em]">
                      <div className="text-[15px] font-bold text-[#3B4755]">
                        DELL em Server Rubbexes Superdome Flex
                      </div>
                      <div className="flex justify-center items-center gap-[2em]">
                        <div className="text-[14px] text-[#656565]">CPU</div>
                        <div className="text-[14px] text-cgray">
                          Intel ZET Xe Rubbexes E-2200 Series 4x
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-[2em]">
                        <div className="text-[14px] text-[#656565]">RAM</div>
                        <div className="text-[14px] text-cgray">
                          Lx HP MAX 32 GB DDR4 Ram Rubbexes
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-[2em]">
                        <div className="text-[14px] text-[#656565]">HDD</div>
                        <div className="text-[14px] text-cgray">
                          Intel ZET Xe Rubbexes E-2200 Series4x
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-[2em]">
                        <div className="text-[14px] text-[#656565]">PSU</div>
                        <div className="text-[14px] text-cgray">
                          Lx HP MAX 32 GB DDR4 Ram Rubbexes
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-[2em]">
                        <div className="text-[14px] text-[#656565]">NIC</div>
                        <div className="text-[14px] text-cgray">
                          Intel ZET Xe Rubbexes E-2200 Series 4x
                        </div>
                      </div>
                      <div className="flex justify-center items-center gap-[2em]">
                        <div className="text-[14px] text-[#656565]">Raid</div>
                        <div className="text-[14px] text-cgray">
                          Lx HP MAX 32 GB DDR4 Ram Rubbexes
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex w-full">
                      <div className="flex justify-center items-center gap-[.25em] mr-auto">
                        <div className="text-[15px] font-bold text-cgray">
                          {"4".toPersianDigits()}
                        </div>
                        <div>
                          <img src="/static/icons/star.png" />
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          src="/static/icons/bookmark.png"
                          className="ml-auto"
                        />
                      </div>
                    </div>
                    <img src={item.image} className="py-[2em]" />
                    <div className="text-[15px] font-bold text-[#3B4755]">
                      DELL em Server Rubbexes Superdome Flex
                    </div>
                    <div className="flex justify-center items-center gap-[2em] mt-[1.5em]">
                      <div className="text-[14px] text-[#656565]">CPU</div>
                      <div className="text-[14px] text-cgray">
                        Intel ZET Xe Rubbexes E-2200 Series 4x
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-[2em] mt-[1em]">
                      <div className="text-[14px] text-[#656565]">RAM</div>
                      <div className="text-[14px] text-cgray">
                        Lx HP MAX 32 GB DDR4 Ram Rubbexes
                      </div>
                    </div>
                  </>
                )}
                <div className="w-full flex justify-center items-center mt-[2.5em]">
                  {item.open === true ? (
                    <div className="flex justify-center items-center gap-[.75em] mr-auto">
                      <img src="/static/icons/smarrowleft.png" />
                      <div className="text-[12.5px] text-[#657283]">
                        مشاهده کامل مشخصات
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="text-[13px] ml-[-1em] text-[#AEB9C5] font-bold rotate-[-90deg]">
                        تومان
                      </div>
                      <div className="mr-auto">
                        <div className="text-[20px] font-bold text-[#202B38]">
                          {"24,900,000".toPersianDigits()}
                        </div>
                        <div className="flex justify-center items-center gap-[.25em]">
                          <div className="text-[14.5px] font-bold bg-cred py-[.15em] px-[.5em] text-white rounded-b-[1em] rounded-r-[1em]">
                            %{"17".toPersianDigits()}
                          </div>
                          <div className="text-[15px] font-bold text-[#AEB9C5]">
                            {"27,200,000".toPersianDigits()}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div onClick={() => openInfoHandler(index)}>
                    {item.open === true ? (
                      <img
                        src="/static/icons/openinfo.png"
                        className="mr-[3em] cursor-pointer"
                      />
                    ) : (
                      <img
                        src="/static/icons/info.png"
                        className="mr-[3em] cursor-pointer"
                      />
                    )}
                  </div>
                  <img src="/static/icons/add.png" className="mr-[1em]" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className="p-[1.5em] rounded-[1.25em] bg-cblue mr-[-4.5em] ml-[1em]"
        onClick={handleNext}
      >
        <img
          src="/static/icons/smarrowright.png"
          className="w-[.5em] h-[.5em]"
        />
      </div>
    </div>
  );
}
