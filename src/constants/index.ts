import { Bs1Square, Bs2Square, Bs3Square, Bs4Square } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";

import carHeader from "../assets/carHeader.jpg";
import robbery from "../assets/robbery.jpg";
import buttonON from "../assets/buttonON.png";
import buttonOFF from "../assets/buttonOFF.png";
import vectorCar from "../assets/vectorCar.png";

import {
  type Header,
  type About,
  type Benefits,
  type Catalog,
  type Managment,
  type HowItWorks,
  type Advantages,
  type Order,
  type Footer,
} from "../lib/types";

export default {
  carHeader,
  robbery,
  buttonON,
  buttonOFF,
  vectorCar,
};

export const headerText: Header = {
  ru: {
    logo: "logo.png",
    phoneNumber: "+380000000000",
    nav: [
      {
        name: "О нас",
        path: "/#about",
      },
      {
        name: "Преимущества",
        path: "/#advantages",
      },
    ],
    chooseLanguage: {
      ru: "Русский",
      en: "English",
    },
    title: "BLOCKER",
    subtitle: "Авторская технология безопасности",
    article:
      "Blocker - ориентирована на профессиональную реализацию Ваших индивидуальных пожеланий в направлении комплексного или частичного переоборудования автомобиля. Наша основная специализация - профессиональная защита от угона. Мы позаботимся о безопасности Вашего имущества!",
    button: {
      name: "Заказать блокер",
      path: "/#order",
      type: "button",
      color: "secondary-color",
    },
    bgImage: "/carImage",
  },
  en: {
    logo: "logo.png",
    phoneNumber: "+380000000000",
    nav: [
      {
        name: "About",
        path: "/#about",
      },
      {
        name: "Advantages",
        path: "/#advantages",
      },
    ],
    chooseLanguage: {
      ru: "Русский",
      en: "English",
    },
    title: "BLOCKER",
    subtitle: "Author's Technology",
    article:
      "Blocker is focused on the professional implementation of your individual wishes in the direction of a complete or partial re-equipment of a car. Our main specialization is professional theft protection. We will take care of the safety of your property!",
    button: {
      name: "Order blocker",
      path: "/#order",
      type: "button",
      color: "secondary-color",
    },
    bgImage: "/carImage",
  },
};

export const aboutText: About = {
  ru: {
    title: "О нас",
    firstArticle:
      "Команда BLOCKER основана группой единомышленников в 2005 году и специализируется на дополнительном оборудовании автомобилей. Мы глубоко убеждены, что автомобиль для современного человека – настоящего ценителя высоких технологий – это синоним комфорта и безопасности, отражающий и подчеркивающий индивидуальность его владельца.",

    accentArticle:
      "Имеющийся опыт в области дополнительного оборудования современных автомобилей позволяют нам уверенно приниматься даже за самые нестандартные проекты.",

    secondArticle:
      "Мы рады предложить Вашему вниманию неординарную защиту от угона – электронно-механический иммобилайзер БЛОКЕР, который прошел испытания в Центре сертификации средств охранного назначения МВД Украины и официально одобрен к использованию, о чем свидетельствует полученный сертификат качества.",

    sideImage: "sideImage",
  },
  en: {
    title: "About",
    firstArticle:
      "The BLOCKER team was founded by a group of like-minded people in 2005 and specializes in additional car equipment. We are deeply convinced that a car for a modern person - a true connoisseur of high technology - is synonymous with comfort and safety, reflecting and emphasizing the individuality of its owner.",

    accentArticle:
      "Having experience in the field of additional equipment of modern cars allows us to truly accept even the most unusual projects.",

    secondArticle:
      "We are pleased to offer to your attention an extraordinary protection against theft - the electronic-mechanical immobilizer BLOCKER, which has been tested at the Certification Center for Security Equipment of the Ministry of Internal Affairs of Ukraine and has been officially approved for use, as evidenced by the received quality certificate.",

    sideImage: "sideImage",
  },
};

