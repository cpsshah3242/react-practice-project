import { useState } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ContactHearder from './components/ContactHeader/ContactHearder';
import ContactForm from './components/ContactForm/ContactForm';
import Button from './components/Button/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navigation/>
   <main className='main_container'>
   <ContactHearder/>
   <ContactForm/>
   </main>
   
    </div>
 
  );
};

export default App;
