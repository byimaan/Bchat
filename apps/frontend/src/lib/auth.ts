// Byimaan

import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

import {PrismaAdapter} from "@auth/prisma-adapter"
import { User } from "@repo/db";
import { db } from "./db";

import { BcryptUtils } from "@/utils/features/security/bcrypt";


const nextAuthConfiguration = NextAuth({
    providers: [
        Github({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {
                    type: "email",
                },
                password: {
                    type: "password"
                }
            },

            async authorize(credentials){
                const {email, password} = credentials;
                /**
                 * Login verfication logic
                 */

                if (
                    typeof email === 'string'
                    && typeof password === 'string'
                    && 
                    /** Check if not empty string */
                    email && password
                ){
                    const user = await db.user.findUnique({
                        where: { email }
                    });
                    
                    // if -> this
                    if (user && user?.password){
                        const passwordDoesMatch = await BcryptUtils.comparePassword({
                            password,
                            hashedPassword: user.password
                        });

                        // if -> if -> this
                        if (passwordDoesMatch){
                            const {password, ...adapterUser} = user;

                            // returning a user info without password
                            return adapterUser
                        }
                    }
                }

                return null
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: "/authentication?form=login",
        error: "/authentication?form=login"
    },
    secret: process.env.AUTH_SECRET!,
    adapter: PrismaAdapter(db),

    callbacks: {
        // Imp! It should only return <token>
        async jwt({token, user}){
            if (user){
                // If user authenticate using 'Credentials' then adapterUser holds the info of user that is stored in db
                // This assignment will help us avoid the unneccessary calls to DB.
                token.adapterUser = user
            }
            return token 
        },

        // Imp! it should only return <session>
        async session({token, session}){
            if (token?.adapterUser){
                session.adapterUser = token.adapterUser as Omit<User, 'password'>;
            }
            return session
        }
    },
    debug: process.env.NODE_ENV === "development",
});

export const {handlers, signIn, signOut, auth} = nextAuthConfiguration;