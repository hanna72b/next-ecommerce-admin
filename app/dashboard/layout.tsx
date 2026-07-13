"use client"

import DashboardHeader from "@/components/layout/DashboardHeader";
import DashboardSidebar from "@/components/layout/DashboardSidebar";

import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";

import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    Store,
    Settings,
    BellRing,
    TicketPercent,
} from "lucide-react";


const menus = [
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
        title: "فروشگاه‌ها",
        url: "/dashboard/stores",
        icon: Store,
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
    {
        title: "تخفیف‌ها",
        url: "/dashboard/discounts",
        icon: TicketPercent,
    },
    {
        title: "اعلان‌ها",
        url: "/dashboard/notifications",
        icon: BellRing,
    },
    {
        title: "تنظیمات",
        url: "/dashboard/settings",
        icon: Settings,
    },
];

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider defaultOpen>
            <DashboardSidebar menus={menus} />

            <SidebarInset >
                <DashboardHeader />

                <main className="flex-1 p-6">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}