// BYIMAAN

/**
 * GOALS - 
 *      Offers login, register and reset_password forms
 */

import { AppLoading } from '@/components/layout/loading-dialog.server';
import React from 'react';
import { Suspense } from 'react';

function AuthenticatePage() {

    return (
        <main className="flex min-h-full flex-col items-center justify-center">
            <Suspense fallback={<AppLoading children={"BChat offers secure authentication using next-auth."}/>}>
                <AppLoading children={"BChat offers secure authentication using next-auth."}/>
            </Suspense>
        </main>    
    )
}

export default AuthenticatePage