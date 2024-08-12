// Byimaan

import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

import {PrismaAdapter} from "@auth/prisma-adapter"
import { User } from "@repo/db";
import { db } from "./db";

import { JWT } from "@/utils/features/security/jwt";
import { JwtPayload } from "jsonwebtoken";

const WHERE_IAM = "src/lib/auth";

const nextAuthConfiguration = NextAuth({
    providers: [
        Github({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            name: 'Credentials',
            credentials: {
                'access_token': {
                    type: 'text'
                }
            },

            async authorize(credentials){
                const {access_token} = credentials;
                /**
                 * Login verfication logic
                 */
                
                if (access_token && typeof access_token === 'string'){
                    const payload = JWT.verifyJWTToken(access_token) as JwtPayload | null ;
                    if (payload
                         && Array.isArray(payload?.recipient)
                          && payload?.recipient?.includes(WHERE_IAM)
                           && payload?.user){
                            return payload.user as Omit<User, 'password'>
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
        signIn: "/authentication",
        error: "/authentication"
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