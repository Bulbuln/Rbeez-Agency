import { useState, useEffect } from 'react';
import {HomeSection, HomeTitle, HomeInformation, HomeBtn,  HomeDesc} from './style'
import Typewriter from "typewriter-effect"

const Home = () => {
    const [on, setOn] = useState(false)

    const toggle = () => {
        setOn(!on)
    }

    useEffect(() => {
        const timer = setTimeout(toggle, 3000);
        return () => clearTimeout(timer);
    });



    return (
        <HomeSection className="home" id="home">
            <div className="delay" style={{backgroundColor:"rgb(8 28 179 / 35%)", height:"500px", opacity: "0.8"}}></div>

            <div className="container">
                <HomeInformation className="home-information">
                <HomeTitle className="home-title "><Typewriter onInit={(typewriter)=> {
                    typewriter.typeString('Rbeez').pauseFor(2000).start()
                }}/></HomeTitle>
                <HomeDesc className="home-desc">
                    {on ? 'The Translation Agency You Can Trust' : 'We charge the lowest price and we do not have rush rates'}
                </HomeDesc>
                <HomeBtn className="home-btn">Let's Begin</HomeBtn>
                </HomeInformation>
            
            </div>
        
        </HomeSection>
    )
}

export default Home
