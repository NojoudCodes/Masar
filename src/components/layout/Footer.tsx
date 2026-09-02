import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-ink-secondary pt-32 pb-10 px-5 xl:px-15">
      <div className="flex flex-col lg:flex-row justify-around gap-5 lg:gap-0">
        <div>
          <Logo />
          <p className="text-sm text-muted mt-4 leading-7">شركة سعودية لخدمات الشحن واللوجستيات،  <br />تخدم قطاع التجزئة والتجارة الإلكترونية منذ ٢٠١٧.</p>
        </div>
        <div>
          <h6 className="text-white">الشركة</h6>
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">من نحن</a>
            </li>
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">الوظائف</a>
            </li>
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">الشركاء</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-white">الخدمات</h6>
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">الشحن</a>
            </li>
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">الشبكة</a>
            </li>
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">API للمطورين</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-white">الشركة</h6>
          <ul className="flex flex-col gap-2 mt-4">
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime" dir="ltr">+966 92 000 5678</a>
            </li>
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">hello@masar.sa</a>
            </li>
            <li>
              <a href="#" className="text-xs text-muted hover:text-lime">جدة، السعودية</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-t-gray-600 mt-10 mb-4"></div>
      <div className="flex flex-col md:flex-row  justify-between">
        <p className="text-muted text-sm">© ٢٠٢٦ مسار للشحن واللوجستيات.</p>
        <p className="text-muted text-sm">مشروع تجريبي ضمن بورتفوليو تصميم</p>
      </div>
    </footer>
  )
}
