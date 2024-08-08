// Byimaan

import 'next-auth';
import User from "@repo/db";
import { Session } from "next-auth";

declare module 'next-auth' {
    interface Session {
        adapterUser: null | Omit<User, 'password'>
    }
}