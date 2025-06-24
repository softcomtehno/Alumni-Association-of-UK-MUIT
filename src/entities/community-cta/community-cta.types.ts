export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CommunityCTAProps {
  benefits: Benefit[];
}
