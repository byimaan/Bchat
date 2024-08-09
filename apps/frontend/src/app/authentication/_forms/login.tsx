// BYIMAAN

/**
 * 
 */

"use client";

import { signIn } from "next-auth/react";

import {useForm} from "react-hook-form";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import { FaLock } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import FieldNotify from "./field-notify-box";
import BChatText from "@/components/common/AppText.server";
import { AppLoading } from "@/components/layout/loading-dialog.server";
import toast from "react-hot-toast";


const loginFormSchema = z.object({
    email: z.string().email("* Incorrect email."),
    password: z.string().min(1, "* This field is required.")
});

type loginFormValues= z.infer<typeof loginFormSchema>

export function LoginForm(){

    const form = useForm<loginFormValues>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const handleFormSubmit = async (values: loginFormValues) => {

        await signIn('credentials', {
            ...values,
            redirect: true,
            redirectTo: '/bchat',
        });
    };

    const loading = form.formState.isSubmitting

    return (

        <Card>
            {
                loading && (
                    <AppLoading>
                        <p className="text-sm flex"><FaLock size={20} className="mr-2"></FaLock> BChat offfers secure authentication powered with next-auth</p>
                    </AppLoading>
                )
            }
            <CardHeader>
                <BChatText textSizeInTailwind="text-[2.6rem]"/>
                <CardDescription>
                    Please put in your credentials to access your <span className="font-semibold">BCHAT</span> account.
                </CardDescription>
            </CardHeader>

            <form onSubmit={form.handleSubmit(handleFormSubmit)}>

                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>

                        <FieldNotify 
                            allowToRender={!!form.formState.errors.email}
                            children={form.formState.errors.email?.message}
                        />
                        <Input id="email" type="email" placeholder="john@example.com" className="focus-visible:ring-primary-bchat" {...form.register('email')}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <FieldNotify 
                            allowToRender={!!form.formState.errors.password}
                            children={form.formState.errors.password?.message}
                        />
                        <Input id="password" type="password" placeholder="f9!InhVA4v" className="focus-visible:ring-primary-bchat" {...form.register('password')}/>
                    </div>
                </CardContent>

                <CardFooter>
                    <Button type="submit" className="bg-primary-bchat">Submit </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
