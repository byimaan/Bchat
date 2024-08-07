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

export function LoginForm(){

    return (
        <Card className="ackdrop-blur-lg">
            <CardHeader>
                <BChatText textSizeInTailwind="text-[2.6rem]"/>
                <CardDescription>
                    Please put in your credentials to access your <span className="font-semibold">BCHAT</span> account.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="john@example.com" className="focus-visible:ring-primary-bchat "></Input>
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="f9!InhVA4v" className="focus-visible:ring-primary-bchat" />
                </div>
            </CardContent>

            <CardFooter>
                <Button className="bg-primary-bchat">Submit </Button>
            </CardFooter>
        </Card>
    )
}
