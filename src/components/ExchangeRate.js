function ExchangeRate({exchangeRate,chosenprimarycurrency,chosensecondarycurrency}) {
    return (
      <div className="exchange-rate">
        <h3>Exchange Rate</h3>
     <h1> {exchangeRate}</h1>

     <p><h5>{chosenprimarycurrency} to {chosensecondarycurrency}</h5></p>
    
      </div>
    );
  }
  
  export default ExchangeRate;