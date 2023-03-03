import { useState } from "react";
import styles from "./Forms.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Forms = ({ event }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(event, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log("error in the submitting");
      }
    } catch (err) {
      console.log(err);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
          </div>
          <div>
            <PhoneInput
              className={styles.phone}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div>
          <button className={styles.btn}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Forms;
