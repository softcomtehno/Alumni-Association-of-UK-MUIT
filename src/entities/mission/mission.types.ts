export interface MissionItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MissionSectionProps {
  title?: string;
  missions?: MissionItem[];
  className?: string;
}
