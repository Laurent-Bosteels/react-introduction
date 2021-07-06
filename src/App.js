import './css/new.min.css';
import './css/App.css';
import Header from './Components/Header/HeaderComp';
import Form from './Components/Form/FormComp';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Form />

      </div>
    </div>
  );
}

export default App;