import React from "react";
import axios from "axios";

function App() {
  const backendUrl = "http://localhost:5000";

  const setCookie = async () => {
    try {
      const response = await axios.get(`${backendUrl}/set-cookie`, {
        withCredentials: true,
      });
      alert(response.data.message);
    } catch(err) {
      console.error(err);
    }
  };

  const getCookie = async (statusCode) => {

    try {
      const response = await axios.get(`${backendUrl}/status/${statusCode}`);
      alert(`${response.status}: ${response.data.message}`);

    } catch (err) {
      console.error(err);
    }
  };

  const sendStatusRequest = async (statusCode) => {
    try {
      const response = await axios.get(`${backendUrl}/status/${statusCode}`);
      alert(`${response.status}: ${response.data.message}`);

    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Express.js Cookie & Status Code Demo</h1>
      <button onClick={setCookie}>Set Cookie</button>&nbsp;&nbsp;
      <button onClick={getCookie}>Get Cookie</button>&nbsp;&nbsp;
      <button onClick={() => sendStatusRequest(200)}>Send 200</button>&nbsp;&nbsp;
      <button onClick={() => sendStatusRequest(201)}>Send 201</button>&nbsp;&nbsp;
      <button onClick={() => sendStatusRequest(400)}>Send 400</button>&nbsp;&nbsp;
      <button onClick={() => sendStatusRequest(404)}>Send 404</button>&nbsp;&nbsp;
      <button onClick={() => sendStatusRequest(500)}>Send 500</button>
    </div>
  )

}
export default App;
