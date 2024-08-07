// BYIMAAN

/**
 * 
 */

"use client";

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

export default function RegisterForm(){

    return (
        <Card>
            <CardHeader>
                <BChatText textSizeInTailwind="text-[2.6rem]"/>
                <CardDescription>
                    Let's get started by creating your <span className="font-semibold">BCHAT</span> account.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" placeholder="john" className="focus-visible:ring-primary-bchat "></Input>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john@example.com" className="focus-visible:ring-primary-bchat "></Input>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="f9!InhVA4v" className="focus-visible:ring-primary-bchat" />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="confirmPassword">Re-enter Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="f9!InsSA4v" className="focus-visible:ring-primary-bchat" />
                </div>
            </CardContent>

            <CardFooter>
                <Button className="bg-primary-bchat">Create Account</Button>
            </CardFooter>
        </Card>
    )
}
