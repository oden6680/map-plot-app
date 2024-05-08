import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const apiKey = process.env.API_KEY;
  const url = `https://www.reinfolib.mlit.go.jp/ex-api/external/XKT006?response_format=geojson&z=13&x=7272&y=3225`;

  try {
    const response = await fetch(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey as string,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching data." },
      { status: 500 }
    );
  }
}
