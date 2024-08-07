// Byimaan


class Duration {

    static async holdOn(ms=1000){
        if (ms < 0){
            return
        };
        await new Promise(
            (res, rej) => {
                setTimeout(
                    () => res("Time is up!"),
                    ms
                )
            }
        )
    }
}


export {Duration}