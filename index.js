const currencies = { USD: 'usd', EUR: 'eur' };

const inputCurrencyElement = document.querySelector('#input-currency-type');
const inputValueElement = document.querySelector('#input-currency-value');
const outputCurrencyElement = document.querySelector('#output-currency-type');
const outputValueElement = document.querySelector('#output-currency-value');

bindEvents();

function bindEvents() {
    inputValueElement.onkeyup = inputConversionHandler;
    inputCurrencyElement.onchange = inputConversionHandler;
    outputValueElement.onkeyup = outputConversionHandler;
    outputCurrencyElement.onchange = outputConversionHandler;
}

function inputConversionHandler() {
    const inputValue = inputValueElement.value;
    const conversionRate = getConversionRate();
    outputValueElement.value = inputValue * conversionRate;
}

function outputConversionHandler() {
    const outputValue = outputValueElement.value;
    const conversionRate = 1 / getConversionRate();
    inputValueElement.value = outputValue * conversionRate;
}

function getConversionRate() {
    let inputCurrency = inputCurrencyElement.value;
    let outputCurrency = outputCurrencyElement.value;

    if (inputCurrency === outputCurrency) {
        return 1;
    }

    if (inputCurrency === currencies.EUR && outputCurrency === currencies.USD) {
        return 1.08;
    }

    if (inputCurrency === currencies.USD && outputCurrency === currencies.EUR) {
        return  0.92;
    }

    throw Error("conversion of these currencies is not supperted!");
}



