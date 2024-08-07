// Byimaan

'use client';

import React from "react";

interface RenderProps {
    state: boolean;
    doToggle : () => void
    setState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface BOOLEANProps {
    defaultState ?: boolean;
    render: ( props : RenderProps) => React.ReactNode
}

function BOOLEANHOC({defaultState=false, render}: BOOLEANProps){

    const [state, setState] = React.useState(defaultState);

    const doToggle = () => {
        setState(
            currState => !currState
        )
    }

    return (
        render({
            state,
            setState,
            doToggle
        })
    )
}

export {BOOLEANHOC}