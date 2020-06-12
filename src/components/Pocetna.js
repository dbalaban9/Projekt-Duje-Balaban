import React from 'react';
import {Link} from 'react-router-dom';
import Futsal from '../Futsal.jpg';

function Pocetna() {
    return (
      <div>

      <table>

      <tr>
       
          <td><Link to='/Opcenito' >Općenito o Futsalu </Link></td>
          
          <td><Link to='/Treca' >Popularnost Futsala</Link></td>

          <td><Link to='/Cetvrta'>Futsal u Hrvatskoj</Link></td>

          <td><Link to='/Peta'>Prodaja ulaznica</Link></td>
          
          </tr>
          </table>
          <a href="https://en.wikipedia.org/wiki/Futsal"><img src = {Futsal}></img></a><br></br>
      </div>
    );
  }
  
  
  export default Pocetna;
