function PedirSorvete() {
    return new Promise((resolver, reject) =>{
        console.log("Iniciei o pedido")

        setTimeout(()=>{
            const temSorvete = true
            if(temSorvete){
                resolver("Tem sorvete")
            }else{
                reject("Não tem sorvete")
            }
        },2000)
    } )
}

async function main() {
    console.log("O programa foi iniciado")
    try {
        const resposta = await PedirSorvete()
        console.log("A promise foi resolvida, resposta: ", resposta)
    } catch (error) {
        console.log("Ocorreu um erro" + error)
        
    }
    
}

console.log("Iniciado")
main()
console.log("Codigo fora da promise continuar a ser executado sequencial")