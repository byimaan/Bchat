// Byimaan

import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    className ?: string;
    sizeInTailwind ?: string;
    overwriteDefaultClassName ?: boolean;
    spanChildOf_B_letter ?: React.ReactNode
}

function BChatText({className="", sizeInTailwind="text-[4.5rem]", overwriteDefaultClassName=false, spanChildOf_B_letter}: Props) {

    let h1ClassName = overwriteDefaultClassName ? className : "oswald font-bold cursor-pointer" + className;


    return (
        <h1 id='app-bchat-text' className={cn('oswald', 'text-primary-bchat', sizeInTailwind, h1ClassName)}>
            <span> 
                <span className='relative'>
                    B
                    {spanChildOf_B_letter}
                </span>
            </span>
            <span className='text-[.6em]'>
                CHAT
            </span>
        </h1>
    )
    
}

export default BChatText