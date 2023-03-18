import { StateChart, Header, Producers, Tab, Tabs } from "./components";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Header />
      <Tabs>
        <Tab title="Dashboard">
          <div>
            <StateChart />
          </div>
        </Tab>
        <Tab title="Produtores">
          <Producers />
        </Tab>
      </Tabs>
    </AppProvider>
  );
}

export default App;
