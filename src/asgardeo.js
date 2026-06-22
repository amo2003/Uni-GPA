// Asgardeo config
// signInRedirectURL / signOutRedirectURL automatically use the current domain,
// so this works on both localhost:3000 and your Vercel URL without any changes.
export const asgardeoConfig = {
  signInRedirectURL: window.location.origin,
  signOutRedirectURL: window.location.origin,
  clientID: process.env.REACT_APP_CLIENT_ID || "_zUnjAOGOOfNcN_ZKrU3b9mjaQoa",
  baseUrl: process.env.REACT_APP_BASE_URL || "https://api.asgardeo.io/t/amod",
  scope: ["openid", "profile", "email"],
};
