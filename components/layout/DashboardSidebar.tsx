"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    LogOut,
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



const items = [
    {
        title: "داشبورد",
        url: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "کاربران",
        url: "/dashboard/users",
        icon: Users,
    },
    {
        title: "محصولات",
        url: "/dashboard/products",
        icon: Package,
    },
    {
        title: "سفارش‌ها",
        url: "/dashboard/orders",
        icon: ShoppingCart,
    },
];

export default function DashboardSidebar() {

    const { state } = useSidebar();

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
                            {items.map((item) => (
                                <SidebarMenuItem key={item.url}>
                                    <SidebarMenuButton>
                                        <Link href={item.url} className="flex items-center gap-2" >
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