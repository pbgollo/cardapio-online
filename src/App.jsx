import hashtaurante from "./assets/hashtaurante.webp"
import "./App.css"
import { Navegacao } from "./Navegacao"
import { ItemCardapio } from "./ItemCardapio"

export function App() {
  return <>
            <img src={hashtaurante} alt="" className="capa"/>
            <Navegacao />
            <div className="menu">
              <ItemCardapio />
              <ItemCardapio />
              <ItemCardapio />
              <ItemCardapio />
            </div>
        </> 
}