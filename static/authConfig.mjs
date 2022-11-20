const msalConfig = {
  auth: { 
    clientId: "",
    authority: "",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you're having issues on Internet Explorer 11 or Edge
  },
  system: {	
    loggerOptions: {	
        loggerCallback: (level, message, containsPii) => {	
            if (containsPii) {		
                return;		
            }		
            switch (level) {		
                case msal.LogLevel.Error:		
                    console.error(message);		
                    return;		
                case msal.LogLevel.Info:		
                    console.info(message);		
                    return;		
                case msal.LogLevel.Verbose:		
                    console.debug(message);		
                    return;		
                case msal.LogLevel.Warning:		
                    console.warn(message);		
                    return;		
            }	
        }	
    }	
  }
};

  // Add scopes for the ID token to be used at Microsoft identity platform endpoints.
const loginRequest = {
  scopes: ["User.Read"]
};

  // Add scopes for the access token to be used at Microsoft Graph API endpoints.
const tokenRequest = {
  scopes: ["User.Read", "Mail.Read"],
  forceRefresh: false
};