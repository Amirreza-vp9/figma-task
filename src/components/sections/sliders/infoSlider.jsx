import React from "react";

function InfoSlider() {
  return (
    <div className="flex justify-center items-center gap-[7em] mt-[7em] relative">
      <div className="border-cgray border-[2px] rounded-[.65em] p-[1.4em] absolute left-[-4em]">
        <img src="/static/icons/smarrowleft.png" />
      </div>
      <img src="/static/images/vector.png" className="ml-[-5em]" />
      <div>
        <div>
          <img src="/static/images/frame.jpg" />
          <div className="mt-[-2.25em] ml-[19em] relative">
            <img src="/static/images/hand.png" className="absolute z-10" />
            <img
              src="/static/images/underline.png"
              className=" absolute top-[2.75em] right-[10em]"
            />
          </div>
        </div>
        <div className="mt-[9em] flex flex-col gap-[5em] ml-[-1.25em] dir">
          <div className="flex gap-[3em]">
            <div className="flex justify-center items-center gap-[.5em] dir">
              <img src="/static/icons/frame.png" />
              <div className="">
                <div className="text-[13.5px] font-bold text-cblack">
                  گارانتی تعمیر و تعویض
                </div>
                <div className="text-[12px] text-cdgray">
                  تحویل فوری و روزانه در سراسر کشور
                </div>
              </div>
              <div className="bg-cgray hover:bg-cgreen cursor-pointer mb-[-5em] mr-[2em] p-[.35em] rounded-l-[.25em] rounded-b-[.25em]">
                <img src="/static/icons/arrow.png" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[.5em] dir">
              <img src="/static/icons/frame-1.png" />
              <div className="">
                <div className="text-[13.5px] font-bold text-cblack">
                  تحویل سفارش فوری
                </div>
                <div className="text-[12px] text-cdgray">
                  تحویل فوری و روزانه در سراسر کشور
                </div>
              </div>
              <div className="bg-cgray hover:bg-cgreen cursor-pointer mb-[-5em] mr-[2em] p-[.35em] rounded-l-[.25em] rounded-b-[.25em]">
                <img src="/static/icons/arrow.png" />
              </div>
            </div>
          </div>
          <div className="flex gap-[3em]">
            <div className="flex justify-center items-center gap-[.5em] dir">
              <img src="/static/icons/frame-3.png" />
              <div className="">
                <div className="text-[13.5px] font-bold text-cblack">
                  ضمانت اصل بودن محصول
                </div>
                <div className="text-[12px] text-cdgray">
                  تحویل فوری و روزانه در سراسر کشور
                </div>
              </div>
              <div className="bg-cgray hover:bg-cgreen cursor-pointer mb-[-5em] mr-[2em] p-[.35em] rounded-l-[.25em] rounded-b-[.25em]">
                <img src="/static/icons/arrow.png" />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[.5em] dir">
              <img src="/static/icons/frame-2.png" />
              <div className="">
                <div className="text-[13.5px] font-bold text-cblack">
                  گارانتی بازگشت وجه
                </div>
                <div className="text-[12px] text-cdgray">
                  تحویل فوری و روزانه در سراسر کشور
                </div>
              </div>
              <div className="bg-cgray hover:bg-cgreen cursor-pointer mb-[-5em] mr-[2em] p-[.35em] rounded-l-[.25em] rounded-b-[.25em]">
                <img src="/static/icons/arrow.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-cgray border-[2px] rounded-[.65em] p-[1.4em] absolute right-[-4em]">
        <img src="/static/icons/smarrowright.png" />
      </div>
      <div className="absolute flex gap-[.5em] w-[10em] h-[1em] bottom-[-5em] left-[47%]">
        <div className="w-[.35em] h-[.35em] bg-[#F3F7FA] rounded-[50%]"></div>
        <div className="w-[.35em] h-[.35em] bg-[#F3F7FA] rounded-[50%]"></div>
        <div className="w-[1.5em] h-[.35em] bg-[#E0E6EE] rounded-md"></div>
        <div className="w-[.35em] h-[.35em] bg-[#F3F7FA] rounded-[50%]"></div>
      </div>
    </div>
  );
}

export default InfoSlider;
