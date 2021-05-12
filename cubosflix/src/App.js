import './App.css';
import CustomHeader from './componentes/header'
import CustomMain from './componentes/main'
import CustomBanner from './componentes/banner'
import CustomCarrinho from './componentes/carrinho'
import movies from './componentes/data'
import { useEffect, useState } from 'react';


function App() {
const [bannerAberto, setBannerAberto] = useState(true);
const [buscar, setBuscar] = useState("");
const [filtro, setFiltro] = useState("Todos");
const [filmesFiltrados, setFilmesFiltrados] = useState([]);
const [cardAberto, setCardAberto] = useState(true);
const [filmeNaSacola, setFilmeNaSacola] = useState([]);
const [totalSacola, setTotalSacola] = useState(0);

useEffect(() => {
  if (filtro === "Todos") {
    setFilmesFiltrados(movies);
  } 
  else {
    const filmes = movies.filter((filme) => filme.categories.includes(filtro))
    setFilmesFiltrados(filmes);
  };
}, [filtro]);

useEffect(() =>{
  const filmeBuscado = movies.filter((filme) => filme.title.includes(buscar))
  setFilmesFiltrados(filmeBuscado);
}, [buscar] )



  return (
    <div className="App">
      <CustomHeader setBuscar={setBuscar}/>
      <CustomBanner bannerAberto={bannerAberto} setBannerAberto={setBannerAberto} />
      <CustomMain movies={movies} inicial={0} final={5} buscar={buscar} filtro={filtro} setFiltro={setFiltro} 
                  setCardAberto={setCardAberto} cardAberto={cardAberto} filmesFiltrados={filmesFiltrados} 
                  setFilmesFiltrados={setFilmesFiltrados} filmeNaSacola={filmeNaSacola} 
                  setFilmeNaSacola={setFilmeNaSacola}/>
      <CustomCarrinho bannerAberto={bannerAberto} filmeNaSacola={filmeNaSacola} setFilmeNaSacola={setFilmeNaSacola} totalSacola={totalSacola} setTotalSacola={setTotalSacola} />
    </div>
  );
}

export default App;
