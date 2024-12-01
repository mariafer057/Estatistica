const horasDormidas = [7.1, 6.2, 7.0, 7.4, 6.8, 6.7, 7.5, 7.2, 7.3, 6.5];
const produtividade = [68.3, 47.5, 72.0, 67.8, 10.5, 14.8, 85.6, 62.4, 59.8, 11.7];

// Função para calcular a correlação
function calculateCorrelation(x, y) {
    const n = x.length;
    const avgX = x.reduce((a, b) => a + b, 0) / n;
    const avgY = y.reduce((a, b) => a + b, 0) / n;

    let numerator = 0, xDiffSq = 0, yDiffSq = 0;

    for (let i = 0; i < n; i++) {
    const xDiff = x[i] - avgX;
    const yDiff = y[i] - avgY;
    numerator += xDiff * yDiff;
    xDiffSq += xDiff ** 2;
    yDiffSq += yDiff ** 2;
    }

    return numerator / Math.sqrt(xDiffSq * yDiffSq);
}

// Resultado da correlação
const correlation = calculateCorrelation(horasDormidas, produtividade);
console.log("Correlação:", correlation);
