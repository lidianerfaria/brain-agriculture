import { Header, Producers, Tab, Tabs } from "./components";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Header />
      <Tabs>
        <Tab title="Dashboard">Dashboard</Tab>
        <Tab title="Produtores">
          <Producers />
        </Tab>
      </Tabs>
    </AppProvider>
  );
}

export default App;