export const benefitsText: Benefits = {
  ru: {
    title: "Преимущества",
    benefits: [
      {
        title: "Эффективность защиты",
        article:
          "Блокер непросто обнаружить, его невозможно вскрыть или обойти, его также не получится быстро сломать. Это очень крепкий, эффективный и на редкость живучий механизм, способный удивить своей стойкостью даже опытного «медвежатника».",
        icon: Bs1Square,
      },

      {
        title: "Удобство",
        article:
          "Система проста в обращении – для комфорта пользователя существует несколько способов управления: ключ-метка BLOCKER, автомобильный ключ, брелок сигнализации, сервисная кнопка Valet. ",
        icon: Bs2Square,
      },

      {
        title: "Индивидуальность",
        article:
          "Блокер обеспечивает персонализированный контроль доступа к автомобилю – только владелец сможет управлять системой.",
        icon: Bs3Square,
      },

      {
        title: "Надежность и долговечность",
        article:
          "Конструкция иммобилайзера Блокер обеспечивает долгую и безотказную работу системы. Механизм блокиратора надежно защищен от пыли, грязи, влаги, перепадов температур и вибраций.",
        icon: Bs4Square,
      },
    ],
    roadImage: "roadImage",
    carImage: "carImage",
  },
  en: {
    title: "Benefits",
    benefits: [
      {
        title: "Protection efficiency",
        article:
          "The blocker is not easy to detect, it cannot be opened or bypassed, and it cannot be broken quickly. This is a very strong, effective and extremely tenacious mechanism, capable of surprising even an experienced “safeguard” with its durability.",
        icon: Bs1Square,
      },
      {
        title: "Convenience",
        article:
          "The system is simple to handle – for the comfort of the user, there are several ways to control: key-tag BLOCKER, car-key, lock signal, service button Valet.",
        icon: Bs2Square,
      },
      {
        title: "Individuality",
        article:
          "The blocker provides personalized access control – only the owner can control the system.",
        icon: Bs3Square,
      },
      {
        title: "Reliability and durability",
        article:
          "The Blocker immobilizer design ensures long and trouble-free operation of the system. The locking mechanism is reliably protected from dust, dirt, moisture, temperature changes and vibrations.",
        icon: Bs4Square,
      },
    ],
    roadImage: "roadImage",
    carImage: "carImage",
  },
};

export const catalogText: Catalog = {
  ru: {
    title: "Галерея",
    name: "Blocker “Стандарт”",
    subtitle:
      "Надежная противоугонная система, которая защитит ваш автомобиль!",
    article:
      "С помощью нашей  системы вы будете уверены, что всегда найдете свою машину там, где ее оставили вечером.",
    kit: [
      "БЛОКЕР «Стандарт» — 1шт.",
      "Считыватель контактный — 1шт.",
      "Ключ-таблетка — 2шт.",
      "Гарантийный срок — 12 месяцев",
    ],
    button: { name: "Заказать" },
    bgImage: "carImage",
  },
  en: {
    title: "Galery",
    name: "Blocker “Standard”",
    subtitle: "A reliable anti-theft system that will protect your car!",
    article:
      "With our system, you will be sure that you will always find your car where you left it in the evening.",
    kit: [
      "BLOCKER “Standard” — 1pc.",
      "Contact reader — 1pc.",
      "Key tablet — 2pcs.",
      "Warranty period — 12 months",
    ],
    button: { name: "Order" },
    bgImage: "carImage",
  },
};

