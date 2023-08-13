import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div >
        <img className="logo" src="/images/logo.jpeg" alt="Techby PD" />
      </div>

      <ul>
       <a href="#">Home</a>
       <a href="#">About</a>
         <a
          href="#">
            Contact Us</a>
      </ul>
    </nav>
  );
};

export default Navigation;
