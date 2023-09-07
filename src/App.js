import logo from "./logo.svg";
import "./App.css";
import PriceCard from "./PriceCard";

function App() {
  
  return (
    <div className="app-container">
      <PriceCard plan="FREE" payment="$0/month"></PriceCard>
      <PriceCard plan="PLUS" payment="$9/month"></PriceCard>
      <PriceCard plan="PRO" payment="$49/month"></PriceCard>
    </div>
  );
}

export default App;
