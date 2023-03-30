import "./message.css";
import React from "react";

export default function Message(props) {
  return (
    <div className="message">
      {props.isSubscribed ? (
        <span>You have successfully subscribed to this plan ✔</span>
      ) : (
        <span>
          <b>Try it free days</b> then $180/mo. thereafter
        </span>
      )}
    </div>
  );
}
