
document.write('<h1>Control de stock</h1>');
document.write('<h2>Funciones</h2><ul><li>amentarStock(n)</li><li>verStock()</li><li>comprar(n)</li></ul>');

//necesito una aplicacions que me permita controlar el stock del producto que tengo en tienda. Para ello necesito saber cuanto stock total tengo, necesito poder añadir nuevo producto cuando me falte stock, la aplicación deberar controlar el stock disponible avisandome de comprar cuando sea menos de 5 productos lo que queden.


var stock = 100;
const numeroMinimoStock = 5;
const mensajeCompraNoRealizada = 'Compra no realizada, en stock hay: ';
const mensajeStock = 'Stock total: ';
const mensajeAumento = 'Has aumentado al stock: ';
const mensajeCompraError = 'No se a podido realizar la compra, ha en stock: '
const mensajeCompraRealizada = 'Compra realizada';
const mensajeStockBajo = 'Stock bajo: ';
const unidades = " uni."

avisar(stock);
function aumentarStock(pNumeroA, pNumeroB = stock) {
    const resultado = pNumeroB + pNumeroA;
    stock = resultado;
    console.log(mensajeAumento + pNumeroA + unidades)
    verStock();
};
function comprar(pNumeroA, pNumeroB = stock) {
    if (stock < pNumeroA) {
        console.log(mensajeCompraNoRealizada + stock);

    } else {
        const resultado = pNumeroB - pNumeroA;
        const numero = pNumeroA;
        console.log(mensajeCompraRealizada);
        stock = resultado;
        avisar(stock);
        return numero;
    }
};
function avisar(pNumeroA, pNumeroB = numeroMinimoStock) {
    pNumeroA < pNumeroB ? console.log(mensajeStockBajo + pNumeroA + unidades) : true;
};
function verStock(pNumero = stock) {
    console.log(mensajeStock + pNumero + unidades);
    return pNumero;
};