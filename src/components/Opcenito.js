import React from 'react';
import {Link} from 'react-router-dom';
import igra from '../igra.jpg';
function Opcenito() {
    return (
      <div>
          <p>Općenito o futsalu</p>
       <table>

    <tr>
 
    <td><Link to='/Opcenito' >Općenito o Futsalu </Link></td>
    
    <td><Link to='/Treca' >Popularnost Futsala</Link></td>

    <td><Link to='/Cetvrta'>Futsal u Hrvatskoj</Link></td>

    <td><Link to='/Peta'>Prodaja ulaznica</Link></td>
    
    </tr>
    </table>
     <a href="https://www.youtube.com/watch?v=V2-UguymCDc">  <img src = {igra}></img> </a>

        <p>Naziv “Futsal” je izveden iz portugalskih riječi futebol de salao odnosno španjolskih fútbol sala de salon, što bi se najispravnije moglo prevesti kao “dvoranski nogomet”.
        <br></br>
        Futsal se igra između dvije momčadi od pet igrača, jedan od kojih je golman, i do sedam zamjena po ekipi. Za razliku od nekih drugih oblika malog nogometa, futsal se igra na tvrdoj podlozi ograničenoj linijama; zidovi ili ploče se ne koriste. Futsal se također igra s manjom loptom koja odskače manje od uobičajene. Pravila stvaraju naglasak na improvizaciji, kreativnosti i tehnici, kao i kontroli lopte i dodavanju u malim prostorima.
        <br></br>
        Futsal je jedina priznata verzija malog nogometa od strane FIFA-e. Sa ovim je futsal stekao važnost, a i uvelike se razmatra i postoji mogućnost da futsal uskoro postane olimpijski sport čime bi  napokon dobiti mjesto koje zaslužuje u svijetu sporta.
        </p>

<Link to="/">Povratak na početnu stranicu</Link>
      </div>
    );
  }
  
  
  export default Opcenito;