import ProcessCard from "../ui/ProcessCard";
import Subtitle from "../ui/Subtitle";

export default function WorkProcess() {
  return (
    <section id="process" className="bg-ink-secondary py-32 px-5 xl:px-15">
      <Subtitle subtitle="آلية العمل" />
      <h2 className="font-semibold text-4xl mt-4">من الحجز إلى التسليم، أربع خطوات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-20">
        <ProcessCard
          number="01"
          title="احجز الشحنة"
          paragraph="عبر الموقع أو تطبيقنا، وحدد نوع الشحن ووجهته."
          styles="border-l"
        />
        <ProcessCard
          number="02"
          title="الاستلام والتغليف"
          paragraph="فريقنا يستلم من موقعك ويتولى التغليف والتوثيق."
          styles="border-l"
        />
        <ProcessCard
          number="03"
          title="الشحن والتتبع"
          paragraph="تابع شحنتك لحظيًا عبر رقم التتبع في كل مرحلة."
          styles="border-l"
        />
        <ProcessCard
          number="04"
          title="التسليم النهائي"
          paragraph="توصيل لباب المستلم مع توقيع إلكتروني عند الاستلام."
          styles=""
        />
      </div>
    </section>
  )
}
