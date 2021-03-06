import React, { useEffect, useState } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

const App = () => {
  const handleClick = (e) => {
    setloadfilms(true);
  };
  const handleButtonClick = (e) => {
    setloadpeople(true);
  };

  const [films, setfilms] = useState([]);
  const [loadfilms, setloadfilms] = useState(false);

  const [people, setpeople] = useState([]);
  const [loadpeople, setloadpeople] = useState(false);

  useEffect(() => {
    fetch(" https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allfilms) => setfilms(allfilms));
  }, []);

  useEffect(() => {
    fetch(" https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((allpeople) => setpeople(allpeople));
  }, []);

  if (loadfilms == false && loadpeople == false) {
    return (
        <main className="container">
       
          <h1 class="welcome">Welcome To Studio Ghibli</h1>

          <button id ="load-btn"class="load-btn" onClick={() => handleClick()}>
            Load Films
          </button>
          <button class="load-people" onClick={() => handleButtonClick()}>
            People
          </button>
          </main>
         
    
    
    );
  } else if (loadfilms == true) {
    return (
      <main className="container">
        <button onClick={() => handleClick()}>Load Films</button>
       

        <section className="row justify-center mt-5">
          {films.map((films) => (
            <div className="col-md-6" key={`user-card-${films.id}`}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <h4 className="card-title">{films.allfilms}</h4>

                  <p className="card-subtitle text-muted">{films.title}</p>
                  <p className="card-rext">{films.description}</p>
                  <a href={`https://ghibliapi.herokuapp.com/films/${films.id}`}>
                    Link To Json
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }
  if (loadpeople == false) {
    return (
      <main className="container">
        <section className="row justify-center mt-5">
          <button onClick={() => handleButtonClick()}> People</button>
        </section>
      </main>
    );
  } else if (loadpeople == true) {
    return (
      <main className="container">
        <button onClick={() => handleButtonClick()}> People</button>

        <section className="row justify-center mt-5">
          {people.map((people) => (
            <div className="col-md-6" key={`user-card-${people.id}`}>
              <div className="card shadow my-2">
                <div className="card-body">
                  <h4 className="card-title">{people.allpeople}</h4>

                  <p className="card-subtitle text-muted">{people.name}</p>
                  <p className="card-rext">{people.age}</p>
                  <p className="card-rext">{people.gender}</p>
                  <a
                    href={`https://ghibliapi.herokuapp.com/people/${people.id}`}
                  >
                    Link To Json
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }
};

export default App;
