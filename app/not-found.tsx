import Link from "next/link";
import { TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center p-6">
            <div className="flex max-w-md flex-col items-center text-center">

                <div className="mb-6 rounded-full bg-muted p-5">
                    <TriangleAlert className="size-10 text-primary" />
                </div>

                <h1 className="text-4xl font-bold">
                    ۴۰۴
                </h1>

                <h2 className="mt-3 text-2xl font-semibold">
                    صفحه موردنظر پیدا نشد
                </h2>

                <Button className="mt-8">
                    <Link href="/">
                        بازگشت به صفحه اصلی
                    </Link>
                </Button>

            </div>
        </main>
    );
}