export type Platform = "facebook" | "twitter" | "instagram" | "youtube";

export interface MainCard {
  id: number;
  platform: Platform;
  username: string;
  followers: string;
  label: string;
  today: string;
  isUp: boolean;
}

export interface OverviewCardType {
  id: number;
  title: string;
  platform: Platform;
  number: string;
  percent: string;
  isUp: boolean;
}

export interface DashboardData {
  totalFollowers: string;
  mainCards: MainCard[];
  overviewCards: OverviewCardType[];
}