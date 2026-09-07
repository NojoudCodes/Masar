import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Section from "../ui/Section";
import Subtitle from "../ui/Subtitle";
import Button from "../ui/Button";

export default function Contact() {
  const [isMessageOpen, setIsMessage] = useState(false)

  return (
    <Section 
      sectionId="contact" 
      styles="flex flex-col xl:flex-row justify-around xl:items-center bg-ink-primary gap-10 xl:gap-10 py-32 px-5 xl:px-15"
    >
      <div className="w-full xl:flex-2">
        <Subtitle subtitle="تواصل معنا" />
        <h3 className="font-bold text-2xl xl:text-5xl text-white mt-5">جاهزين نشحن أول طلبية لك</h3>
        <p className="text-muted text-sm mt-4 leading-6">عبّي البيانات وفريق المبيعات يتواصل معك خلال يوم عمل واحد  <br />بعرض سعر مخصص.</p>
      </div>
      <div className="w-full xl:flex-1 bg-ink-secondary p-7 mt-8 xl:mt-0">
        <form onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsMessage(true)
          
        }} className="flex flex-col gap-5">
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
          <button 
            type="submit"
            className="font-semibold xl:text-lg py-3 bg-lime hover:bg-white text-ink-primary rounded-xl"
            >اطلب عرض سعر</button>
        </form>

      </div>
      <AnimatePresence>
      {isMessageOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="fixed inset-0 z-10 flex flex-col justify-center items-center w-full h-screen bg-lime-dim"
        >
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="font-semibold text-lg lg:text-2xl text-ink-primary w-96 lg:w-full text-center"
          >
            تم إرسال البريد الإلكتروني، شكرًا لتواصلك معنا.
          </motion.p>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-9 cursor-pointer"
            onClick={() => setIsMessage(false)}
          >
            <Button
              path="#hero"
              styles="bg-paper-primary text-ink-primary py-3 px-5 shadow-ink-primary/10 shadow-md rounded-lg"
              text="العودة للرئيسية"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    </Section>
  )
}
