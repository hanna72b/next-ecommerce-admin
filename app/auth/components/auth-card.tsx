import { Card, CardContent } from "@/components/ui/card";

type Props = {
    children: React.ReactNode;
};

export default function AuthCard({ children }: Props) {
    return (
        <Card className="w-full max-w-md rounded-3xl backdrop-blur bg-background/80 shadow-2xl border">
            <CardContent className="p-8">{children}</CardContent>
        </Card>
    );
}