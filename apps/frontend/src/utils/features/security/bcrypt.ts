// Byimaan

import bcrypt from "bcryptjs";
import crypto from 'crypto'

type ComparePasswordTS = {
    password: string;
    hashedPassword: string
}

class BcryptUtils {

    static async comparePassword({password, hashedPassword}: ComparePasswordTS){
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch
    }

    static generateRandomUUID(){
        return crypto.randomUUID()
    }

    static generateSecretKey(keyLength=32){
        if (keyLength < 16 || keyLength > 64){
            keyLength = 32
        }
        return crypto.randomBytes(keyLength).toString('hex')
    }
};


export {BcryptUtils}