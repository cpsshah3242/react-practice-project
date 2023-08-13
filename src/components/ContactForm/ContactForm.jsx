import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/Fa";
import {HiMail} from "react-icons/Hi";
import { useState } from "react";
const ContactForm = () => {
  const[name, setName] = useState("cps");
  const[email, setEmail] = useState("cpsshah3242@gmail.com");
  const[text, setText] = useState("hello welcome to pd tech");

 
 
  

  const onSubmit =(event)=>{
event.preventDefault();
setName(event.target[0].value);
setEmail(event.target[1].value);
setText(event.target[2].value);

  console.log({name,email,text,}
    );

  };
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button  icon={<MdMessage fontSize="12px" />}  text ="VIA SUPPORT CHAT"  />
         
            <Button 
            
            icon={<FaPhoneAlt fontSize="12px" />} text ="VIA CALL"  />
            </div>
        <Button  isOutline ={true} icon={<HiMail fontSize="12px" />}  text ="VIA EMAIL FORM"  />
        <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            </div>
            <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea name ="text"  rows="12"/>
            </div>
            <div className={styles.form_controls}><Button text ="SUBMIT BUTTON"  /></div>
        <div>{ name + " " + email + " " + text}; </div>
        </form>
        </div>
       
    </section>
  );
};

export default ContactForm