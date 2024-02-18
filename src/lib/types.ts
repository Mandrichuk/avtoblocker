export type NavItem = {
  name: string;
  path: string;
};

export type LanguageOption = {
  en: string;
  ru: string;
};

export type Button = {
  name: string;
  path: string;
  type?: "button" | "submit" | "reset";
  color: "primary-color" | "secondary-color";
};

export type HeaderContent = {
  logo: string;
  phoneNumber: string;
  nav: NavItem[];
  chooseLanguage: LanguageOption;
  title: string;
  subtitle: string;
  article: string;
  button: Button;
  bgImage: string;
};

export type Header = {
  ru: HeaderContent;
  en: HeaderContent;
};

export type Article = {
  article: string;
}

export type AboutContent = {
  title: string;
  articles: Article[];
  sideImage: string;
};

export type About = {
  ru: AboutContent;
  en: AboutContent;
};
