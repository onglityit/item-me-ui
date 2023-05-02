export const environment = {
    production: false,
    apiUrl: 'http://localhost:8088',
    serverUrl: 'http://localhost:8088',
    keycloak: {
      // Url of the Identity Provider
      issuer: 'http://localhost:8080/auth/',
      // Realm
      realm: 'demo-realm',
      clientId: 'demo-angular',
    },

    endpoints: {
      strPathGetAllLandlordSubscriptionsByLandlordId: 
          '/api/getAllLandlordSubscriptionsByLandlordId'
      }
  };