// import Header from "./components/Header";
// import Hero from "./components/Hero";
import styled from './App.module.css'

const App = () => {
  return(
   <>
      <div className={styled.container}>
        <div className={styled.wrapper}>
          <div className={styled.logo}>LOGO</div>
          <div className={styled.navHolder}>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Blog</div>
            <div>Career</div>
          </div>
          <button className={styled.button}>Get Started</button>
        </div>
      </div>
      <div className={styled.heroContainer}>
        <div className={styled.herowrapper}>
          <div className={styled.left}>
            <div className={styled.bigText}>Melodies that help you stay focus</div>
            <div className={styled.smallText}>
            Dive into the music, lose yourself in the game, or focus on the task at hand. Our headsets have got you covered
</div>
            <div className={styled.emailbutton}>
              <div className={styled.email}>
                <h4 className={styled.emailText}>Your email address</h4>
                <input className={styled.input}></input>
              </div>
              <button className={styled.button1}>Get Started</button>
            </div>
          </div>
          <div className={styled.right}>
          {/* <img src="./assets/Image/87157069_10030620.png"/> */}
          </div>
        </div>
      </div>
   </>
  )
};

export default App