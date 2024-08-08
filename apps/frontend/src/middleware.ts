// Byimaan

import { auth } from "./lib/auth";
import { NextResponse } from "next/server";

export default auth(
    async function middleware(request, response){

        /**
         * All Middleware logic
         */
        
        return NextResponse.next();
    }
)