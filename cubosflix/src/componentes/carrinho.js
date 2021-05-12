import React, { useEffect } from 'react'

export default function CustomCarrinho({bannerAberto, filmeNaSacola, setFilmeNaSacola, totalSacola, setTotalSacola}) {
const desconto = 0.10;

function handleQtdPlus(elemento) {
    const indice = filmeNaSacola.findIndex(f => f.title === elemento.title);
    filmeNaSacola[indice].qtd += 1;
    setFilmeNaSacola([...filmeNaSacola]); 
  } 

function handleQtdMinus(elemento) {
    const indice = filmeNaSacola.findIndex(f => f.title === elemento.title);
   
    if(filmeNaSacola[indice].qtd >1) {
        filmeNaSacola[indice].qtd -= 1;
        setFilmeNaSacola([...filmeNaSacola]); 
    } else {
        filmeNaSacola.splice(indice,1);
        setFilmeNaSacola([...filmeNaSacola]);
    }
  }

  useEffect(() => { 
        totalSacola = filmeNaSacola.reduce((acc, item) => acc + item.qtd * item.price, 0);
        setTotalSacola(totalSacola);
    }, [filmeNaSacola]);

function handleCupom (e) {
    const key = e.which;
    console.log(e.target.value);
    console.log(key)
    if(key === 13 && e.target.value === "HTMLNAOELINGUAGEM") { 
        totalSacola = filmeNaSacola.reduce((acc, item) => acc + item.qtd * item.price, 0);
        totalSacola = totalSacola - (totalSacola*desconto);
    }
    else {
     
        return;
    }
    setTotalSacola(totalSacola);  
    console.log(totalSacola)
}

    return (
    <div className="direita">
        <div className="headCarrinho"> 
                <img src="./assets/images/bag-icon.svg" alt=" " />
                <p>SACOLA</p>
            </div>
            {
                (filmeNaSacola.length < 1 ?
            
            
            <div className="sacolaVazia">
            <h2>Sua sacola está vazia</h2>
            <p className="addFilme">Adicione filmes agora</p>
            <img className="personImg" src="./assets/images/person-illustration.svg" alt=" " />
            </div>
        
            :
            
                filmeNaSacola.map(elemento => (
                <div className="sacolaAtiva">
                    <div className="esq">
                        <img src={elemento.backgroundImg} alt="capa do filme" />
                    </div>
                    <div className="infosSacola">
                        <p className="sacolaTit">{elemento.title}</p>
                        <p className="sacolaPrice">{`R$${elemento.price}`}</p>
                    </div>
                    <div className="dir">
                        <img src='./assets/images/plus-icon.svg' style={{width:"20px", height:"20px"}} alt="" onClick={() => handleQtdPlus(elemento)} />
                        <p>{elemento.qtd}</p>
                        <img src={(elemento.qtd < 2 ? './assets/images/trash-icon.svg' : './assets/images/minus-icon.svg')} style={{width:"20px", height:"20px"}} alt="" onClick={() => handleQtdMinus(elemento)}/>
                    </div>
                </div> 
                ))
            )
            }

            <div className="formDiv">
                <label className="insiraCupomTxt">Insira seu cupom</label>
                <div className="form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input className="input" type="text" placeholder="Cupom de desconto" value={(bannerAberto ? "" : "HTMLNAOELINGUAGEM")} onKeyPress={(e) => handleCupom(e)}></input>
                        <img src="./assets/images/coupon-icon.svg" alt="icone" style={{height: "15px", width: "15px"}} />
                    </form>
                </div>
            </div>

            <div className={ filmeNaSacola.length < 1 ? "confirmaDadosFechado" :  "confirmaDados"}>
                <p>Confirme seus dados</p>
                <p>{`R$${totalSacola}`}</p> 
            </div>
    </div>
    )
};