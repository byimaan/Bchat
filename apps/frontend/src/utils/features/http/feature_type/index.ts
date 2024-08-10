// Byimaan

import {Server as ReqServer} from "./request/server";
import { Client as ReqClient } from "./request/client";

import { Server as ResServer } from "./response/server";
import {Client as ResClient} from "./response/client"

class Req {
    private serverSideFeatures : ReqServer;
    private clientSideFeatures : ReqClient;
    constructor (private request: Request){
        this.request = request;
        this.serverSideFeatures = new ReqServer(request);
        this.clientSideFeatures = new ReqClient(request)
    }
}

class Res {
    private serverSideFeatures : ResServer;
    private clientSideFeatures : ResClient;
    constructor (private response: Response){
        this.response = response;
        this.serverSideFeatures = new ResServer(response);
        this.clientSideFeatures = new ResClient(response);
    }
}

export {
    Req, Res
};