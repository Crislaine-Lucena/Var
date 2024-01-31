
// Esse arquivo não foi feito para rodar, é apenas para estudo.

const idade = 30; //como eu criei a variavel idade na raiz do arquivo, ela existirá em todo arquivo

console.log(idade);


{

const escopo = 25;

} // quando uso essas chaves eu crio um escopo, com essas chaves eu estou dizendo que qualquer  variavel qu eu criar dentro desse escopo elas só vão existir dentro dessas chaves de modo que se eu tentar usar essas variaveis fora, o js não vai entender  

console.log(escopo); // nao roda pq a variavel ta dentro, mas.....

const coisa = 50;
{
    console.log(coisa) // mas aqui vai rodar, pq o que ta dentro pode rodar o que ta fora
}

//mas aqui....

{
    const ideia = 36;
    {
        console.log(ideia); // aqui funciona criei fora e rodo dentro
        // outro exemplo, esse não roda:
        let nome = "Josefa";
    }
    console.log(nome); //criar dentro e tentar usar fora nao roda

}

