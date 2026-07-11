import { SidebarTrigger } from "@/components/ui/sidebar";
import ThemeToggle from "../theme/theme-toggle";
import { CircleUserRound } from "lucide-react";

export default function DashboardHeader() {
    return (
        <div className="bg-sidebar">
            <header className="flex h-16 items-center justify-between border-b px-4 mx-2 ">
                <div className="flex items-center gap-3">
                    <SidebarTrigger />

                </div>

                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <div className="flex items-center gap-2">
                        <CircleUserRound size={32} />

                        <div>
                            <p className="text-sm font-medium">
                                هانا
                            </p>

                            <p className="text-xs text-muted-foreground">
                                مدیر سیستم
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}