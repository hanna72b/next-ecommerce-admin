import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { User } from "./typings/user.types";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";


interface UsersProps {
    users: User[];
}

export default function UsersTable({ users }: UsersProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ردیف</TableHead>
                    <TableHead>نام</TableHead>
                    <TableHead>شماره موبایل</TableHead>
                    <TableHead>نقش</TableHead>
                    <TableHead>وضعیت</TableHead>
                    <TableHead className="text-end">
                        عملیات
                    </TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                            <span
                                className={`rounded-full px-3 py-1 text-xs ${user.status === "active"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                                    }`}
                            >
                                {user.status === 'active' ? 'فعال' : 'غیرفعال'}
                            </span>
                        </TableCell>
                        <TableCell className="text-end space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                            >
                                <Pencil />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                            >
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}