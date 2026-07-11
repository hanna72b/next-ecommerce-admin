"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { phoneSchema, PhoneFormValues } from "../schema";

type Props = {
    onNext: (phone: string) => void;
};

export default function PhoneStep({ onNext }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PhoneFormValues>({
        resolver: zodResolver(phoneSchema),
        defaultValues: {
            phone: "",
        },
    });

    const onSubmit = (values: PhoneFormValues) => {
        setTimeout(() => {
            onNext(values.phone);
        }, 700);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >
            <div className="space-y-2">
                <Input
                className="h-10 pb-1.5"
                    dir="ltr"
                    placeholder="09123456789"
                    {...register("phone")}
                />

                {errors.phone && (
                    <p className="text-destructive text-sm">
                        {errors.phone.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full  h-10 pb-1"
                disabled={isSubmitting}
            >
                {isSubmitting ? "در حال ارسال..." : "ارسال کد تایید"}
            </Button>
        </form>
    );
}