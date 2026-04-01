import Image from "next/image";
import { OverviewCardType } from "@/types/dashboard";

type OverviewCardProps = {
  card: OverviewCardType;
  theme: {
    cardBg: string;
    cardHover: string;
    mainText: string;
    subText: string;
  };
};

const iconMap = {
  facebook: "/assets/icon-facebook.svg",
  twitter: "/assets/icon-twitter.svg",
  instagram: "/assets/icon-instagram.svg",
  youtube: "/assets/icon-youtube.svg",
};

export default function OverviewCard({ card, theme }: OverviewCardProps) {
  return (
    <div
      className={`rounded-md px-6 py-6 ${theme.cardBg} ${theme.cardHover} transition-colors duration-300`}
    >
      <div className="flex items-center justify-between">
        <p className={`text-sm font-bold ${theme.subText}`}>{card.title}</p>
        <Image
          src={iconMap[card.platform]}
          alt={card.platform}
          width={20}
          height={20}
        />
      </div>

      <div className="mt-7 flex items-end justify-between">
        <h3 className={`text-3xl font-bold md:text-4xl ${theme.mainText}`}>
          {card.number}
        </h3>

        <div
          className={`flex items-center gap-1 text-xs font-bold ${
            card.isUp ? "text-[#1db489]" : "text-[#dc414c]"
          }`}
        >
          <Image
            src={card.isUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg"}
            alt={card.isUp ? "up arrow" : "down arrow"}
            width={8}
            height={4}
          />
          <span>{card.percent}%</span>
        </div>
      </div>
    </div>
  );
}