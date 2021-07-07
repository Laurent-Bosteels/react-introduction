/* REACT IMPORT */
import React from 'react';

/* CSS IMPORT */
import './css/new.min.css';
import './css/App.css';

/* COMPONENT IMPORT */
import Header from './Components/Header/HeaderComp';
import Form from './Components/Form/FormComp';
import Home from './Components/List/ListItem';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Form />
        <Home />
      </div>
    </div>
  );
}

export default App;