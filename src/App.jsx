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

</div>
            <div className={styled.emailbutton}>
              <div className={styled.email}></div>
              <button className={styled.button}>Get Started</button>
            </div>
          </div>
          <div className={styled.right}>
          <img src="/portrait-young-man-isolated.png "/>
          </div>
        </div>
      </div>
   </>
  )
};

export default App