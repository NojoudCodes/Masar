import { useState } from "react";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";

export default function Hero() {
  const [showTracking, setShowTtacming] = useState(false);

  return (
    <header id="hero" className="flex flex-col xl:flex-row xl:justify-between 
    items-center gap-15 py-32 px-5 xl:px-15 mb-6 h-screen">
      <div className="w-full md:w-3xl xl:flex-1">
        <Subtitle subtitle="شحن بري · بحري · جوي" />
        <h1 className="font-bold text-3xl xl:text-6xl pt-4 leading-snug">
          نربط أعمالك <span className="text-lime">بالعالم،</span> <br />
          بدقة تُقاس بالدقائق
        </h1>
        <p className="text-muted text-sm xl:text-lg mt-4">شبكة لوجستية تغطي ٢٦ دولة، مع تتبع لحظي لكل شحنة من لحظة الاستلام حتى التسليم النهائي.</p>
        <div className="flex gap-3 mt-8">
          <Button
            path="#contact"
            text="احصل على عرض سعر"
            styles="bg-lime hover:bg-white text-ink-primary py-4 rounded-none"
          />
          <Button
            path="#services"
            text="استعرض الخدمات"
            styles="border border-muted text-white hover:text-lime hover:border 
            hover:border-lime py-4 rounded-none "
          />
        </div>
      </div>
      <div className="w-full md:w-3xl xl:flex-1">
        <div className="bg-ink-secondary py-8 px-5 xl:px-15 w-full rounded-xl">
          <h4 className="text-xs text-muted mb-3">تتبع شحنتك</h4>
          <form className="flex">
            <input 
              type="text" 
              placeholder="MSR-482910-KSA" 
              className="border border-ink-tertiary p-2 w-full text-line-light text-xs 
              focus:outline-none focus:ring-0 focus:border-lime"
            />
            <button 
              className="bg-lime border-0 text-ink-primary px-4 py-2"
              onClick={(e) => {
                  e.preventDefault();
                  setShowTtacming(true);
                }
              }
            >تتبع</button>
          </form>
          <div className={`${showTracking ? "flex" : "hidden"} mt-8 flex-col gap-3`}>
            <div className="flex items-center gap-3">
              <div className="bg-lime w-2 h-2 rounded-full"></div>
              <h6 className="text-sm text-white">تم الاستلام من جدة</h6>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-lime w-2 h-2 rounded-full"></div>
              <h6 className="text-sm text-white">في مركز الفرز — الرياض</h6>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-muted w-2 h-2 rounded-full"></div>
              <h6 className="text-sm text-muted">خارج التسليم</h6>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-muted w-2 h-2 rounded-full"></div>
              <h6 className="text-sm text-muted">تم التسليم</h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
