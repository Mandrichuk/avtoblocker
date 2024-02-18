import { type Header, type About } from "../lib/types";

export const header: Header = {
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
      name: "Заказать",
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
      name: "Order",
      path: "/#order",
      type: "button",
      color: "secondary-color",
    },
    bgImage: "/carImage",
  },
};

export const about: About = {
  ru: {
    title: "О нас",
    articles: [
      {
        article:
          "Команда BLOCKER основана группой единомышленников в 2005 году и специализируется на дополнительном оборудовании автомобилей. Мы глубоко убеждены, что автомобиль для современного человека – настоящего ценителя высоких технологий – это синоним комфорта и безопасности, отражающий и подчеркивающий индивидуальность его владельца.",
      },
      {
        article:
          "Имеющийся опыт в области дополнительного оборудования современных автомобилей позволяют нам уверенно приниматься даже за самые нестандартные проекты.",
      },
      {
        article:
          "Мы рады предложить Вашему вниманию неординарную защиту от угона – электронно-механический иммобилайзер БЛОКЕР, который прошел испытания в Центре сертификации средств охранного назначения МВД Украины и официально одобрен к использованию, о чем свидетельствует полученный сертификат качества.",
      },
    ],
    sideImage: "sideImage",
  },
  en: {
    title: "About",
    articles: [
      {
        article:
          "The BLOCKER team was founded by a group of like-minded people in 2005 and specializes in additional car equipment. We are deeply convinced that a car for a modern person - a true connoisseur of high technology - is synonymous with comfort and safety, reflecting and emphasizing the individuality of its owner.",
      },
      {
        article:
          "Having experience in the field of additional equipment of modern cars allows us to truly accept even the most unusual projects.",
      },
      {
        article:
          "We are pleased to offer to your attention an extraordinary protection against theft - the electronic-mechanical immobilizer BLOCKER, which has been tested at the Certification Center for Security Equipment of the Ministry of Internal Affairs of Ukraine and has been officially approved for use, as evidenced by the received quality certificate.",
      },
    ],
    sideImage: "sideImage",
  },
};

export const benefits: Benefits = {
  
};