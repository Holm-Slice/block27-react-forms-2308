import React from "react";
import { useState } from "react";

export default function Aunthentication({ token }) {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  async function handleClick() {
    try {
      const rsp = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const info = await rsp.json();
      console.log(info);
      setSuccessMessage(info.message);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2>Authenticate!</h2>
      {error && <p>{error}</p>} {/* use error variable here */}
      <button onClick={handleClick}>Authenticate Token</button>
      {successMessage && <p>{successMessage}</p>}
    </>
  );
}
