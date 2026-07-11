import { z } from "zod";

export const phoneSchema = z.object({
    phone: z
        .string()
        .trim()
        .regex(/^09\d{9}$/, "یک شماره موبایل معتبر وارد کنید."),
});

export const otpSchema = z.object({
    otp: z
        .string()
        .regex(/^\d{5}$/, "کد تایید باید ۵ رقم باشد."),
});

export type PhoneFormValues = z.infer<typeof phoneSchema>;
export type OtpFormValues = z.infer<typeof otpSchema>;