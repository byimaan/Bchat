// Byimaan

import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
    children ?: React.ReactNode;
    className ?: string;
    allowToRender ?: boolean;
    overWriteDefaultClassName ?: boolean;
}


function FieldNotify({children, className, allowToRender, overWriteDefaultClassName=false}: Props) {

    if (!allowToRender || !children){
        return <></>
    };

    let defaultClassName = "bg-red-400 text-xs font-semibold p-3 my-3 rounded-lg text-white";

    if (overWriteDefaultClassName){
        defaultClassName = ''
    }

    return (
        <div className={cn(defaultClassName, className)}>
            {children}
        </div>
    )
};


export default FieldNotify