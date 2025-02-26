"use client";
import { SunIcon, MoonIcon } from "@/components/Icons";

export function SwitchMode({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="grid h-full w-10 content-center justify-center rounded-full bg-default-200"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <SunIcon className="place-self-start" />
      ) : (
        <MoonIcon className="place-self-end" />
      )}
    </button>
  );
}
