import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: "123",
    },
    { fullname: "Ayşe", phone_number: "134568" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <>
      <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}></List>{" "}
        <Form addContacts={setContacts} contacts={contacts} />
      </div>
    </>
  );
};

export default Contacts;
