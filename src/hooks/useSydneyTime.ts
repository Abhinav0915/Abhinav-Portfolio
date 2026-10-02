import { useEffect, useState } from "react";
import { CONTACT } from "../data/portfolioData";

const format = () =>
  new Intl.DateTimeFormat("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: CONTACT.timezone,
  }).format(new Date());

/** Current time in Sydney as HH:MM, refreshed every 15 seconds. */
export function useSydneyTime() {
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}
