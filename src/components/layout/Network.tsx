import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";

export default function Network() {
  const cities = [
    {
      id: 1,
      name: "الرياض",
      location: "24.7136° N"
    },
    {
      id: 2,
      name: "جدة",
      location: "21.5433° N"
    },
    {
      id: 3,
      name: "دبي",
      location: "25.2048° N"
    },
    {
      id: 4,
      name: "القاهرة",
      location: "30.0444° N"
    },
    {
      id: 5,
      name: "اسطنبول",
      location: "41.0082° N"
    },
    {
      id: 6,
      name: "شنغهاي",
      location: "31.2304° N"
    },
  ]
  return (
    <Section
      sectionId="network" 
      styles="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-10 xl:gap-0"
    >
      <div className="w-full xl:flex-1">
        <Subtitle subtitle="شبكتنا" />
        <h2 className="font-semibold text-3xl mt-4">مراكز فرز في كل نقطة تحتاجها</h2>
        <p className="text-muted mt-4">ست مدن رئيسية تُشكّل العمود الفقري لشبكتنا، مع شركاء  <br />محليين لتغطية ما تبقّى من المنطقة.</p>
      </div>
      <div className="w-full xl:flex-1">
        {cities.map((city) => (
          <div className="flex justify-between items-center border-y border-y-gray-800 py-6" key={city.id}>
            <div className="flex items-center gap-2">
              <div className="bg-lime w-2 h-2 rounded-full"></div>
              <h4 className="font-semibold text-xl text-white">{city.name}</h4>
            </div>
            <p className="text-muted text-sm" dir="ltr">{city.location}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
