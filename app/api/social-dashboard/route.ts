import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    totalFollowers: "23,004",
    mainCards: [
      {
        id: 1,
        platform: "facebook",
        username: "@nathanf",
        followers: "1987",
        label: "Followers",
        today: "12",
        isUp: true,
      },
      {
        id: 2,
        platform: "twitter",
        username: "@nathanf",
        followers: "1044",
        label: "Followers",
        today: "99",
        isUp: true,
      },
      {
        id: 3,
        platform: "instagram",
        username: "@realnathanf",
        followers: "11k",
        label: "Followers",
        today: "1099",
        isUp: true,
      },
      {
        id: 4,
        platform: "youtube",
        username: "Nathan F.",
        followers: "8239",
        label: "Subscribers",
        today: "144",
        isUp: false,
      },
    ],
    overviewCards: [
      {
        id: 1,
        title: "Page Views",
        platform: "facebook",
        number: "87",
        percent: "3",
        isUp: true,
      },
      {
        id: 2,
        title: "Likes",
        platform: "facebook",
        number: "52",
        percent: "2",
        isUp: false,
      },
      {
        id: 3,
        title: "Likes",
        platform: "instagram",
        number: "5462",
        percent: "2257",
        isUp: true,
      },
      {
        id: 4,
        title: "Profile Views",
        platform: "instagram",
        number: "52k",
        percent: "1375",
        isUp: true,
      },
      {
        id: 5,
        title: "Retweets",
        platform: "twitter",
        number: "117",
        percent: "303",
        isUp: true,
      },
      {
        id: 6,
        title: "Likes",
        platform: "twitter",
        number: "507",
        percent: "553",
        isUp: true,
      },
      {
        id: 7,
        title: "Likes",
        platform: "youtube",
        number: "107",
        percent: "19",
        isUp: false,
      },
      {
        id: 8,
        title: "Total Views",
        platform: "youtube",
        number: "1407",
        percent: "12",
        isUp: false,
      },
    ],
  };

  return NextResponse.json(data);
}