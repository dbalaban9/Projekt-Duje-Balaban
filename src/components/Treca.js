import React from 'react';
import {Link} from 'react-router-dom';
import publika from '../publika.jpg';
function Treca() {
    return (
      <div>
          <p>Popularnost futsala</p>
          <table>

        <tr>
 
    <td><Link to='/Opcenito' >Općenito o Futsalu </Link></td>
    
    <td><Link to='/Treca' >Popularnost Futsala</Link></td>

    <td><Link to='/Cetvrta'>Futsal u Hrvatskoj</Link></td>

    <td><Link to='/Peta'>Prodaja ulaznica</Link></td>
    
    </tr>
    </table>
       
     <a href="http://www.crofutsal.com/futsal/euro-2012-pogled-unatrag/">  <img src = {publika}></img> </a>

        <p>U svijetu postoji oko 30 milijuna ljudi uključenih u futsal u najmanje 100 zemalja širom svijeta. U Italiji se, na primjer, oko 4 milijuna ljudi bavi futsalom paralelno s milijunom koji igra nogomet.</p>
        <p>Futsal je unazad nekoliko godina najbrže rastući sport na svijetu...Ogroman je broj nogometnih zvijezda koji spominju FUTSAL terene kao mjesta gdje su izvještili svoje driblinge,brzinu razmišljanja i reakcije.Spomenimo samo one najzvučnije: Pele,Maradona,Ronaldo,Ronaldinho,Deco,Zico,Socrates,C.Ronaldo,Robinho,Neymar,Messi,Kaka,Denilson...Futsal je trenutno u Europi drugi najplaćeniji dvoranski sport odmah iza košarke...</p>

<Link to="/">Povratak na početnu stranicu</Link>
      </div>
    );
  }
  
  
  export default Treca;