import { useState } from "react";
import styles from "./Forms.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Forms = ({ popup, onSaveData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [nameCheck, setNameCheck] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [phoneCheck, setPhoneCheck] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setNameCheck("enter a valid name");
      return;
    }

    if (email.trim() === "") {
      setEmailCheck("enter a valid email ");
      return;
    }

    if (phone.trim() === "") {
      setPhoneCheck("enter a valid phone number");
      return;
    }

    console.log(name);

    const formData = {
      name: name,
      email: email,
      phone: phone,
    };
    console.log(formData);

    onSaveData(formData);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <>
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
              {name.trim() === "" ? <span>{nameCheck}</span> : ""}
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
              {email.trim() === "" ? <span>{emailCheck}</span> : ""}
            </div>
            <div>
              <PhoneInput
                className={styles.phone}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                placeholder="Phone Number"
              />
            </div>
            {phoneCheck}
          </div>
          <div>
            {name.trim() === "" ||
            email.trim() === "" ||
            phone.trim() === "" ? (
              <button className={styles.btn}>Submit</button>
            ) : (
              <button onClick={popup} className={styles.btn}>
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default Forms;
