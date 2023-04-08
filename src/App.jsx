import './App.css';



export const NavBar =() =>{
  return (
    <div className="row">
    <div className="col"><nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-danger-subtle ">
          <a className="navbar-brand " href="#">Learning React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button></div>
    <div className="col bg-dark-subtle">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blindguy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Prices</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">exit</a>
          </li>
        </ul>
      </div>
    </div>       
  
</nav>

</div>
</div>

  )}


export const Card = () => { 
  return (
    <div className="row text-center" >
      <div className="col">  <div className="container">
            <div className="Card">
              <img src="https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      </div></div>
      <div className="col">  <div className="container">
            <div className="Card">
              <img src="https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      </div></div>
      <div className="col">  <div className="container">
            <div className="Card">
              <img src="https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      </div></div>
      <div className="col">  <div className="container">
            <div className="Card">
              <img src="https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      </div></div>
      <div className="col">  <div className="container">
            <div className="Card">
              <img src="https://es.rollingstone.com/wp-content/uploads/2021/12/Los-mejores-personajes-de-Michael-Scott.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
          </div>
      </div></div>
        
    </div>
   

 )} 


 export const Jumbotron = () => {
   return( 
   <div className="mt-4 p-5 mb-5 bg-primary-subtle text-black rounded">
   <h1 className="display-1">Im prison Mike</h1>
   <p className='display-6'>Close your eyes. Picture a convict. Whats he wearing? Nothing special, baseball cap on backwards, baggy pants. He says something ordinary like 'yo, that's shizzle.' Okay. Now slowly open your eyes again. Who are you picturing? A black man? Wrong. That was a white woman. Surprised? Well, shame on you.</p>
   <a href="#" className="btn btn-success">Go to prison?</a>
 </div>

   )}



