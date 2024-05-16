"use client";

import { useEffect, useState } from "react";
import Map from "../components/Map";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/data?");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        console.log("Data fetched successfully:", jsonData);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>{data ? <Map schools={data.features} /> : <p>Loading...</p>}</div>
  );
}
