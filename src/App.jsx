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
            Dive into the music, lose yourself in the game, or focus on the task at hand. Our playlists have got you covered
</div>
            <div className={styled.emailbutton}>
              <div className={styled.email}>
                <h4 className={styled.emailText}>Your email address</h4>
                <input className={styled.input}></input>
              </div>
              <button className={styled.button1}>Get Started</button>
            </div>
          </div>
          <div className={styled.right}></div>
        </div>
      </div>
      <div className={styled.thirdSection}>
        <div className={styled.thirdWrapper}>
          <div className={styled.thirdLeft}>
            <h3 className={styled.headText}>Featured Melody</h3>
            <div className={styled.cardDiv}>
              <div className={styled.card}>
                <div className={styled.cardImage}></div>
                <div className={styled.cardBig}>Moment of silence</div>
                <div className={styled.cardSmall}>Jordan Smith</div>
              </div>
              <div className={styled.card}>
              <div className={styled.cardImage2}></div>
                <div className={styled.cardBig}>The sound of nature </div>
                <div className={styled.cardSmall}>Jordan Smith</div>
              </div>
              <div className={styled.card}>
              <div className={styled.cardImage3}></div>
                <div className={styled.cardBig}>Fantastic Wave</div>
                <div className={styled.cardSmall}>Jordan Smith</div>
              </div>
            </div>
          </div>
          <div className={styled.thirdright}>
            <h3 className={styled.headText}>Weekly Popular</h3>
            <div className={styled.listDiv}>
              <div className={styled.list}>
                <div className={styled.leftList}>1</div>
                <div className={styled.rightList}>
                  <div className={styled.up}>Harmony in our life</div>
                  <div className={styled.down}> Dive into the music, lose yourself in the game.</div>
                </div>
              </div>
              <div className={styled.list}>
                <div className={styled.leftList}>2</div>
                <div className={styled.rightList}>
                  <div className={styled.up}>Moment of silence</div>
                  <div className={styled.down}> Dive into the music, lose yourself in the game.</div>
                </div>
              </div>
              <div className={styled.list}>
                <div className={styled.leftList}>3</div>
                <div className={styled.rightList}>
                  <div className={styled.up}>The sound of nature</div>
                  <div className={styled.down}> Dive into the music, lose yourself in the game.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
};

export default App