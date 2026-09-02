import Subtitle from "../ui/Subtitle";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="flex flex-col xl:flex-row justify-around xl:items-center bg-ink-primary gap-10 xl:gap-10 py-32 px-5 xl:px-15"
    >
      <div className="w-full xl:flex-2">
        <Subtitle subtitle="تواصل معنا" />
        <h3 className="font-bold text-2xl xl:text-5xl text-white mt-5">جاهزين نشحن أول طلبية لك</h3>
        <p className="text-muted text-sm mt-4 leading-6">عبّي البيانات وفريق المبيعات يتواصل معك خلال يوم عمل واحد  <br />بعرض سعر مخصص.</p>
      </div>
      <div className="w-full xl:flex-1 bg-ink-secondary p-7 mt-8 xl:mt-0">
        <form className="flex flex-col gap-5">
          <div className="bg-ink-tertiary py-1 px-4 rounded-xl">
            <input 
              type="text" 
              id="company"
              placeholder="اسم الشركة"
              className="w-full py-2"
            />
          </div>
          <div className="bg-ink-tertiary py-1 px-4 rounded-xl">
            <input 
              type="email" 
              id="email" 
              placeholder="البريد الالكتروني" 
              className="w-full py-2"
            />
          </div>
          <div className="bg-ink-tertiary py-1 px-4 rounded-xl">
            <select id="shipping" className="w-full py-3">
              <option value="land">نوع الشحن - بري</option>
              <option value="maritime">نوع الشحن - بحري</option>
              <option value="air">نوع الشحن - جوي</option>
            </select>
          </div>
          <button className="font-semibold xl:text-xl py-3 bg-lime hover:bg-white text-ink-primary rounded-xl">اطلب عرض سعر</button>
        </form>
      </div>
    </section>
  )
}
