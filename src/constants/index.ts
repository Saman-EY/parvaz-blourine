import { HomeHeroSliderType, TravelServiceCategory, TravelsPlanType } from "@/types/index.js";

export const travelServiceCategory: TravelServiceCategory[] = [
    {
        id: 1,
        title: "رزرو بلیط پرواز",
        icon: "plane",
        fields: [
            {
                id: 1,
                value: "selectPath",
                label: "انتخاب مسیر",
                options: [
                    { value: "oneway", label: "یک‌طرفه" },
                    { value: "roundtrip", label: "رفت و برگشت" },
                ],
            },
            {
                id: 2,
                value: "origin",
                label: "انتخاب مبدا",
                options: [
                    { value: "tehran", label: "تهران" },
                    { value: "mashhad", label: "مشهد" },
                    { value: "tabriz", label: "تبریز" },
                    { value: "shiraz", label: "شیراز" },
                ],
            },
            {
                id: 3,
                value: "destination",
                label: "انتخاب مقصد",
                options: [
                    { value: "istanbul", label: "استانبول" },
                    { value: "dubai", label: "دبی" },
                    { value: "kuala", label: "کوالالامپور" },
                    { value: "baku", label: "باکو" },
                ],
            },
            {
                id: 4,
                value: "departureDate",
                label: "تاریخ رفت",
                options: [],
            },
            {
                id: 5,
                value: "returnDate",
                label: "تاریخ برگشت",
                options: [],
            },
            {
                id: 6,
                value: "passengerCountByAge",
                label: "تعداد مسافرین براساس سن",
                options: [
                    { value: "adult", label: "بزرگسال (۱۲+)" },
                    { value: "child", label: "کودک (۲-۱۲)" },
                    { value: "infant", label: "نوزاد (زیر ۲ سال)" },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "رزرو هتل",
        icon: "hotel",
        fields: [
            {
                id: 1,
                value: "hotelCity",
                label: "شهر هتل",
                options: [
                    { value: "mashhad", label: "مشهد" },
                    { value: "shiraz", label: "شیراز" },
                    { value: "istanbul", label: "استانبول" },
                    { value: "dubai", label: "دبی" },
                ],
            },
            {
                id: 2,
                value: "checkInDate",
                label: "تاریخ ورود",
                options: [],
            },
            {
                id: 3,
                value: "nightsCount",
                label: "تعداد شب",
                options: [
                    { value: "1", label: "۱ شب" },
                    { value: "2", label: "۲ شب" },
                    { value: "3", label: "۳ شب" },
                    { value: "4", label: "۴ شب" },
                    { value: "5", label: "۵ شب یا بیشتر" },
                ],
            },
            {
                id: 4,
                value: "guestCount",
                label: "تعداد مهمان",
                options: [
                    { value: "1", label: "۱ نفر" },
                    { value: "2", label: "۲ نفر" },
                    { value: "3", label: "۳ نفر" },
                    { value: "4", label: "۴ نفر" },
                    { value: "5", label: "۵ نفر یا بیشتر" },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "رزرو تور مسافرتی",
        icon: "tour",
        fields: [
            {
                id: 1,
                value: "tourType",
                label: "نوع تور",
                options: [
                    { value: "internal", label: "داخلی" },
                    { value: "international", label: "خارجی" },
                ],
            },
            {
                id: 2,
                value: "destination",
                label: "مقصد تور",
                options: [
                    { value: "kish", label: "کیش" },
                    { value: "qeshm", label: "قشم" },
                    { value: "istanbul", label: "استانبول" },
                    { value: "armenia", label: "ارمنستان" },
                ],
            },
            {
                id: 3,
                value: "duration",
                label: "مدت زمان",
                options: [
                    { value: "3", label: "۳ روزه" },
                    { value: "5", label: "۵ روزه" },
                    { value: "7", label: "۷ روزه" },
                ],
            },
            {
                id: 4,
                value: "startDate",
                label: "تاریخ شروع",
                options: [],
            },
        ],
    },
    {
        id: 4,
        title: "وقت سفارت",
        icon: "flag",
        fields: [
            {
                id: 1,
                value: "country",
                label: "کشور مقصد",
                options: [
                    { value: "germany", label: "آلمان" },
                    { value: "canada", label: "کانادا" },
                    { value: "turkey", label: "ترکیه" },
                    { value: "france", label: "فرانسه" },
                ],
            },
            {
                id: 2,
                value: "city",
                label: "شهر سفارت",
                options: [
                    { value: "tehran", label: "تهران" },
                    { value: "istanbul", label: "استانبول" },
                    { value: "ankara", label: "آنکارا" },
                    { value: "dubai", label: "دبی" },
                ],
            },
            {
                id: 3,
                value: "appointmentType",
                label: "نوع وقت",
                options: [
                    { value: "tourist", label: "توریستی" },
                    { value: "student", label: "تحصیلی" },
                    { value: "work", label: "کاری" },
                ],
            },
        ],
    },
    {
        id: 6,
        title: "بیمه",
        icon: "security",
        fields: [
            {
                id: 1,
                value: "insuranceType",
                label: "نوع بیمه",
                options: [
                    { value: "travel", label: "مسافرتی" },
                    { value: "health", label: "درمانی" },
                    { value: "car", label: "شخص ثالث" },
                ],
            },
            {
                id: 2,
                value: "duration",
                label: "مدت زمان بیمه",
                options: [
                    { value: "1m", label: "۱ ماهه" },
                    { value: "3m", label: "۳ ماهه" },
                    { value: "6m", label: "۶ ماهه" },
                    { value: "1y", label: "۱ ساله" },
                ],
            },
            {
                id: 3,
                value: "destination",
                label: "محدوده پوشش",
                options: [
                    { value: "europe", label: "اروپا" },
                    { value: "asia", label: "آسیا" },
                    { value: "global", label: "کل دنیا" },
                ],
            },
        ],
    },
];

export const travelsPlan: TravelsPlanType[] = [
    {
        id: "1",
        src: "/assets/images/static/japan.webp",
        heading: "برنامه سفر ژاپن",
        description: `چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده برای شرایط فعلی تکنولوژی مورد نیاز.
برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.`,
        headingLink: "#",
        heading2: "بازارها را هرگز فراموش نمیکنید",
        description2: `برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها.`,
    },
    {
        id: "2",
        src: "/assets/images/static/ocean.webp",
        heading: "در رویای واقعی قدم بگزارید",
        description: `چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده برای شرایط فعلی تکنولوژی مورد نیاز.
برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی.`,
        headingLink: "#",
        heading2: "دریاهای سنگی و آسمان آبی",
        description2: `برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه‌ای و کاربردهای متنوع با هدف بهبود.`,
    },
    {
        id: "3",
        src: "/assets/images/static/airplane.webp",
        heading: "نوستالژی سفر",
        description: `چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده برای شرایط فعلی تکنولوژی مورد نیاز.
برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه‌ای.`,
        headingLink: "#",
        heading2: "",
        description2: `برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه‌ای.`,
    },
];

export const homeHeroSlider: HomeHeroSliderType[] = [
    { src: "/assets/images/dynamic/herobackground.png", alt: "home slide image" },
    { src: "/assets/images/dynamic/paris.webp", alt: "home slide image" },
    { src: "/assets/images/dynamic/italy.webp", alt: "home slide image" },
    { src: "/assets/images/dynamic/poland.webp", alt: "home slide image" },
    { src: "/assets/images/dynamic/torkey.webp", alt: "home slide image" },
];
