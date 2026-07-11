import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import UsersTable from "../components/UsersTable";
import UsersFilter from "./components/UsersFilter";

const users = [
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
        phone: "09198765432",
        role: "کاربر",
        status: "inActive",
    },
    {
        id: 3,
        name: "محمد احمدی",
        phone: "09351234567",
        role: "کاربر",
        status: "active",
    },
    {
        id: 4,
        name: "نگار کریمی",
        phone: "09115556677",
        role: "ادمین",
        status: "active",
    },
];

export default function UsersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">
                        کاربران
                    </h1>

                    <p className="text-muted-foreground text-sm mt-1">
                        مدیریت کاربران سیستم
                    </p>
                </div>

                <Button>
                    <Plus className="size-4" />
                    افزودن کاربر
                </Button>
            </div>

            <UsersFilter />

            <Card>
                <CardContent>
                    <div className="lg:col-span-2">
                        <UsersTable users={users} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}