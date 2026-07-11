import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function UsersFilter() {
    return (
        <div className="mt-10 mb-8  flex flex-col gap-4 lg:flex-row lg:items-end">

            <div className=" flex flex-col gap-2 lg:w-80">
                <Label className="text-xs text-muted-foreground">
                    جستجو
                </Label>

                <Input placeholder="نام یا شماره موبایل..." />
            </div>

            <div className="custom-style-select flex flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                    وضعیت
                </Label>

                <Select defaultValue="all">
                    <SelectTrigger className="w-44">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            همه وضعیت‌ها
                        </SelectItem>

                        <SelectItem value="active">
                            فعال
                        </SelectItem>

                        <SelectItem value="inactive">
                            غیرفعال
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="custom-style-select flex flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                    نقش
                </Label>

                <Select defaultValue="all">
                    <SelectTrigger className="w-44">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="all">
                            همه نقش‌ها
                        </SelectItem>

                        <SelectItem value="admin">
                            مدیر
                        </SelectItem>

                        <SelectItem value="user">
                            کاربر
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="custom-style-select flex flex-col gap-2">
                <Label className="text-xs text-muted-foreground">
                    مرتب‌سازی
                </Label>

                <Select defaultValue="newest">
                    <SelectTrigger className="w-44">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="newest">
                            جدیدترین
                        </SelectItem>

                        <SelectItem value="oldest">
                            قدیمی‌ترین
                        </SelectItem>

                        <SelectItem value="name">
                            بر اساس نام
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}