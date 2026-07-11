import {
    Users,
    Package,
    ShoppingCart,
    Wallet,
} from "lucide-react";

import StatCard from "./components/StatCard";
import UsersTable from "./components/UsersTable";
import RecentActivity from "./components/RecentActivity";
import { DashboardStat } from "./components/typings/stat.types";
import { User } from "./components/typings/user.types";
import { Activity } from "./components/typings/activity.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {

    const stats: DashboardStat[] = [
        {
            title: "کاربران",
            value: 120,
            icon: Users,
        },
        {
            title: "محصولات",
            value: 58,
            icon: Package,
        },
        {
            title: "سفارش‌ها",
            value: 34,
            icon: ShoppingCart,
        },
        {
            title: "درآمد",
            value: "۱۲,۵۰۰,۰۰۰ تومان",
            icon: Wallet,
        },
    ];

    const users: User[] = [
        {
            id: 1,
            name: "علی محمدی",
            phone: "09121234567",
            role: "مدیر",
            status: "active",
        },
        {
            id: 2,
            name: "سارا رضایی",
            phone: "09199887766",
            role: "مدیر",
            status: "inActive",
        },
        {
            id: 3,
            name: "محمد کریمی",
            phone: "09351234567",
            role: "مدیر",
            status: "active",
        },
    ];

    const activities: Activity[] = [
        { content: "کاربر جدید ثبت‌نام کرد." },
        { content: "محصول جدید اضافه شد." },
        { content: "سفارش شماره ۲۳ ثبت شد." },
        { content: "اطلاعات محصول ویرایش شد." },
    ];


    return (
        <div className="space-y-8">

            <div>
                <h2 className="text-2xl font-bold">
                    داشبورد
                </h2>

                <p className="text-muted-foreground">
                    نمای کلی اطلاعات فروشگاه
                </p>
            </div>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                    <StatCard
                        key={item.title}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                    />
                ))}
            </section>

            <section className="flex flex-col lg:grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader className="p-0 mb-2 ms-6">
                            <CardTitle >
                                کاربران جدید
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className=" lg:col-span-2">
                                <UsersTable users={users} />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <RecentActivity activities={activities} />
            </section>

        </div>
    );
}