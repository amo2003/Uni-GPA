// Asgardeo config — replace these values with your actual Asgardeo app credentials
export const asgardeoConfig = {
  signInRedirectURL: "http://localhost:3000",
  signOutRedirectURL: "http://localhost:3000",
  clientID: process.env.REACT_APP_CLIENT_ID || "YOUR_CLIENT_ID",
  baseUrl: process.env.REACT_APP_BASE_URL || "https://api.asgardeo.io/t/YOUR_ORG_NAME",
  scope: ["openid", "profile", "email"],
};
