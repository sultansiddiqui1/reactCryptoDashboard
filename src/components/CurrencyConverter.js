import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";


function CurrencyConverter() {
    const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
    const [chosenprimarycurrency, setchosenprimarycurrency] = useState('BTC')
    const [chosensecondarycurrency, setchosensecondarycurrency] = useState('BTC')
    const [amount, setamount] = useState(1)
    const [exchangeRate, setexchangeRate]=useState(0)
    const [primarycurrencyExchanged, setprimarycurrencyExchanged]=useState('BTC')
    const [secondarycurrencyExchanged, setsecondrycurrencyExchanged]=useState('BTC')
    const[result, setResult]=useState(0)




    

    const convert = () => {


        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chosenprimarycurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosensecondarycurrency },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY 
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data["Realtime Currency Exchange Rate"]['5. Exchange Rate'])
            setexchangeRate(response.data["Realtime Currency Exchange Rate"]['5. Exchange Rate'])
            setResult(response.data["Realtime Currency Exchange Rate"]['5. Exchange Rate']*amount)
            setprimarycurrencyExchanged(chosenprimarycurrency);
            setsecondrycurrencyExchanged(chosensecondarycurrency)

        }).catch((error) => {
            console.error(error);
        });
    }

   




    return (
        <div className="currency-converter">
            <h2>currency converter</h2>
            <div className="input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Primary Currency
                            </td>
                            <td>
                                <input type="number" name="currency-amount-1" value={amount} onChange={(e) => setamount(e.target.value)}></input>
                            </td>
                            <td>
                                <select value={chosenprimarycurrency} name="currency-option-1" className="currency-options" onChange={(e) => setchosenprimarycurrency(e.target.value)}>
                                    {currencies.map(currency => (<option>{currency}</option>))}

                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Secondary Currency
                            </td>
                            <td>
                                <input type="number" name="currency-amount-2" value={result} disabled={true}></input>
                            </td>
                            <td>
                                <select value={chosensecondarycurrency} name="currency-option-2" className="currency-options" onChange={(e) => setchosensecondarycurrency(e.target.value)}>
                                    {currencies.map(currency => (<option>{currency}</option>))}

                                </select>
                            </td>
                        </tr>

                    </tbody>
                </table>



                <button id="button" onClick={convert}>
                    convert
                </button>






            </div>






            <ExchangeRate 
            exchangeRate={exchangeRate}
            chosenprimarycurrency={primarycurrencyExchanged}
            chosensecondarycurrency={secondarycurrencyExchanged} 
            
            />
                
           
        </div>
    );
}

export default CurrencyConverter;
