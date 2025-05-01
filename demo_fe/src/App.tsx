import './App.css';
import HealthMartApp from './component/home/HomePage';
import { ProductList } from './component/product';
import { Provider } from "@/components/ui/provider"
function App() {

  return (
    <Provider>

      {/* <HealthMartApp /> */}
      <ProductList />
    </Provider>

  );
}

export default App;