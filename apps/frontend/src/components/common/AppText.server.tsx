// Byimaan

import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    className ?: string;
    sizeInTailwind ?: string;
    overwriteDefaultClassName ?: boolean;
}

function BChatText({className="", sizeInTailwind="text-[4.5rem]", overwriteDefaultClassName=false,}: Props) {

    let h1ClassName = overwriteDefaultClassName ? className : "oswald font-bold cursor-pointer" + className;


    return (
        <h1 id='app-bchat-text' className={cn('oswald', 'text-primary-bchat', sizeInTailwind, h1ClassName)}>
            <span> 
                <span className='relative'>
                    B
                    <span className='absolute left-full top-6 text-[0.3em] leading-[2] tracking-wider'>YIਮਾਨ</span>
                </span>
            </span>
            <span className='text-[.5em]'>
                CHAT
            </span>
        </h1>
    )
    
}

export default BChatText