import React from 'react'
import {useState} from 'react'

export default function CustomHeader({setBuscar}) {

function handleKey(e) {
    const key = e.which;
    if(key === 13){
        setBuscar(e.target.value);  
    } else{
        return;
    }
}

function handleClick(e) {
    const valor = document.querySelector(".inputBusca").value;
    if(valor === "" || valor === undefined){
        return;
    }else{
        setBuscar(valor);
    }
}
    return (
    <header>
        <img src="./assets/images/logo.svg" alt=" " style={{width: "45px", height: "45px"}}/>
        
        <div className="busca">
            <form onSubmit={(e) => e.preventDefault()}>
                <input className="inputBusca" type="text" placeholder="Pesquise filmes..."  style={{fontSize:"16px", color: "#FDFDFD"}} onKeyPress={(e) => handleKey(e)}
                placeholder='Pesquise filmes...' type='text'/>
                <img className="iconeBusca" src="./assets/images/search-icon.svg" alt=" " style={{width: "20px", height: "20px"}} onClick={(e) => handleClick(e)}/> 
            </form>
        </div>
        
        <div className="favoritos">
            <img src="./assets/images/bookmark-icon.svg" alt=" " />
            <p>Favoritos</p>
        </div>

        <div className="promo">
            <img src="./assets/images/promotion-icon.svg" alt=" " />
            <p>Promoções</p>
        </div>

        <div className="user">
            <p>Bem vindo, Matheus</p>
            <img src="./assets/images/profile.jpg" alt=" " style={{width: "55px", height: "55px"}}/>
        </div>
    </header>
    );
  }
