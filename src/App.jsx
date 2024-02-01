import hashtaurante from "./assets/hashtaurante.webp"
import "./App.css"
import { Navegacao } from "./Navegacao"

export function App() {
  return <>
            <img src={hashtaurante} alt="" className="capa"/>
            <Navegacao/>
        </> 
}