import React, { useEffect, useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };
const Form = ({ addContacts, contacts }) => {
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContacts([...contacts, form]);
    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Your Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder=" Your Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;
