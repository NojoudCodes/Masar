import ServiceCard from "../ui/ServiceCard";
import Subtitle from "../ui/Subtitle";

import { MdAirlines } from "react-icons/md";
import { TbSpeedboat } from "react-icons/tb";
import { IoAirplaneOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import Section from "../ui/Section";

export default function Services() {
  return (
    <Section sectionId="services" styles="bg-ink-secondary py-32 px-5 xl:px-15">
      <div className="flex flex-col xl:flex-row xl:justify-around xl:items-center gap-5 xl:gap-0">
        <div>
          <Subtitle subtitle="خدماتنا" />
          <h2 className="font-semibold text-4xl mt-4">أي طريقة شحن تحتاجها، عندنا</h2>
        </div>
        <div>
          <p className="text-muted">
            من الطرود الصغيرة إلى الحاويات الكاملة، بأسطول وشركاء  <br />موزعين على مستوى المنطقة.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mt-20">
        <ServiceCard
          icon={MdAirlines}
          title="شحن بري"
          paragraph="تغطية يومية بين المدن الرئيسية بأسطول شاحنات مبرّدة وعادية."
        />
        <ServiceCard
          icon={TbSpeedboat}
          title="شحن بحري"
          paragraph="حاويات كاملة أو جزئية عبر أهم الموانئ في الخليج والبحر الأحمر."
        />
        <ServiceCard
          icon={IoAirplaneOutline}
          title="شحن جوي"
          paragraph="للشحنات العاجلة والحساسة للوقت، تسليم خلال ٢٤-٤٨ ساعة."
        />
        <ServiceCard
          icon={BsBuildings}
          title="تخزين ومستودعات"
          paragraph="مساحات تخزين ذكية مع إدارة مخزون مباشرة عبر لوحة التحكم."
        />
      </div>
    </Section>
  )
}
