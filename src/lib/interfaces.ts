export interface Language {
  lang: "en" | "ru" | "sk";
}

export interface HeaderProps extends Language {
  changeLang: (newLang: "en" | "ru" | "sk") => void;
}

export interface AboutProps extends Language {}

export interface BenefitsProps extends Language {}

export interface CatalogProps extends Language {}

export interface ManagementProps extends Language {}

export interface HowItWorksProps extends Language {}

export interface AdvantagesProps extends Language {}

export interface OrderProps extends Language {}

export interface FooterProps extends Language {}

export interface ButtonProps {
  children: string;
}
