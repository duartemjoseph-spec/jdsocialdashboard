type DashboardHeaderProps = {
  totalFollowers: string;
  darkMode: boolean;
  onToggle: () => void;
  theme: {
    mainText: string;
    subText: string;
    toggleBg: string;
  };
};

export default function DashboardHeader({
  totalFollowers,
  darkMode,
  onToggle,
  theme,
}: DashboardHeaderProps) {
  return (
    <header className="border-b border-gray-300 pb-6 md:flex md:items-center md:justify-between md:border-none">
      <div>
        <h1 className={`text-2xl font-bold md:text-3xl ${theme.mainText}`}>
          Social Media Dashboard
        </h1>
        <p className={`mt-1 text-sm font-bold ${theme.subText}`}>
          Total Followers: {totalFollowers}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between md:mt-0 md:gap-4">
        <span className={`text-sm font-bold ${theme.subText}`}>Dark Mode</span>

        <button
          onClick={onToggle}
          className={`relative h-6 w-12 rounded-full p-1 transition ${theme.toggleBg}`}
        >
          <span
            className={`block h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
              darkMode ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </header>
  );
}