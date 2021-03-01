
import  React from'react'
const App = () => {
    return(
<main className="container">
            <button onClick={() => handleClick()}>Load Films</button>
          <section className="row justify-center mt-5">
          {/* instead of adding all html in the map u can return another component there pass films down to reference */}
            {films.map((films) => (
              <div className="col-md-6" key={`user-card-${films.id}`}>
                <div className="card shadow my-2">
                  <div className="card-body">
    
                    <h4 className="card-title">{films.allfilms}</h4>
                   
                    <p className="card-subtitle text-muted">{films.title}</p>
                    <p className="card-rext">{films.description}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
    )
}
