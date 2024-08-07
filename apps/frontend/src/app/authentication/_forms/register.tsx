// BYIMAAN

/**
 * 
 */

"use client";

import z from "zod";
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import BChatText from "@/components/common/AppText.server";
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

const signupFormSchema = z.object({
    username: z.string().min(4, "* A valid username should be of atleast 4 letters"),
    email: z.string().email("* Incorrect email"),
    password: z.string().min(1, "* This field is required").min(6, "* Password is too short").regex(/^(?!\s*$).+$/, {
        message: "* Field cannot be empty or contain only spaces",
      }),
    rePassword : z.string().regex(/^(?!\s*$).+$/, {
        message: "* Field cannot be empty or contain only spaces",
      }),
});

type signupFormValues = z.infer<typeof signupFormSchema>;

export default function RegisterForm(){

    const form = useForm<signupFormValues>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            rePassword: ''
        }
    })

    const handleFormSubmit = async({username, email, password, rePassword}: signupFormValues) => {
        
        if (password !== rePassword){
            form.setError("rePassword", {
                type: "manual",
                message: "* Password do not match"
            });
            return
        }
        alert('Will submit your form')
    };

    return (
        <Card className="my-2">
            <CardHeader>
                <BChatText textSizeInTailwind="text-[2.6rem]"/>
                <CardDescription>
                    Let's get started by creating your <span className="font-semibold">BCHAT</span> account.
                </CardDescription>
            </CardHeader>

            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <FieldNotify 
                            allowToRender={!!form.formState.errors.username}
                            children={form.formState.errors.username?.message}
                        />
                        <Input id="username" placeholder="john" className="focus-visible:ring-primary-bchat" {...form.register('username')}></Input>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <FieldNotify 
                            allowToRender={!!form.formState.errors.email}
                            children={form.formState.errors.email?.message}
                        />
                        <Input id="email" placeholder="john@example.com" className="focus-visible:ring-primary-bchat" {...form.register('email')}/>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <FieldNotify 
                            allowToRender={!!form.formState.errors.password}
                            children={form.formState.errors.password?.message}
                        />
                        <Input id="password" type="password" placeholder="f9!InhVA4v" className="focus-visible:ring-primary-bchat" {...form.register("password")}/>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="confirmPassword">Re-enter Password</Label>
                        <FieldNotify 
                            allowToRender={!!form.formState.errors.rePassword}
                            children={form.formState.errors.rePassword?.message}
                        />
                        <Input id="confirmPassword" type="password" placeholder="f9!InsSA4v" className="focus-visible:ring-primary-bchat" {...form.register('rePassword')}/>
                    </div>
                    
                </CardContent>

                <CardFooter>
                    <Button type="submit" className="bg-primary-bchat">Create Account</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
