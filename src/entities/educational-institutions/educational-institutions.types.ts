export interface Institution {
  id: string;
  name: string;
  icon: string;
  colorClass: string;
  socialLinks: {
    instagram?: string;
    whatsApp?: string;
  };
}
