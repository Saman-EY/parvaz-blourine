import { IconSelect } from "@/components/ui/icon-select";
import Link from "next/link";
import { FooterSlider } from "@/components/layout/footer/footer-slider";

export const Footer = () => {
  return (
    <footer className={"w-full"}>
      <img
        className={"w-full h-full"}
        src="/assets/images/static/footer-background.svg"
        alt="footer background image"
      />
      <section
        className="bg-bgGreen text-white w-full flex flex-col items-center justify-center px-0 px-3"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-4 gap-y-10 lg:gap-y-0 gap-x-10 px-4 md:px-10 py-8 mx-auto font-light">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start items-start">
            <IconSelect classes="w-[60%] md:w-[20%] lg:w-[80%]" name="logo-light" />
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 grid-rows-7 gap-y-2 text-sm sm:text-base justify-items-center lg:justify-items-start place-content-center justify-center ">
            <p className="col-span-full text-lg font-semibold text-center lg:text-start">ارتباط با ما</p>

            <a href="tel:02115661527" itemProp="telephone" className="flex items-center gap-2">
              <IconSelect classes="text-xl" name="phone" />
              <span dir="ltr">02186091701</span>
            </a>

            <a href="tel:02147121856" itemProp="telephone" className="flex items-center gap-2">
              <IconSelect classes="text-xl" name="phone" />
              <span dir="ltr">09124244853​</span>
            </a>

            <a
              href="mailto:parvazbolourin@gmail.com"
              itemProp="email"
              className="col-span-full text-center lg:text-start flex items-center gap-2"
            >
              <IconSelect classes="text-xl" name="mail" />
              <span dir="ltr">parvazbolourin@gmail.com</span>
            </a>

            <address
              className="flex items-start gap-2 not-italic col-span-2 row-span-2"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <IconSelect classes="text-xl mt-2 shrink-0" name="location" />
              <span className="max-w-[350px] " itemProp="streetAddress">
                تهران، شهرک غرب، پاساژ پلاتین، طبقه اول، واحد 113
              </span>
            </address>

            <p className="col-span-full flex items-center gap-2">
              <span>کد پستی:</span>
              <span itemProp="postalCode">1467698714</span>
            </p>
          </div>

          {/* Useful Links */}
          <div className="grid grid-rows-4 lg:grid-rows-7 lg:grid-cols-2 grid-flow-col gap-x-4 gap-y-2 text-sm sm:text-base place-content-center">
            <p className="col-span-4 text-lg font-semibold text-center lg:text-start mb-2">پیوندها</p>

            <Link href="/tours" aria-label="لینک به صفحه تورها">
              تورها
            </Link>
            <Link href="/hotel" aria-label="لینک به صفحه هتل">
              هتل‌ها
            </Link>
            <Link href="/" aria-label="لینک به صفحه تورساز">
              تورساز
            </Link>
            <Link href="/about-contact" aria-label="لینک به صفحه تماس با ما">
              تماس با ما
            </Link>
            <Link href="/" aria-label="لینک به صفحه آتلیه شیردال">
              آتلیه شیردال
            </Link>
            <Link href="/visa-passport" aria-label="لینک به صفحه ویزا/اقامت">
              ویزا/اقامت
            </Link>
            <Link href="/" aria-label="لینک به صفحه پرواز">
              پرواز
            </Link>
            <Link href="/weblog" aria-label="لینک به صفحه خدمات سفر">
              خدمات سفر
            </Link>
          </div>

          {/* Slider or Image */}
          <div className="w-full flex justify-center items-center">
            <FooterSlider />
          </div>
        </div>

        <div
          className={
            "bg-[#263238] w-full flex flex-col gap-10 lg:flex-row items-center justify-between py-8 px-10 max-w-1440 mb-10 rounded-lg  lg:rounded-2xl"
          }
        >
          <div className={"flex items-center gap-3"}>
            <IconSelect classes={"w-1/6 text-5xl stroke-1"} name={"copyright"} />
            <div className="w-full sm:min-w-[340px]">
              <p className={"font-normal w-full !text-xs"}>
                2023 کپی‌رایت، کلیه حقوق برای سایت
                <strong className={"font-bold"}> بلورین شیردال </strong>
                محفوظ است.
              </p>
            </div>
          </div>

          <ul className={"flex-center gap-3 lg:gap-5 flex-wrap"}>
            <li className={"transition-colors bg-white hover:bg-secondary p-2 rounded-full text-[#263238]"}>
              <a
                href={"https://www.instagram.com/pg.tour"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"ما را در اینستاگرام دنبال کنید"}
                title={"ما را در اینستاگرام دنبال کنید"}
              >
                <IconSelect classes={"text-lg"} name={"instagram"} />
                <span className="sr-only">اینستاگرام</span>
              </a>
            </li>

            <li className={"transition-colors bg-white hover:bg-secondary p-2 rounded-full text-[#263238]"}>
              <a
                href={"https://t.me/parvazbolourins"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"ما را در تلگرام دنبال کنید"}
                title={"ما را در تلگرام دنبال کنید"}
              >
                <IconSelect classes={"text-lg"} name={"telegram"} />
                <span className="sr-only">تلگرام</span>
              </a>
            </li>
            <li className={"transition-colors bg-white hover:bg-secondary p-2 rounded-full text-[#263238]"}>
              <a
                href={"https://www.aparat.com/parvazbolourin"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"ما را در آپارات دنبال کنید"}
                title={"ما را در آپارات دنبال کنید"}
              >
                <IconSelect classes={"text-lg"} name={"aparat"} />
                <span className="sr-only">آپارات</span>
              </a>
            </li>
            <li className={"transition-colors bg-white hover:bg-secondary p-2 rounded-full text-[#263238]"}>
              <a
                href={"https://www.youtube.com/@parvazbolourinshirdalll"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"ما را در یوتیوب دنبال کنید"}
                title={"ما را در یوتیوب دنبال کنید"}
              >
                <IconSelect classes={"text-lg"} name={"youtube"} />
                <span className="sr-only">یوتیوب</span>
              </a>
            </li>
            {/* <li className={"transition-colors bg-white hover:bg-secondary p-2 rounded-full text-[#263238]"}>
              <a
                href={"https://www.instagram.com/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"ما را در اینستاگرام دنبال کنید"}
                title={"ما را در اینستاگرام دنبال کنید"}
              >
                <IconSelect classes={"text-lg"} name={"facebook"} />
                <span className="sr-only">اینستاگرام</span>
              </a>
            </li> */}
            <li className={"transition-colors bg-white hover:bg-secondary p-2 rounded-full text-[#263238]"}>
              <a
                href={"https://wa.me/982186091701"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"ما را در واتساپ دنبال کنید"}
                title={"ما را در واتساپ دنبال کنید"}
              >
                <IconSelect classes={"text-lg"} name={"whatsapp"} />
                <span className="sr-only">واتساپ</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
