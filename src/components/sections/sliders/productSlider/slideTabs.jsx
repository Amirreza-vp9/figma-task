import React, { useState } from "react";

function SlideTabs() {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex justify-center items-center dir border-b-[#EFF3F8] border-b-[1px] pb-[1em]">
      <div className="flex justify-center items-center gap-[.5em] ml-auto">
        <div className="text-[18px] text-[#202B38] font-bold">
          انواع سرور رکمونت
        </div>
        <div className="text-[13px] text-[#AEB9C5]">
          تنوع بالایی از انواع سرور های رکمونت
        </div>
      </div>
      <div className="flex justify-center items-center gap-[2em] ml-[5em]">
        <div className="relative flex flex-col justify-center items-center gap-[1em] transition-[.5s]">
          <div
            onClick={() => setTab(0)}
            className={`text-[12.5px] ${
              tab === 0 ? "text-cblue" : "text-[#8F9DA7]"
            }  font-bold cursor-pointer`}
          >
            پرفروش ترین
          </div>
          {tab === 0 ? (
            <div className="absolute top-[2em] w-[5em] h-[3px] bg-cblue rounded-md"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex flex-col justify-center items-center gap-[1em] transition-[.5s]">
          <div
            onClick={() => setTab(1)}
            className={`text-[12.5px] ${
              tab === 1 ? "text-cblue" : "text-[#8F9DA7]"
            }  font-bold cursor-pointer`}
          >
            گران ترین
          </div>
          {tab === 1 ? (
            <div className="absolute top-[2em] w-[5em] h-[3px] bg-cblue rounded-md"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex flex-col justify-center items-center gap-[1em] transition-[.5s]">
          <div
            onClick={() => setTab(2)}
            className={`text-[12.5px] ${
              tab === 2 ? "text-cblue" : "text-[#8F9DA7]"
            }  font-bold cursor-pointer`}
          >
            ارزان ترین
          </div>
          {tab === 2 ? (
            <div className="absolute top-[2em] w-[5em] h-[3px] bg-cblue rounded-md"></div>
          ) : (
            ""
          )}
        </div>
        <div className="relative flex flex-col justify-center items-center gap-[1em] transition-[.5s]">
          <div
            onClick={() => setTab(3)}
            className={`text-[12.5px] ${
              tab === 3 ? "text-cblue" : "text-[#8F9DA7]"
            }  font-bold cursor-pointer`}
          >
            جدید ترین
          </div>
          {tab === 3 ? (
            <div className="absolute top-[2em] w-[5em] h-[3px] bg-cblue rounded-md"></div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex justify-center items-center gap-[1em]">
        <div className="text-[12.5px] text-[#AEB9C5] font-bold">مشاهده همه</div>
        <img src="/static/icons/smarrowleft.png" />
      </div>
    </div>
  );
}

export default SlideTabs;
