export interface EnvConfig {
    version: string;
    serverUrl: string;
    hello: string;
    endpoints: endpoints;
}

export interface endpoints {
  strPathGetAllLandlordSubscriptionsByLandlordId: string;
}