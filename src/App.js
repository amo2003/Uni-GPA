import React from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import GPACalculator from "./components/GPACalculator";
import "./App.css";

function App() {
  const { state, signIn, signOut } = useAuthContext();

  if (state.isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  if (!state.isAuthenticated) {
    return (
      <div className="login-screen">
        <div className="login-card">
          <h1>GPA Calculator</h1>
          <p>Sign in with your Asgardeo account to continue</p>
          <button className="btn-primary" onClick={() => signIn()}>
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>GPA Calculator</h1>
        <div className="user-info">
          <span>Welcome, {state.username || "User"}</span>
          <button className="btn-secondary" onClick={() => signOut()}>
            Sign Out
          </button>
        </div>
      </header>
      <main>
        <GPACalculator />
      </main>
    </div>
  );
}

export default App;
