import { Store, } from "lucide-react";
import LoginForm from "../components/login-form";
import Link from "next/link";
import ThemeToggle from "@/components/theme/theme-toggle";

export default function LoginPage() {
    return (
        <div className="flex flex-col h-screen bg-muted/20 p-4">
            <div className="w-full flex items-center justify-between ">

                {/* Logo */}
                <Link href={'/'} className="flex items-center gap-3">
                    <Store />
                </Link>

                {/* light and dark */}
                <ThemeToggle />
            </div>

            {/* Form  */}
            <main className="flex h-screen items-center justify-center  ">
                <LoginForm />
            </main>
        </div>
    );
}