import "./App.css";
import Form from "./components/form/Form.js";
import Message from "./components/message/Message.js";
import "./style.css";
import React, { useState } from "react";

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = (isSubscribed) => {
    setIsSubscribed(isSubscribed);
  };
  
  return (
    <>
      <Message isSubscribed={isSubscribed} />
      <Form onSubscribe={handleSubscription} />
    </>
  );
}

export default App;
