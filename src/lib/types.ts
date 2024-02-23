type Sosial = {
  icon: React.ElementType;
  path: string;
};

export type Sosials = Sosial[];

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
  path?: string;
  type?: "button" | "submit" | "reset";
  color?: "primary-color" | "secondary-color";
};

type HeaderContent = {
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
  sk?: HeaderContent;
};

type AboutContent = {
  title: string;
  firstArticle: string;
  accentArticle: string;
  secondArticle: string;
  sideImage: string;
};

export type About = {
  ru: AboutContent;
  en: AboutContent;
  sk?: HeaderContent;
};

type Benefit = {
  title: string;
  article: string;
  icon: React.ElementType;
};

type BenefitsContent = {
  title: string;
  benefits: Benefit[];
  roadImage: string;
  carImage: string;
};

export type Benefits = {
  ru: BenefitsContent;
  en: BenefitsContent;
  sk?: HeaderContent;
};

export type CatalogContent = {
  title: string;
  name: string;
  subtitle: string;
  article: string;
  kit: string[];
  bgImage: string;
  button: Button;
};

type Gallery = {
  image: string;
  id: number;
};

export type Catalog = {
  imagesGallery: Gallery[];
  ru: CatalogContent;
  en: CatalogContent;
  sk?: CatalogContent;
};

type BlockerArticle = {
  image?: string;
  article: string;
};

export type Blocker = {
  image: string;
  title?: string;
  articles: BlockerArticle[];
};

type ManagmentContent = {
  title: string;
  subtitle: string;
  activeBlocker: Blocker;
  inactiveBlocker: Blocker;
};

export type Managment = {
  ru: ManagmentContent;
  en: ManagmentContent;
  sk?: HeaderContent;
};

type HowItWorksContent = {
  title: string;
  subtitle: string;
  article: string;
  description: string;
};

export type HowItWorks = {
  ru: HowItWorksContent;
  en: HowItWorksContent;
  sk?: HeaderContent;
};

type Advantage = {
  title: string;
  article: string;
  image: string;
};

type AdvantagesContent = {
  title: string;
  advantages: Advantage[];
  button: Button;
};

export type Advantages = {
  ru: AdvantagesContent;
  en: AdvantagesContent;
  sk?: HeaderContent;
};

export type Input = {
  placeholder: string;
  field: string;
  type: string;
};

type NamedInputs = {
  nameInput: Input;
  surnameInput: Input;
  phoneNumberInput: Input;
  emailInput: Input;
};

type OrderContent = {
  sideImage: string;
  title: string;
  article: string;
  inputs: NamedInputs;
  button: Button;
};

export type Order = {
  ru: OrderContent;
  en: OrderContent;
  sk?: HeaderContent;
};

type SocialLink = {
  icon: React.ElementType;
  path: string;
};

type Detail = {
  image: string;
  firstDetailLine: string;
  secondDetailLine: string;
};

type FooterContent = {
  title: string;
  sosialsText: string;
  sosials: SocialLink[];
  details: Detail[];
};

export type Footer = {
  ru: FooterContent;
  en: FooterContent;
  sk?: HeaderContent;
};

type LanguageItem = {
  name: string;
};

type NavigationItem = {
  ru: LanguageItem;
  en: LanguageItem;
  sk?: LanguageItem;
  id: string;
  include: boolean;
};

export type Navigations = {
  [key: string]: NavigationItem;
};

export type OrderInputs = {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
};

export type inputAlertContent = {
  alert: string;
};

export type inputAlert = {
  en: inputAlertContent;
  ru: inputAlertContent;
  sk?: inputAlertContent;
};
