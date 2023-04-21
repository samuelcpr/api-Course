

// A ideia e que essa função receba dados para criarmos nosso curso
/** 
 * O que teremos
 * name -string
 * duration - number
 * instructor - string
 */
class CreateCouseServer {

    execute(name:string, duration:number, instructor:string){
        console.log(name, duration, instructor)
    }
}

export default new CreateCouseServer();