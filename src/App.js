import "./App.css";
import "./input.css";
import OrederEntry from "./pages/entry/OrederEntry";
// import SummaryForm from "./pages/summary/SummaryForm";
import { OrderDetailsProvider } from "./contexts/OrderDetails";

function App() {
  return (
    <div>
      <OrderDetailsProvider>
        {/* SummaryPage & EntryPage need provider */}
        <OrederEntry />
      </OrderDetailsProvider>
      {/*  */}
    </div>
    // <div className="App ">
    //   <OrederEntry />
    //   <SummaryForm />
    // </div>
  );
}

export default App;
