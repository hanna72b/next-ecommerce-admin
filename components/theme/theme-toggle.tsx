"use client";

import { Moon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const isDark = resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="تغییر تم"
            className="rounded-full"
        >
            {isDark ? (
                <SunDim className="size-6" />
            ) : (
                <Moon className="size-6" />
            )}
        </Button>
    );
}