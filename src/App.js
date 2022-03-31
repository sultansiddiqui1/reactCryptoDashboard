import CurrencyConverter from "./components/CurrencyConverter";
import ExchangeRate from "./components/ExchangeRate";
import NewsFeed from "./components/NewsFeed";
import './index.css';


function App() {
  return (
   

    <div style={{ display: "flex", 'flex-direction': "column", 'align-items': 'center' }}>
      <h1>All About Crypto</h1>

      <div style={{display: "flex" }}>
        <CurrencyConverter></CurrencyConverter>
        <NewsFeed> </NewsFeed>
      </div>


    </div>
  );
}

export default App;
