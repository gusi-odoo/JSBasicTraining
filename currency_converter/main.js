// console.log('hiii');
let fromCurrency = document.getElementById("from_currency");
let toCurrency = document.getElementById("to_currency");
let amount = document.getElementById("amount");
let ex_rate = document.getElementById("exchange-rate");
api = async () => {
    url = "https://v6.exchangerate-api.com/v6/c960c0ea3b75ef916638032a/latest/INR"
    data = await fetch(url).then((res) => res.json())
    // console.log("-------------------------------");
    console.log(data);
    console.log(data['conversion_rates'])
    for (country in data['conversion_rates']) {
        let option = document.createElement("option")
        option.value = data['conversion_rates'][country]
        option.text = country
        // console.log("-------------------------");
        console.log(option);
        // console.log("------------------------");
        toCurrency.appendChild(option)

        let option2 = document.createElement("option")
        option2.value = data['conversion_rates'][country]
        option2.text = countryx
        fromCurrency.appendChild(option2)
    }
}
api()
calc = () => {
    ex_rate.innerHTML = `${amount.value} ${fromCurrency.options[fromCurrency.selectedIndex].text} = ${parseFloat(toCurrency.value * amount.value / fromCurrency.value)} ${toCurrency.options[toCurrency.selectedIndex].text}`;
}
fromCurrency.addEventListener("change", () => calc())
toCurrency.addEventListener("change", () => calc())
amount.addEventListener("keyup", () => calc())