// Byimaan

'use client';

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * JOBS of this component
 *  - take jwt_token holding the value of user info. as Prop then handle 
 */

type Props = {
    className: string;
    children: React.ReactNode;
    access_token: string
};

function ForgotPassword({className, children, access_token}: Props) {

    const handleClick = () => {
        alert(`Will submit your forgot password request ${access_token}.`)
    };

    return (
        <div className={cn(className)} onClick={handleClick}>
            {children}
        </div>
    )
}

export default ForgotPassword