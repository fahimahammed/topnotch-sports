import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapPin, faMarsStroke } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './TeamInfo.css';
import Header from '../Header/Header';
import MaleTeamImage from '../images/male.png';
import FemaleTeamImage from '../images/female.png';

const TeamInfo = (props) => {
    // console.log(props.team);
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strDescriptionES, strStadiumDescription, strFacebook, strInstagram, strYoutube } = props.team;
    const isTeamTitle = true;
    let TeamImage;
    if(strGender === 'Male'){
        TeamImage = <img className='TeamImage' src={MaleTeamImage} alt="Team Image" />
    }
    else{
        TeamImage = <img className='TeamImage' src={FemaleTeamImage} alt="Team Image" />
    }
    return (
        <div>
            <Header isTeamTitle = {isTeamTitle} teamLogo ={strTeamBadge} ></Header>
            <div className='team-container'>
            <div className='body-style'>
                <div className='TeamContainer'>
                    <Container>
                        <Row>
                            <Col sm={7} className='textStyle'>
                                <h2>{strTeam} </h2>
                                <p><FontAwesomeIcon icon={faMapPin} /> Founded: {intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </p>
                                <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: Football</p>
                                <p><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender} </p>
                                
                            </Col>
                            <Col sm={5}>
                                {TeamImage}
                            </Col>
                        </Row>
                    </Container>
                </div>
                <p className='TeamDescription'> {strDescriptionEN} </p>
                <p className='TeamDescription'> {strDescriptionES} </p>
                <p className = 'TeamDescription'> {strStadiumDescription} </p>
                <div className='social-container'>
                    <a href={`https://${strFacebook}`} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size='2x' className='facebook icon' /></a>
                    <a href={`https://${strInstagram}`} target= '_blank' rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' className='instagram icon' /></a>
                    <a href={`https://${strYoutube}`} target= '_blank' rel="noreferrer"><FontAwesomeIcon icon={faYoutube} size='2x' className='youtube icon' /></a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TeamInfo;