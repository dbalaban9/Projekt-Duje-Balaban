import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Guba from '../guba.png';

export class Sesta extends Component{ 
    state={
        ime:'',
        prezime:'',
        lozinka:'',



      }
    onSubmit= e =>{e.preventDefault(); console.log("Forma je potvrdena",this.state.ime);}
    render()
        {
         return(
        <div>
          <img src={Guba} class="ehe"></img>
          <h1> Upiši podatke kako bi nastavio. {this.state.ime}</h1>
        <form>
          <input placeholder='ime' value={this.state.ime} onChange={e=>this.setState({ime: e.target.value})}/>
          <input placeholder='prezime' value={this.state.prezime} onChange={e=>this.setState({prezime: e.target.value})}/>
          <input placeholder='lozinka' value={this.state.password} onChange={e=>this.setState({lozinka: e.target.value})}/>
        <button> <a href="https://www.youtube.com/watch?v=zf_wIAUaZxI">Potvrdi </a> </button> 
        </form>
        <Link to="/">Povratak na početnu stranicu</Link>
        </div>
      );
         }
}  
  
  
  export default Sesta;