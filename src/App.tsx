import { Header, RegisterList, Tab, Tabs } from "./components";
// import { Provider } from "react-redux";

function App() {
  return (
    // <Provider store={}>
    <>
      <Header />
      <Tabs>
        <Tab title="Dashboard">Dashboard</Tab>
        <Tab title="Produtores">
          <RegisterList />
        </Tab>
      </Tabs>
    </>
    // </Provider>
  );
}

export default App;
