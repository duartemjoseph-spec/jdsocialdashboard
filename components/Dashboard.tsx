"use client";

import { useEffect, useState } from "react";
import { getDashboardData } from "@/services/DataService";
import { DashboardData } from "@/types/dashboard";
import DashboardHeader from "./DashboardHeader";
import SocialCard from "./SocialCard";
import OverviewCard from "./OverviewCard";

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dashboard-theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }

    const fetchData = async () => {
      try {
        const dashboardData = await getDashboardData();
        setData(dashboardData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("dashboard-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const theme = darkMode
    ? {
        pageBg: "bg-[#1d2029]",
        topBg: "bg-[#20222f]",
        cardBg: "bg-[#252b43]",
        cardHover: "hover:bg-[#333a56]",
        mainText: "text-white",
        subText: "text-[#8b97c6]",
        headingText: "text-white",
        toggleBg: "bg-gradient-to-r from-[#378fe6] to-[#3eda82]",
      }
    : {
        pageBg: "bg-[#ffffff]",
        topBg: "bg-[#f5f7ff]",
        cardBg: "bg-[#f0f2fa]",
        cardHover: "hover:bg-[#e1e3f0]",
        mainText: "text-[#1d2029]",
        subText: "text-[#63687e]",
        headingText: "text-[#63687e]",
        toggleBg: "bg-[#aeb3cb]",
      };

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main
      className={`${theme.pageBg} min-h-screen transition-colors duration-300`}
    >
      <div
        className={`absolute top-0 left-0 h-[235px] w-full rounded-b-3xl ${theme.topBg}`}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 md:py-10">
        <DashboardHeader
          totalFollowers={data.totalFollowers}
          darkMode={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
          theme={theme}
        />

        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {data.mainCards.map((card) => (
            <SocialCard key={card.id} card={card} theme={theme} />
          ))}
        </section>

        <h2 className={`mt-12 text-2xl font-bold ${theme.headingText}`}>
          Overview - Today
        </h2>

        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.overviewCards.map((card) => (
            <OverviewCard key={card.id} card={card} theme={theme} />
          ))}
        </section>
      </div>
    </main>
  );
}