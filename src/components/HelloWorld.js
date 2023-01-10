import Frase from "./Frase"

function HelloWorld(){
    return(
        <div className = "saudacao">
            <Frase />
            <h1>Hello World - via componente</h1>
            <Frase />
        </div>
    )
        
    
}

export default HelloWorld