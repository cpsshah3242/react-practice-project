import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";
import {HiMail} from "react-icons/Hi";
import {FaPhoneAlt} from "react-icons/Fa";

const Button = ({ isOutline , icon ,text , ...rest }) => {

  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
        
        {text}
        {icon}
        </button>
  );
};

export default Button ;