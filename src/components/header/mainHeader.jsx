import React from "react";

String.prototype.toPersianDigits = function () {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

function MainHeader() {
  let num = "5";

  return (
    <div className="flex justify-center items-center gap-[2em] dir py-[1em]">
      <div className="flex justify-center items-center gap-[.15em] ml-auto">
        <img src="/static/images/Rectangle.png" />
        <div className="text-cdgray text-[12px]">
          فروشگاه اینترنتی سرور فیزیکی
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <img src="/static/icons/Group-3.png" />
        <div className="text-cdgray text-[12px]">سرورهای تیغه ای</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <img src="/static/icons/Group-1.png" />
        <div className="text-cdgray text-[12px]">سرورهای ایستاده</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <img src="/static/icons/Group-4.png" />
        <div className="text-cdgray text-[12px]">کیس و مینی کیس</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <img src="/static/icons/Group.png" />
        <div className="text-cdgray text-[12px]">سرورهای رکمونت</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <img src="/static/icons/Group-2.png" />
        <div className="text-cdgray text-[12px]">ایستگاه های کاری</div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[1em]">
        <img src="/static/icons/Group-5.png" />
        <div className="text-cdgray text-[12px]">لولزم جانبی</div>
      </div>
      <div className="flex justify-center items-center gap-[1em] mr-auto reversedir">
        <img src="/static/images/manhead.png" className="mt-[1em]" />
        <div className="bg-cgreen rounded-[5em] text-[white] flex justify-center items-center gap-[2em] px-[1.5em] py-[.5em] text-[14.5px]">
          <div className="text-[30px]">{num.toPersianDigits()}</div>
          <div>سبد خرید</div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