export const managementText: Managment = {
  ru: {
    title: "управление системой",
    subtitle: "Система управления BLOCKER имеет следующие функции:",
    activeBlocker: {
      image: "activeBlocker",
      title: "Для активации БЛОКЕРА – существует несколько способов:",
      articles: [
        {
          image: "articleImage",
          article:
            "Ключ-метка BLOCKER. Достаточно поднести электронный ключ БЛОКЕРА к считывателю, установленному в салоне автомобиля. Ключи работают БЕЗ батареек.",
        },
        {
          image: "articleImage",
          article:
            "Автомобильный ключ. Выходя из машины, можно воспользоваться штатным автомобильным ключом или брелоком сигнализации, просто нажав на кнопку – БЛОКЕР активируется автоматически.",
        },
        {
          image: "articleImage",
          article:
            "Кнопка VALET. В случае потери ключа целесообразно воспользоваться сервисной кнопкой – после ввода собственного ПИН-кода пользователь без труда сможет управлять системой.",
        },
      ],
    },
    inactiveBlocker: {
      image: "inactiveBlocker",
      articles: [
        {
          image: "articleImage",
          article:
            "Разблокирование системы осуществляется только контактным способом – при помощи ключа-метки BLOCKER или кнопки Valet. Это сделано из соображений безопасности автомобиля – попыток интеллектуального угона.",
        },
      ],
    },
  },
  en: {
    title: "system management",
    subtitle: "The system management of BLOCKER has the following functions:",
    activeBlocker: {
      image: "activeBlocker",
      title: "To activate the BLOCKER, there are several ways:",
      articles: [
        {
          image: "articleImage",
          article:
            "The key-tag BLOCKER. It is enough to bring an electronic key BLOCKER to the reader, installed in the car salon. The keys work without batteries.",
        },
        {
          image: "articleImage",
          article:
            "The car-key. When leaving the car, you can use the car-key or the lock signal, just press the button – the BLOCKER activates automatically.",
        },
        {
          image: "articleImage",
          article:
            "The service button. In case of lost key, it is best to use the service button – after entering your own PIN code, the user without effort can control the system.",
        },
      ],
    },
    inactiveBlocker: {
      image: "inactiveBlocker",
      articles: [
        {
          image: "articleImage",
          article:
            "The system can be unlocked only by contact. The key-tag BLOCKER or the service button are used to unlock the system.",
        },
      ],
    },
  },
};

export const howItWorksText: HowItWorks = {
  ru: {
    title: "Как работает BLOCKER",
    subtitle: "Какие преимущества имеют системы управления BLOCKER:",
    article:
      "BLOCKER представляет собой мощную электронно-механическую блокировку - это высокопрочный стальной цилиндр с телескопически выдвигающимся корпусом и встроенной платой управления. При этом сам узел механической блокировки является энергонезависимым. Питание потребуется только в момент включения или выключения устройства.",
    description: "Данная система позволяет блокировать основные подвижные узлы автомобиля, связанные с его управлением – педали тормоза и сцепления.",
  },
  en: {
    title: "How BLOCKER works",
    subtitle: "What are the advantages of BLOCKER control systems:",
    article:
      "BLOCKER is a powerful electronic-mechanical locking device - it is a high-strength steel cylinder with a telescopically retractable housing and a built-in control board. Moreover, the mechanical locking unit itself is non-volatile. Power is required only when the device is turned on or off.",
    description: "This system allows you to lock the main moving nodes of the car, associated with its control - brake pedal and steering linkage.",
  },
};

export const advantagesText: Advantages = {
  ru: {
    title: "почему blocker не удобен для угонщиков?",
    advantages: [
      {
        image: "advantageImage",
        title: "Это сюрприз",
        article:
          "Блокер незаметен в автомобиле и проявляет себя только в момент угона: при внезапной блокировке системы злодеям не просто понять, почему это произошло и как с этим бороться. ",
      },
      {
        image: "advantageImage",
        title: "Контактная деактивация",
        article:
          "Выключение Блокера происходит только контактным способом при помощи электронного ключа или кнопки VALET, что полностью исключает возможность дистанционного перехвата управляющего сигнала «по воздуху». ",
      },
      {
        image: "advantageImage",
        title: "Прочность и выносливость",
        article:
          "Даже если Блокер будет обнаружен – не существует легких и быстрых способов его взлома или нейтрализации. Система имеет высокопрочный корпус и надежно устанавливается в труднодоступных местах автомобиля.",
      },
      {
        image: "advantageImage",
        title: "Автономность",
        article:
          "Блокер имеет внушительный запас прочности и обеспечивает долгую и безотказную работу системы. Механизм блокиратора надежно защищен от вредных воздействий: пыль, грязь, влага, перепады температур, вибрация.",
      },
    ],
    button: {
      name: "Заказать блокер",
      path: "/#order",
      type: "button",
      color: "secondary-color",
    },
  },
  en: {
    title: "Why does BLOCKER not work for robbers?",
    advantages: [
      {
        image: "advantageImage",
        title: "This is a surprise",
        article:
          "The BLOCKER unit is invisible in the car and only in the moment of ignition: in the case of a blocking failure, the authorities do not know why it happened and how to deal with it. ",
      },
      {
        image: "advantageImage",
        title: "Contact deactivation",
        article:
          "The BLOCKER is deactivated only with an electronic key or a button VALET, which completely excludes the possibility of a remote interception of the signal «by air». ",
      },
      {
        image: "advantageImage",
        title: "Strength and Endurance",
        article:
          "Even if the Blocker is detected, there are no easy and quick ways to hack or neutralize it. The system has a highly durable housing and is securely installed in hard-to-reach areas of the car.",
      },
      {
        image: "advantageImage",
        title: "Autonomy",
        article:
          "The blocker has an impressive safety margin and ensures long and trouble-free operation of the system. The locking mechanism is reliably protected from harmful influences: dust, dirt, moisture, temperature changes, vibration.",
      },
    ],
    button: {
      name: "Order blocker",
      path: "/#order",
      type: "button",
      color: "secondary-color",
    },
  },
};

