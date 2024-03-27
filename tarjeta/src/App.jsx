import React, {useState} from 'react';
import './styles.css'

export function App() {

    const contet = [
        {id: 1, name: 'Donovan', lastName: 'Valverde', image:"https://www.gearsofwar.com/static/gearsofwar-full-white-9a4de8a50204d48e12f077fc7f33c956.svg"},
        {id: 2,name: 'Jorge', lastName: 'Flores', image: "https://www.gearsofwar.com/static/gearsofwar-full-white-9a4de8a50204d48e12f077fc7f33c956.svg"}]
  return (
    <div className='App'>
        <hr></hr>
        {contet.map(info => (
            <div className='card' key={info.id}>
                <div className='card-img'>
                    <img src={info.image} ></img>
                </div>
                <div className='card-content'>
                        <h2>
                            Nombre: {info.name} {info.lastName}
                        </h2>
                </div>
            </div>
        
        ))}
        <br></br>
    </div>

    );
}