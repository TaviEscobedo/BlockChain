import './App.css';

import {Link } from "react-router-dom";

function App() {
  return (
    <div className="container pt-4">
      <div className="row mt-4">
        <div className="col-8 offset-md-2 mt-4">
    <div className="jumbotron jumbotron-fluid text-center">
  <h1 className="display-4">¡Cuidemos nuestro futuro!</h1>
  <p className="lead">Todo depende de ti, está en tus manos</p>
  <hr className="my-4"/>
  
  <p className="lead">
    <Link className="btn btn-success btn-lg" to="/registro" >Entrar</Link>
  </p>
  </div>
</div>
</div>
</div>
  );
}

export default App;
