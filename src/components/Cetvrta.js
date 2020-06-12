import React from 'react';
import {Link} from 'react-router-dom';
import fuj from '../fuj.jpg';
function Cetvrta() {
    return (
      <div>
          <p>Futsal u Hrvatskoj</p>
       <table>

    <tr>
 
    <td><Link to='/Opcenito' >Općenito o Futsalu </Link></td>
    
    <td><Link to='/Treca' >Popularnost Futsala</Link></td>

    <td><Link to='/Cetvrta'>Futsal u Hrvatskoj</Link></td>

    <td><Link to='/Peta'>Prodaja ulaznica</Link></td>
    
    </tr>
    </table>
     <a href="https://www.youtube.com/watch?v=8XaFONANOaQ">  <img src = {fuj}></img> </a>
     <p> Slika: Rekord gledatelja na utakmici hrvatske malonogometne lige - 6500 gledatelja</p>

        <p>Za razliku od malog nogometa koji je u Hrvatskoj iznimno popularan, futsal je tek u
začetku. Pravila se različito primjenjuju od turnira do turnira, a razne lige i turniri igraju se
sistemom 5 + 1. Trenutno je u Hrvatskom nogometnom savezu registrirano 179 futsal klubova
s ukupno 3 831 registriranih igrača. U odnosu na broj igrača koji se rekreativno bave malim
nogometom i natječu po raznim turnirima, kupovima i ligama, taj je broj zanemariv. Hrvatska
Prva futsal liga broji deset klubova, a postoje i tri druge lige raspoređene po regijama.</p>
        <p>U Hrvatskoj se u veljači 2012. godine održalo UEFA Europsko futsal prvenstvo, na
temelju odluke Izvršnog odbora UEFA-e na zasjedanju u Tel Avivu 2010. godine. Dvanaest
futsal reprezentacija nastupilo je u dva grada domaćina; u Areni Zagreb u Zagrebu i
Spaladium Areni u Splitu. Hrvatska futsal reprezentacija na
tom je natjecanju stigla do polufinala i na kraju zauzela 4. mjesto dok je pobjedila Španjolska. Nadalje, na ovom EURU pali su svi rekordi gledanosti; od najveće posjećenosti jedne futsal utakmice do najveće ukupne posjećenosti. Podsjetimo, rekord gledanosti jedne futsal utakmice zabilježen je na polufinalnom susretu između Hrvatske i Rusije, kada je po službenim podacima u Areni Zagreb bilo 14 300 gledatelja. Iz HTV-a  također sjajan podatak da je utakmice Hrvatske futsal reprezentacije preko TV-ekrana pratilo oko 1,5 milijuna gledatelja.</p>

<Link to="/">Povratak na početnu stranicu</Link>
      </div>
    );
  }
  
  
  export default Cetvrta;