export const orderText: Order = {
  ru: {
    sideImage: "sideImage",
    title: "Форма заказа",
    article: "После формирования заказа, наш специалист с Вами свяжется.",
    inputs: {
      nameInput: { placeholder: "Name", field: "name", type: "text" },
      surnameInput: { placeholder: "Surname", field: "surname", type: "text" },
      phoneNumberInput: {
        placeholder: "Phone number",
        field: "phoneNumber",
        type: "text",
      },
      emailInput: { placeholder: "Email", field: "email", type: "text" },
    },
    button: {
      name: "Отправить",
      type: "button",
      color: "secondary-color",
    },
  },
  en: {
    sideImage: "sideImage",
    title: "Order form",
    article:
      "After the formation of an order, our specialist will contact You.",
    inputs: {
      nameInput: { placeholder: "Name", field: "name", type: "text" },
      surnameInput: { placeholder: "Surname", field: "surname", type: "text" },
      phoneNumberInput: {
        placeholder: "Phone number",
        field: "phoneNumber",
        type: "text",
      },
      emailInput: { placeholder: "Email", field: "email", type: "text" },
    },
    button: {
      name: "Submit",
      type: "button",
      color: "secondary-color",
    },
  },
};

export const footerText: Footer = {
  ru: {
    title: "BLOCKER",
    sosialsText: "Контакты",
    sosials: [
      {
        icon: FaFacebookSquare,
        path: "https://www.facebook.com/",
      },
      {
        icon: FaWhatsappSquare,
        path: "https://wa.me/",
      },
      {
        icon: SiTelegram,
        path: "https://t.me/",
      },
      {
        icon: FaInstagramSquare,
        path: "https://www.instagram.com/",
      },
    ],
    details: [
      {
        image: "detailsImage",
        detail: "г. Киев, ул. Киквидзе, 43(Правый берег, Печерский р-н)",
      },
      {
        image: "detailsImage",
        detail: "Пн-Пт с 10-00 до 19-00 Cб-Вс - по договоренности",
      },
      {
        image: "detailsImage",
        detail: "(067) 593-11-89 | (066) 442-22-67",
      },
    ],
  },
  en: {
    title: "BLOCKER",
    sosialsText: "Contacts",
    sosials: [
      {
        icon: FaFacebookSquare,
        path: "https://www.facebook.com/",
      },
      {
        icon: FaWhatsappSquare,
        path: "https://wa.me/",
      },
      {
        icon: SiTelegram,
        path: "https://t.me/",
      },
      {
        icon: FaInstagramSquare,
        path: "https://www.instagram.com/",
      },
    ],
    details: [
      {
        image: "detailsImage",
        detail: "Kyiv, Kikvidze St, 43 (Right Bank, Pechersk District)",
      },
      {
        image: "detailsImage",
        detail: "Mon-Fri from 10:00 to 19:00 Sat-Sun - by agreement",
      },
      {
        image: "detailsImage",
        detail: "(067) 593-11-89 | (066) 442-22-67",
      },
    ],
  },
};
