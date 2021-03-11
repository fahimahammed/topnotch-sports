import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TeamCard.css';

const TeamCard = (props) => {
    const {strTeamBadge, strTeam, idTeam} = props.team;
    return (
        <div>
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Img id='center' variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports type: Football
                    </Card.Text>
                    <Link to={`/team/${idTeam}`}><Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};


export default TeamCard;