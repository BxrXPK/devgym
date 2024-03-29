"use client";
import React, { useEffect } from "react"
import { useAuth } from "@/components/AuthContext";

export default function page() {
  const { login } = useAuth();
 
  useEffect(() => {
    const storedData = localStorage.getItem("userData")
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      login(parsedData);
    }
  }, [])
  
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Thank you for verifying, you are now logged in!</h2>
    </div>
  )
}
