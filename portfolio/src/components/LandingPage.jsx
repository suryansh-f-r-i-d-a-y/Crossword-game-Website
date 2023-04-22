    import React from 'react'
    import './styles/landingpage.css'
    import game1_img from './images/space.jpg'
    import avengers from './images/avengers.jpg'
    import anime from './images/anime4.jpg'
    import user_pic from './images/user_img.jpg'
    import { useAuth0 } from '@auth0/auth0-react'

    import { Link } from 'react-router-dom'

    export default function LandingPage() {

      const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    
      return (
        <>
        <section className='landing-main'>
        <div className='games-space'>

        <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="card-wrapper carousel-inner">
    <div className="card carousel-item active">
      <div className='card-image'>
    <img src={game1_img} className="card-img image-content d-block w-100" alt="..."/>
    </div>
      <div className=" cr-back carousel-caption d-none d-md-block">


      {isAuthenticated ? (<Link to='/Game1'><button className='button-landing'> play now </button></Link>) : (<button className="button-landing" onClick={() => loginWithRedirect()}> Log In to play</button>)}
        

        <p>Lets go on a space adventure and explore things.</p>
      </div>
    </div>

    <div className="card carousel-item">
      <div className='card-image'>
        <img src={avengers} className="card-img d-block w-100" alt="..."/>
      </div>
      <div className="cr-back carousel-caption d-none d-md-block">
        {isAuthenticated ? (<Link to='/Game2'><button className='button-landing'> play now </button></Link>) : (<button className="button-landing" onClick={() => loginWithRedirect()}> Log In to play</button>)}
      
        <p>Are you ready for some super hero action.</p>
      </div>
    </div>
    <div className="card carousel-item">
    <div className='card-image'>
      <img src={anime} className="card-img d-block w-100" alt="..."/>
      </div>
      <div className="cr-back carousel-caption d-none d-md-block">
      {isAuthenticated ? (<Link to='/Game3'>
      <button className='button-landing'> play now </button>
      </Link>) : (<button className="button-landing" onClick={() => loginWithRedirect()}> Log In to play</button>) }
      
      
        <p>Lets see how much you know about your favouraite anime.</p>
      </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            {/* <div className="slide-content">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="image-content">
                            <span className="overlay"></span>


                                <div className="card-image">
                                <img src={game1_img}  className='card-img' alt="error loading" />
                                </div>                            
                        </div>

                        <div className="card-content">
                            <h2 className='game-heading'> space</h2>
                            <p className="description">some cool things about space </p>
                            <button className='button'> play now </button>
                            </div>
                    </div>
                </div>
            </div>
             */}

        </div>
        



        <div className="user-data">
          <img className='user-img' src={user_pic} alt="error loading" />
            <h4>
                welcome {isAuthenticated && <p>{user.nickname}</p>  }
            </h4>

            <h5>Stats</h5>

            <p>puzzles solved : </p>
            {/* <p>Time spent : </p> */}

  
        </div>

    </section>
    </>
)
}
