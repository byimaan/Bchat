// Byimaan

import bcrypt from "bcryptjs";

type ComparePasswordTS = {
    password: string;
    hashedPassword: string
}

class BcryptUtils {

    static async comparePassword({password, hashedPassword}: ComparePasswordTS){
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch
    }
};


export {BcryptUtils}