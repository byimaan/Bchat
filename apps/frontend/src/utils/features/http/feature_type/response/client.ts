// Byimaan

import toast from 'react-hot-toast';

import { toastType, toastPositions } from '../types';

// Client means these feature will used by the  frontend or client side (react);
class Client {
    constructor (private response: Response){
        this.response = response
    };

    /** All the feature write here  */

    async useToast(res:Response= this.response): Promise<null | Function> {
        
        const jsonData = await res.json();
        let {
            userFriendlyData : {toast : {
                position = undefined, 
                type = undefined, 
                message =undefined,
            } = undefined} = undefined
        } = jsonData;

        if (message && typeof message === 'string'){
            let restoast = toast.error;

            if (toastType.includes(type) && type === 'SUCCESS'){
                restoast = toast.success
            };

            position = toastPositions.includes(position) ? position : 'top-center';
            return () => restoast(message, {
                position: position,
            })

        }

        return null
    }
};

export {Client}