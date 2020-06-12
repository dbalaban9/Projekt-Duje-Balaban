import React from 'react';
import {Link} from 'react-router-dom';
import hh from '../hh.jpg';
import dinamo from '../dinamo.jpg';
import makarska from '../makarska.jpg';
import alumnus from '../alumnus.jpg';
import SPLIT from '../SPLIT.jpg';
import vrgorac from '../vrgorac.jpg';

function Peta() {
    return (
      <div>
          <p>Prodaja ulaznica</p>
       <table>
    <tr>
    <td><Link to='/Opcenito' >Općenito o Futsalu </Link></td>
    <td><Link to='/Treca' >Popularnost Futsala</Link></td>
    <td><Link to='/Cetvrta'>Futsal u Hrvatskoj</Link></td>
    <td><Link to='/Peta'>Prodaja ulaznica</Link></td>
    </tr>
     </table>
     <a href="https://www.youtube.com/watch?v=6fC3qkCZyE8"> <img src ={hh}></img> </a>
     <br></br>
    <img src = {dinamo} className="haha"></img> 
    <Link to='/Sesta'>Kupi</Link>
    <img src = {makarska} className="haha"></img> 
    <Link to='/Sesta'>Kupi</Link>
    <img src = {alumnus} className="haha"></img> 
    <Link to='/Sesta'>Kupi</Link>
    <img src = {SPLIT} className="haha"></img> 
    <Link to='/Sesta'>Kupi</Link>
    <img src = {vrgorac} className="haha"></img> 
    <Link to='/Sesta'>Kupi</Link>
    <br></br>
    <Link to="/">Povratak na početnu stranicu</Link>
      </div>
    );
  }
  
  
  export default Peta;