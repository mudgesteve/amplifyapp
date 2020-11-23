import navBar from '../src/myNavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <navBar class="row justify-content-between align-items-center myRow">
          <div className="col-sm-2 btn btn-primary">1</div>
          <div className="col-sm-2 btn btn-info">2</div>
          <div className="col-sm-2 btn btn-warning">3</div>
          <div className="col-sm-2 btn btn-info">4</div>
          <div className="col-sm-2 btn btn-primary">5</div>
        </navBar>
      </nav>

      <header className="row App-header justify-content-center align-items-center">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-12">
            Header  
          </div>
        </div>
      </header>   

      <main id="main-wrapper" className="container-fluid">
        container with three columns
        <div id="main" className="row">
          <div id="leftSideBar" className="col">leftSideBar</div>
          <div id="content" className="col">Main Content</div>
          <div id="rightSideBar" className="col">rightSideBar</div>
        </div>
      </main>

      <footer>
        <div id="footer" className="row justify-content-center align-items-center">footer</div>
      </footer>
    </div>
  );
}

export default App;
