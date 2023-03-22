import './App.css';
import TrendingAssetCart from './components/TrendingAssetCart';

const data = [
  {
    icon:"/assets/bitcoin.svg", title:"Bitcoin(BTC)", current:31812.80, returns:10, id:1
  },
  {
    icon:"/assets/solana.svg", title:"Solana(SOL)", current:32.83, returns:-12.32, id:2
  },
  {
    icon:"/assets/ethereum.svg", title:"Ethereum(ETH)", current:1466.45, returns:-11.93, id:3
  },
  {
    icon:"/assets/bitcoinsv.svg", title:"Binance USD(BUSD)", current:1.00, returns:0.26, id:4
  },

  {
    icon:"/assets/shib.svg", title:"Shiba Inu(SHIB)", current:0.001948, returns:-8.1, id:5
  }

]

function App() {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#14172B] md:space-x-9 md:px-10 gap-16 sm:gap-0 py-16 ">
      {
        data.length > 0 && data?.map((item, index)=><TrendingAssetCart key={item.id} icon={item.icon} title={item.title} current={item.current} returns={item.returns} />)
      }
    </div>
  );
}

export default App;
