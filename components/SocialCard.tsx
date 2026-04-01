import Image from "next/image";
import { MainCard } from "@/types/dashboard";

type SocialCardProps = {
  card: MainCard;
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

export default function SocialCard({ card, theme }: SocialCardProps) {
  const topBorder =
    card.platform === "facebook"
      ? "bg-[#198ff5]"
      : card.platform === "twitter"
      ? "bg-[#1ca0f2]"
      : card.platform === "instagram"
      ? "bg-gradient-to-r from-[#fdc468] to-[#df4996]"
      : "bg-[#c4032a]";

  return (
    <div
      className={`relative overflow-hidden rounded-md ${theme.cardBg} ${theme.cardHover} transition-colors duration-300`}
    >
      <div className={`absolute top-0 left-0 h-1 w-full ${topBorder}`} />

      <div className="px-8 pt-9 pb-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={iconMap[card.platform]}
            alt={card.platform}
            width={20}
            height={20}
          />
          <span className={`text-xs font-bold md:text-sm ${theme.subText}`}>
            {card.username}
          </span>
        </div>

        <h2 className={`mt-6 text-5xl font-bold md:text-6xl ${theme.mainText}`}>
          {card.followers}
        </h2>

        <p
          className={`mt-1 text-xs uppercase tracking-[0.35em] ${theme.subText}`}
        >
          {card.label}
        </p>

        <div
          className={`mt-6 flex items-center justify-center gap-1 text-xs font-bold ${
            card.isUp ? "text-[#1db489]" : "text-[#dc414c]"
          }`}
        >
          <Image
            src={card.isUp ? "/assets/icon-up.svg" : "/assets/icon-down.svg"}
            alt={card.isUp ? "up arrow" : "down arrow"}
            width={8}
            height={4}
          />
          <span>{card.today} Today</span>
        </div>
      </div>
    </div>
  );
}