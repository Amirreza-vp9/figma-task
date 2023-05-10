import React, { useState } from "react";

function Filter() {
  const [select, setSelect] = useState(0);

  return (
    <div className="flex gap-[2.5em] mt-[5em] dir mr-[1em]">
      <div className="flex justify-center items-center gap-[5em] py-[2em] px-[1em] border-[1px] border-[#F3F7FA] rounded-[.5em]">
        <div className="text-[13.5px] text-cgray">دسته بندی سرور ها</div>
        <img src="/static/icons/arrowdown.png" />
      </div>
      <div className="flex justify-center items-center gap-[5em] py-[2em] px-[1em] border-[1px] border-[#F3F7FA] rounded-[.5em]">
        <div className="text-[13.5px] text-cgray">برند سرور</div>
        <img src="/static/icons/arrowdown.png" />
      </div>
      <div className="flex justify-center items-center gap-[5em] py-[2em] px-[1em] border-[1px] border-[#F3F7FA] rounded-[.5em]">
        <div className="text-[13.5px] text-cgray">محدوده قیمت</div>
        <img src="/static/icons/arrowdown.png" />
      </div>
      <div className="flex justify-center items-center gap-[5em] py-[2em] px-[1em] border-[1px] border-[#F3F7FA] rounded-[.5em]">
        <div className="text-[13.5px] text-cgray">ویژگی سرور</div>
        <img src="/static/icons/arrowdown.png" />
      </div>
      <div className="flex border-[1px] border-[#F3F7FA] rounded-[.5em] cursor-pointer">
        <div
          className={`text-[13.5px] ${
            select === 1 ? "text-[white] bg-cgreen" : "text-cgray"
          } font-bold px-[2em]  rounded-[.75em] flex justify-center items-center transition-[.5s]`}
          onClick={() => setSelect(1)}
        >
          اکبند
        </div>
        <div
          className={`text-[13.5px] ${
            select === 0 ? "text-[white] bg-cgreen" : "text-cgray"
          } font-bold px-[2em] rounded-[.75em] flex justify-center items-center transition-[.5s]`}
          onClick={() => setSelect(0)}
        >
          استوک
        </div>
      </div>
      <div className="text-[14.5px] flex justify-center items-center bg-cblue px-[3.5em] py-[2em] rounded-lg text-[white] font-bold">
        مشاهده نتایج
      </div>
    </div>
  );
}

export default Filter;
