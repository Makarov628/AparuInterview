import { useEffect, useState } from 'react';
import M from 'materialize-css';

import Drivers from './pages/drivers'
import Autos from './pages/autos'

import './App.css';

function App() {

  const [page, setPage] = useState("drivers")


  useEffect(() => {
    M.Tabs.init(document.querySelector("ul.tabs"))
  }, [])

  return (
    <>
      <nav class="orange nav-extended" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">Aparu</a>

        </div>
        <div class="row">
          <div className="nav-content">
            <div class="col s12">
              <ul class="tabs tabs-transparent">
                <li class="tab col s6"><a onClick={() => setPage("drivers")}>Водители</a></li>
                <li class="tab col s6"><a onClick={() => setPage("autos")}>Автомобили</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="section">
          <div className="row"></div>
          
            {
              page == "drivers"
                ? <Drivers />
                : page == "autos"
                  ? <Autos />
                  : null
            }
          

        </div>
      </div>


    </>

  );
}

export default App;
