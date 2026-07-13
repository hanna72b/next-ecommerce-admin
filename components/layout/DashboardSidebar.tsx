"use client";

import Link from "next/link";
import {
    LogOut,
    LucideIcon,
    Store,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";


type DashboardSidebarProps = {
    menus: {
        title: string;
        url: string;
        icon: LucideIcon;
    }[];
};


export default function DashboardSidebar({ menus }: DashboardSidebarProps) {

    const { state, setOpenMobile } = useSidebar();

    const isCollapsed = state === "collapsed";

    return (
        <Sidebar dir="rtl" side="right" collapsible="icon">
            <SidebarHeader className="py-5">
                <div className={cn(
                    "flex items-center justify-center gap-2 border-b",
                    isCollapsed ? "pb-5" : "pb-4"
                )}>
                    <Store className="size-5.5 shrink-0 pt-1" />

                    {!isCollapsed && (
                        <span className="text-lg font-bold">
                            پنل مدیریت
                        </span>
                    )}
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>


                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menus.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton>
                                        <Link href={item.url} onClick={() => setOpenMobile(false)} className="flex items-center gap-2" >
                                            <item.icon />
                                            <span className="pb-1">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="cursor-pointer">
                            <LogOut />
                            <span className="pb-1">خروج</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}