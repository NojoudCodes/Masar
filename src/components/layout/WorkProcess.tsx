import ProcessCard from "../ui/ProcessCard";
import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";

export default function WorkProcess() {
  const processes = [
    {
      id: 1,
      number: "01",
      title: "احجز الشحنة",
      paragraph: "عبر الموقع أو تطبيقنا، وحدد نوع الشحن ووجهته.",
      styles: "border-l"
    },
    {
      id: 2,
      number: "02",
      title: "الاستلام والتغليف",
      paragraph: "فريقنا يستلم من موقعك ويتولى التغليف والتوثيق.",
      styles: "border-l"
    },
    {
      id: 3,
      number: "03",
      title: "الشحن والتتبع",
      paragraph: "تابع شحنتك لحظيًا عبر رقم التتبع في كل مرحلة.",
      styles: "border-l"
    },
    {
      id: 4,
      number: "04",
      title: "التسليم النهائي",
      paragraph: "توصيل لباب المستلم مع توقيع إلكتروني عند الاستلام.",
    }
  ]
  return (
    <Section sectionId="process" styles="bg-ink-secondary py-32 px-5 xl:px-15">
      <Subtitle subtitle="آلية العمل" />
      <h2 className="font-semibold text-4xl mt-4">من الحجز إلى التسليم، أربع خطوات</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-20">
        {processes.map((process) => (
          <ProcessCard
            key={process.id}
            number={process.number}
            title={process.title}
            paragraph={process.paragraph}
            styles={process.styles}
          />
        ))}
      </div>
    </Section>
  )
}
