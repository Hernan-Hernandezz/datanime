"use client";
import { Switch } from "@nextui-org/react";
import { SunIcon, MoonIcon } from "@/components/Icons";

export function SwitchMode({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Switch
      size="lg"
      color="secondary"
      isSelected={darkMode}
      onValueChange={setDarkMode}
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
