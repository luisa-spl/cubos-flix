import React from 'react'
import { useEffect, useState } from "react";

export default function CustomBanner({bannerAberto, setBannerAberto}) {

    return (
        <div className="esquerda">
            <div className={`banner ${bannerAberto ? "" : "fechado"}`} onClick={() => setBannerAberto(!true)}>
                <div className="cupom">
                    <h1>APROVEITE AGORA</h1>
                    <div>
                        <img src="./assets/images/coupon-circle-icon.svg" alt=" " style={{width: "30px", height: "30px"}} />
                        <p>CUPOM: HTMLNAOELINGUAGEM</p>
                    </div>
                </div>
                
                <div className="tempo">
                    <h2>FINALIZA EM:</h2>
                    <div className="tempoCont">
                        <img src="./assets/images/time-icon.svg" alt=" " style={{width: "30px", height: "30px"}} />
                        <p>contador</p>
                    </div>
                </div> 
                
                <div className="dinheiroImg">
                    <img src="./assets/images/money.png" alt="ilustração de cédulas e moedas" />
                </div>
            </div>
            </div>
    );
}