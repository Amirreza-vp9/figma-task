import React from "react";

String.prototype.toPersianDigits = function () {
  var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return this.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

function TopHeader() {
  const num1 = "021".toPersianDigits();
  const num2 = "95888415".toPersianDigits();

  return (
    <div className="flex justify-center items-center dir py-[1em] border-b-[1px] border-[white]">
      <div className="flex justify-center items-center gap-[1.5em] text-cgray">
        <div className="text-[12px]">صفحه نخست</div>
        <div className="text-[12px]">محصولات</div>
        <div className="text-[12px]">شرایط گارانتی</div>
        <div className="text-[12px]">گواهی نامه ها</div>
        <div className="text-[12px]">وبلاگ</div>
      </div>
      <div className="flex justify-center items-center mr-auto gap-[2em]">
        <div className="text-[12px] text-cgray">تماس با پشتیبانان فنی پیکو</div>
        <div className="reversedir">
          <span className="text-[12px] text-cgray mr-[.25em]">{num1}</span>
          <span className="text-[16px] text-[cdgray]">{num2}</span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
