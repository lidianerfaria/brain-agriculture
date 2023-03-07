import { Header, Tab, Tabs } from "./components";

function App() {
  return (
    <>
      <Header />
      <Tabs>
        <Tab title="Dashboard">Dashboard</Tab>
        <Tab title="Produtores">Edite seus cadastros</Tab>
      </Tabs>
    </>
  );
}

export default App;
