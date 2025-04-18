import React from 'react';
import './Header.css';
function Header(){
    return(
    <>
     <header id='header'>
        <div id='card'>
            <h1 id='h1'>Influencer</h1>
            
            <div id='img'>
                <img id='imgg' src="https://yt3.googleusercontent.com/ytc/AIdro_l_ZVjAAw4gugjNgezuo4AXgyF_pmC-jCI2xVpS9_prB_-j=s900-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
                <h1 id='nome'>
                Camilla Loures
                </h1>
                <h3 id='p'>
                Influencer Digital, trazendo entreterimento para meu publico
                </h3>
                <div id='link'></div>
                    <button id='botao1'> <a id='a1' href="https://www.instagram.com/camilaloures/?hl=en" target="_blank">Instagram</a></button>

                    <button id='botao2'> <a  id='a2' href="https://www.youtube.com/user/camilaloures" target="_blank">YouTube</a></button>

                    <button id='botao3'> <a id='a3' href="https://www.tiktok.com/@camilaloures?lang=en" target="_blank">TikTok</a></button>

                    
            
        </div>
     </header>
    </>
    );
};

export default Header;