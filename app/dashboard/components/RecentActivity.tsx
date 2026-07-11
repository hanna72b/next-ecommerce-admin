import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "./typings/activity.types";

interface ActivitiesProps {
    activities: Activity[]
}

export default function RecentActivity({ activities }: ActivitiesProps) {
    return (
        <Card>
            <CardHeader className="mb-2">
                <CardTitle>
                    فعالیت‌های اخیر
                </CardTitle>
            </CardHeader>

            <CardContent>
                <ul className="space-y-3">
                    {activities.map((item) => (
                        <li
                            key={item.content}
                            className="border-b pb-2 last:border-0"
                        >
                            {item.content}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}