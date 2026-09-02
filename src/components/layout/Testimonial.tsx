

export default function Testimonial() {
  return (
    <section className="py-32 px-15 bg-paper-secondary text-ink-primary text-center">
      <div className="xl:w-2xl mx-auto">
        <p className="font-semibold xl:text-2xl xl:leading-10">"من أول شحنة معهم انبهرنا بدقة مواعيد التسليم. الآن مسار تدير كل شحن مخزوننا بين جدة والرياض بدون ما نتابع بأنفسنا."</p>
        <div className="flex flex-col xl:flex-row xl:justify-center xl:items-center gap-2 xl:gap-1 mt-7">
          <h6 className="font-bold text-ink-primary text-sm">عبدالعزيز المطيري</h6>
          <span className="text-muted text-sm">— الرئيس التنفيذي، متجر لُمعة للتجزئة</span>
        </div>
      </div>
    </section>
  )
}
