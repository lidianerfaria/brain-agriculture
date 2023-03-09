import { Header, RegisterList, Tab, Tabs } from "./components";

function App() {
  return (
    <>
      <Header />
      <Tabs>
        <Tab title="Dashboard">Dashboard</Tab>
        <Tab title="Produtores">
          <RegisterList />
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
