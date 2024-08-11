// Byimaan

import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.GENERAL_SECRET_KEY!;

class JWT {

    static generateJWTToken({payload, expiresIn}: {payload : jwt.JwtPayload, expiresIn : string}){
        const options = {
            expiresIn
        }
        return jwt.sign(payload, SECRET_KEY, options)
    };

    static verifyJWTToken(token: string){
        /**
         * OUTPUT sample
            *   {
                    data: {
                        name: 'test-jwt-token',
                        user: { email: 'example.com', password: '****' }
                    },
                    iat: 1723402198,
                    exp: 1723403998
                }
        */


        try {
            return jwt.verify(token, SECRET_KEY);
        } catch {
            return null
        }
    }
};

export {JWT}