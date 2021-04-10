import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="data:image/png;base64,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" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;