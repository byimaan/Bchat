// Byimaan

import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
    sizeInTW ?: string;
    borderWidthInTW ?: string;
    leftBorderColorInTW ?: string;
}

function Loading({sizeInTW="size-8", borderWidthInTW="border-8", leftBorderColorInTW="!border-l-gray-400"}: Props) {
  return (
    <div className={cn('loading-animation', sizeInTW, borderWidthInTW, leftBorderColorInTW)}>
    </div>
  )
}

export default Loading