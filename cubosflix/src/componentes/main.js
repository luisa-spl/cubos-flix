import React from 'react'
import { useEffect, useState } from "react";

const modosFiltro= [
    {
      tipo: "Todos",
      valor: "Todos"
    },
    {
      tipo: "Ação",
      valor: "Ação"
    },
    {
      tipo: "Romance",
      valor: "Romance"
    },
    {
      tipo: "Ficção científica",
      valor: "Ficção científica"
    },
    {
      tipo: "Terror",
      valor: "Terror"
    }
  ];

  const filtroPadrao = modosFiltro[0];

export default function CustomMain({movies, inicial, final, filtro, setFiltro, filmesFiltrados, filmeNaSacola,setFilmeNaSacola}) {

function handleAddFilme(elemento) {
  const jaTem = filmeNaSacola.find(f => f.title === elemento.title);
  const indice = filmeNaSacola.findIndex(f => f.title === elemento.title);

  if(jaTem){
    filmeNaSacola[indice].qtd += 1;
    setFilmeNaSacola([...filmeNaSacola]); 
  }else{
    elemento.qtd = 1;
    setFilmeNaSacola([...filmeNaSacola, elemento]);
  }
  }
    return (
        <div className="main">
            <div className="esquerda">
                <div className="topFilme">TOP Filmes</div>
                <div className="cards1">
                    {
                        movies.map(elemento => (
                            (elemento.id >= inicial && elemento.id < final)
                            &&
                            <div className="card">
                                <img src={elemento.backgroundImg} alt={elemento.title} className="card-img"/>
                                <div className="estrelaCard"><img src="./assets/images/star.svg" alt=" "/></div>
                                <div className="tituloCard"> <p className="tituloFilme">{elemento.title}</p> <img  src="./assets/images/golden-star.svg" alt=" "/> <p>{elemento.starsCount}</p> </div>
                                <div className="rodapeCard"> <button className="botao" onClick={() => handleAddFilme(elemento)}><p> Sacola </p> <p>R${elemento.price}</p></button> </div>  
                            </div>
                        ))
                    }
                </div>
                
                <div className="filmes">Filmes</div>
                    <div className="filtros">
                        {modosFiltro.map((e) => (
                        <button className="filtro" id={filtro === e.valor ? "filtroAtivo" : ""} onClick={() => setFiltro(e.valor)}
                        >
                            {e.valor}
                        </button>
                        ))}
                </div>
                
                <div className="cards2">
                    {
                        filmesFiltrados.map((e) => (
                        <div className="card">
                        <img src={e.backgroundImg} alt={e.title} className="card-img"/>
                        <div className="estrelaCard"><img src="./assets/images/star.svg" alt=" "/></div>
                        <div className="tituloCard"> <p className="tituloFilme">{e.title}</p> <img  src="./assets/images/golden-star.svg" alt=" "/> <p>{e.starsCount}</p> </div>
                        <div className="rodapeCard"> <button className="botao"><p> {e.title} </p> <p>R${e.price}</p></button> </div>
                      </div> 
                        ))
                    }
                </div>
            </div> 
        </div>
    )
};