import { DashboardData } from "@/types/dashboard";

export async function getDashboardData(): Promise<DashboardData> {
  const res = await fetch("/api/social-dashboard");

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
}