import CTA from "./CTA"
import PromgramerPic from '../assets/programmer.svg'
import HeaderSocials from "./HeaderSocials"
 

const Header = () => {
  return (
    <header id="home" >
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Cameron</h1>
            <h5 className="text-light">Full-Stack Developer</h5>
            <CTA></CTA>
            <HeaderSocials></HeaderSocials>

            <div className="me">
                <img src={PromgramerPic} alt="programmer pic"  />
            </div>
        </div>
    </header>
  )
}

export default Header