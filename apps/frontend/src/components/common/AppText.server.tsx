// Byimaan

import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    className ?: string;
    sizeInTailwind ?: string;
    overwriteDefaultClassName ?: boolean;
}

function BChatText({className="", sizeInTailwind="text-[4.5rem]", overwriteDefaultClassName=false,}: Props) {

    let h1ClassName = overwriteDefaultClassName ? className : "oswald font-bold text-teal-500 cursor-pointer" + className;


    return (
        <h1 id='app-bchat-text' className={cn('oswald', sizeInTailwind, h1ClassName)}>
            <span>B</span>
            <span className='text-[.6em]'>
                CHAT
            </span>
        </h1>
    )
    
}

export default BChatText