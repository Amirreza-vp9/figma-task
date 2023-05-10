import React, { useState } from "react";

function Tabs() {
  const [space, setSpace] = useState(0);

  return (
    <div className="flex dir relative pb-[1.5em] border-b-[#EFF3F8] border-b-[1px]">
      <div className="flex gap-[2em]">
        <div className="text-[17px] text-cblack font-bold cursor-default">
          جستجو در محصولات
        </div>
        <div className="relative flex justify-center items-center flex-col gap-[2em]">
          <div
            className={`text-[13px] ${
              space === 0 ? "text-cblue" : "text-cmgray"
            } font-bold transition-[.5s] cursor-pointer`}
            onClick={() => {
              setSpace(0);
            }}
          >
            سرور های ایستاده
          </div>
          {space === 0 ? (
            <div className="w-[6.5em] h-[3px] bg-cblue rounded-md absolute top-[3em]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex justify-center items-center flex-col gap-[2em]">
          <div
            className={`text-[13px] ${
              space === 1 ? "text-cblue" : "text-cmgray"
            } font-bold transition-[.5s] cursor-pointer`}
            onClick={() => setSpace(1)}
          >
            سرور های رکمونت
          </div>
          {space === 1 ? (
            <div className="w-[6.5em] h-[3px] bg-cblue rounded-md absolute top-[3em]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex justify-center items-center flex-col gap-[2em]">
          <div
            className={`text-[13px] ${
              space === 2 ? "text-cblue" : "text-cmgray"
            } font-bold transition-[.5s] cursor-pointer`}
            onClick={() => setSpace(2)}
          >
            هارد دیسک
          </div>
          {space === 2 ? (
            <div className="w-[6.5em] h-[3px] bg-cblue rounded-md absolute top-[3em]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex justify-center items-center flex-col gap-[2em]">
          <div
            className={`text-[13px] ${
              space === 3 ? "text-cblue" : "text-cmgray"
            } font-bold transition-[.5s] cursor-pointer`}
            onClick={() => setSpace(3)}
          >
            کیس و مینی کیس
          </div>
          {space === 3 ? (
            <div className="w-[6.5em] h-[3px] bg-cblue rounded-md absolute top-[3em]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex justify-center items-center flex-col gap-[2em]">
          <div
            className={`text-[13px] ${
              space === 4 ? "text-cblue" : "text-cmgray"
            } font-bold transition-[.5s] cursor-pointer`}
            onClick={() => setSpace(4)}
          >
            سرور های تیغه ای
          </div>
          {space === 4 ? (
            <div className="w-[6.5em] h-[3px] bg-cblue rounded-md absolute top-[3em]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex justify-center items-center flex-col gap-[2em]">
          <div
            className={`text-[13px] ${
              space === 5 ? "text-cblue" : "text-cmgray"
            } font-bold transition-[.5s] cursor-pointer`}
            onClick={() => setSpace(5)}
          >
            ایستگاه های کاری
          </div>
          {space === 5 ? (
            <div className="w-[6.5em] h-[3px] bg-cblue rounded-md absolute top-[3em]"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex justify-center items-center flex-col gap-[2em]">
          <div
            className={`text-[13px] ${
              space === 6 ? "text-cblue" : "text-cmgray"
            } font-bold transition-[.5s] cursor-pointer`}
            onClick={() => setSpace(6)}
          >
            لوازم جانبی
          </div>
          {space === 6 ? (
            <div className="w-[6.5em] h-[3px] bg-cblue rounded-md absolute top-[3em]"></div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="text-[13.5px] text-cblue mr-auto font-bold cursor-pointer">
        همه سرور های رکمونت
      </div>
    </div>
  );
}

export default Tabs;
