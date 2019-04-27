import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    ordenamiento: 'asc',
    posicion: 0,
    fibonaccis: []
  }

  handleSubmit = e => {
    e.preventDefault();

    const fibs = this.calFibonaccis(this.refs.largo.value);

    this.setState({
      posicion:  this.refs.posicion.value,
      fibonaccis: this.state.ordenamiento === 'asc' ? fibs : fibs.reverse()
    });

    console.log(this.state.fibonaccis);
  };

  handleSelectOrdenamiento = ordenamiento => {
    this.setState({ordenamiento});
  };

  calFibonaccis = largo => {
      const howMany = parseInt(largo, 10);
      const start = 0;

      let fibonaccis = [];
      let fPrev = 0;
      let fNext = 1;
      let fib = 0;

      if (howMany > 1 && start === 0) {
        fibonaccis.push(fPrev);
      }

      if (howMany > 2 && start === 0) {
        fibonaccis.push(fNext);
      }

      while (1) {
        if (fibonaccis.length >= howMany)
          break;

        fib = fPrev + fNext;

        fPrev = fNext;

        if (fib >= start) {
          fibonaccis.push(fib);
        }

        fNext = fib;
      }

      return fibonaccis;
  };

 
  render() {

    const { fibonaccis, posicion } = this.state;

    return (
      <>
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white">Follow on Twitter</a></li>
                  <li><a href="#" className="text-white">Like on Facebook</a></li>
                  <li><a href="#" className="text-white">Email me</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <strong>Test CCxC</strong>
            </a>
          </div>
        </div>
      </header>
  
      <div className="container">
        <h1 className="jumbotron-heading">Serie Fibonacci</h1>
        <br/><br/><br/>
  
        <div className="container">
          <form method="post" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                    <label>Largo</label>
                    <input type="number" pattern="/^([0-9])*$/" required className="form-control" id="largon" aria-describedby="largoHelp" placeholder="Largon" ref="largo"/>
                </div>
              </div>
    
              <div className="col-sm">
                <div className="form-group">
                    <label>Posicion</label>
                    <input type="number" pattern="/^([0-9])*$/" required className="form-control" id="largon" aria-describedby="posisionHelp" placeholder="Largon" ref="posicion"/>
                </div>
              </div>
  
              <div className="col-sm">
                <div className="form-group">
                    <label>Ordenamiento</label>
                    <select className="custom-select" id="inputGroupSelect01">
                      <option value="asc" onClick={(e) => { this.handleSelectOrdenamiento('asc')}}>Asendiente</option>
                      <option value="des" onClick={(e) => { this.handleSelectOrdenamiento('desc')}}>Desendiente</option>
                    </select>
                </div>
              </div>
            </div>

            <div className="row">
                <input type="submit" className="btn btn-success btn-block" value="Mostrar Fibonacci"/>
            </div>

            <div className="row">
              <ul className="list-group" style={{marginTop: '15px', width: '100%'}}>
                { fibonaccis.length > 0 && 
                  <li className="list-group-item">{fibonaccis[posicion]}</li>
                }
              </ul>
            </div>
          </form>
        </div>
      </div>
  </>
    );
  }
  
}

export default App;
