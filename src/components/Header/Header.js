import React from 'react';
import './Header.css'
import bgImage from '../images/bg-header.jpg'

const Header = (props) => {
    const Heading = props.isTeamTitle;
    const TeamLogo = props.teamLogo;
    let MainHeading;
    //condition
    if(Heading){
        MainHeading = <img style={{width: '20%'}} className='centered' src={TeamLogo} alt='Team Logo'></img>
    }
    else{
        MainHeading = <h1 className='centered'>TopNotch Sports</h1>
    }
    
    return (
        <div className='container'>
            <img className='header-img' src={bgImage} alt=""/>
            {MainHeading}
        </div>
    );
};

export default Header;