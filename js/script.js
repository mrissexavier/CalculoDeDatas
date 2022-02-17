function calcular(){
    let dataInicial = new Date(document.querySelector('#dataInicial').value);
    let proximaData = new Date(document.querySelector('#proximaData').value);

    let start = Math.floor(dataInicial.getTime() / (3600 * 24 * 1000));
    let end = Math.floor(proximaData.getTime() / (3600 * 24 * 1000));

    let daysDiff = end - start;

    document.querySelector('#qtdDias').value = daysDiff;
}