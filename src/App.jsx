
import "./App.scss";
import team from "../src/data/data.js";
import TicketContainer from "./components/TicketContainer/TicketContainer";


const App = () => {
  return (
    <>
      <div className="app">
        <header className="app__header">
          <h1 className="app__header_subheader">Ticket Tracker</h1>
        </header>
        <section className="ticket-container__section">
          <TicketContainer team={team} />
        </section>
      </div>
    </>
  );
};

export default App;