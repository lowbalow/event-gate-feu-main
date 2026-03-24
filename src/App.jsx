import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import supabase from "./utils/supabase";
import { useState, useEffect } from "react";
import { SessionContext } from "./Context/SessionContext";
import SignUp from "./pages/SignUp";

function App() {
  //state
  const [session, setSession] = useState(null);
  //useEffect
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("event:", event);
      console.log("session:", session);
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
   <SessionContext.Provider value={session}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
   </SessionContext.Provider>
  );
}

export default App;
