"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";

import { otpSchema, OtpFormValues } from "../schema";
import useOtp from "./hooks/use-otp";
import { FAKE_OTP } from "../constants";

type Props = {
    phone: string;
    onBack: () => void;
};

export default function OtpStep({ phone, onBack }: Props) {
    const router = useRouter();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<OtpFormValues>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: "",
        },
    });

    const { timeLeft, canResend, resetTimer } = useOtp();

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const onSubmit = (values: OtpFormValues) => {
        if (values.otp !== FAKE_OTP) {
            toast.error("کد تایید اشتباه است.");
            return;
        }

        toast.success("ورود با موفقیت انجام شد.");

        setTimeout(() => {
            router.push("/dashboard");
        }, 800);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div className="text-center space-y-2">
                <p className="text-muted-foreground text-sm">
                    کد تایید برای شماره زیر ارسال شد(12345)
                </p>

                <p
                    dir="ltr"
                    className="font-bold tracking-wider"
                >
                    {phone}
                </p>
            </div>

            <div className="flex flex-col items-center gap-3">
                <Controller
                    name="otp"
                    control={control}
                    render={({ field }) => (
                        <InputOTP
                            maxLength={5}
                            value={field.value}
                            onChange={field.onChange}
                        >
                            <InputOTPGroup dir="ltr">
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                            </InputOTPGroup>
                        </InputOTP>
                    )}
                />

                {errors.otp && (
                    <p className="text-destructive text-sm">
                        {errors.otp.message}
                    </p>
                )}
            </div>

            <div className="text-center">
                {canResend ? (
                    <button
                        type="button"
                        onClick={() => {
                            toast.success("کد مجدداً ارسال شد.");
                            resetTimer();
                        }}
                        className="text-primary text-sm font-medium hover:underline"
                    >
                        ارسال مجدد کد
                    </button>
                ) : (
                    <span className="text-muted-foreground text-sm">
                        ارسال مجدد تا {minutes}:{seconds.toString().padStart(2, "0")}
                    </span>
                )}
            </div>

            <Button
                type="submit"
                className="w-full h-10 pb-1"
                disabled={isSubmitting}
            >
                {isSubmitting ? "در حال بررسی..." : "ورود"}
            </Button>

            <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={onBack}
            >
                تغییر شماره موبایل
            </Button>
        </form>
    );
}