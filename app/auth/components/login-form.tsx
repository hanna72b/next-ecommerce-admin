"use client";

import { useState } from "react";

import AuthCard from "./auth-card";
import AuthHeader from "./auth-header";
import PhoneStep from "./phone-step";
import OtpStep from "./otp-step";

export default function LoginForm() {
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState("");

    const handleBack = () => {
        setStep("phone");
    };

    return (
        <AuthCard>
            <div className="space-y-8">
                <AuthHeader
                    title={
                        step === "phone"
                            ? "ورود به پنل مدیریت فروشگاه"
                            : "تایید شماره موبایل"
                    }
                    description={
                        step === "phone"
                            ? "شماره موبایل خود را وارد کنید."
                            : "کد ارسال شده را وارد کنید."
                    }
                />

                {step === "phone" ? (
                    <PhoneStep
                        onNext={(phone) => {
                            setPhone(phone);
                            setStep("otp");
                        }}
                    />
                ) : (
                    <OtpStep phone={phone} onBack={handleBack} />
                )}
            </div>
        </AuthCard>
    );
}