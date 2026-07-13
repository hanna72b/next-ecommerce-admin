import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type Props = {
    title: string;
    value: string | number;
    icon: LucideIcon;
};

export default function StatCard({
    title,
    value,
    icon: Icon,
}: Props) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-muted-foreground">
                    {title}
                </CardTitle>

                <Icon color="green" className="h-5 w-5 text-muted-foreground" />
            </CardHeader>

            <CardContent>
                <p className="text-3xl font-bold text-green-800">
                   {typeof value === "number" ? value.toLocaleString() : value}
                </p>
            </CardContent>
        </Card>
    );
}