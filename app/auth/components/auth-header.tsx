import { ShieldCheck } from "lucide-react";

type Props = {
    title: string;
    description: string;
};

export default function AuthHeader({
    title,
    description,
}: Props) {
    return (
        <div className="space-y-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="text-primary" />
            </div>

            <div>
                <h1 className="text-2xl font-bold">
                    {title}
                </h1>

                <p className="text-muted-foreground mt-2 text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
}