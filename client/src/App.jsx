import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
const App = () => {
  return (
    <div className="text-3xl font-bold">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
        </div>
          <Services />
          <Transactions />
          <Footer />
        </div>
  );
}

export default App;
