export interface HeroContent {
  title: string;
  description: string;
  background: string;
  showButtons?: boolean;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}
