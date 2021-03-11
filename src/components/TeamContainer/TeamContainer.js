import React from 'react';
import TeamCard from '../TeamCard/TeamCard';
import './TeamContainer.css';

const TeamContainer = (props) => {
    const teams = props.team;
    //console.log(teams);
    return (
        <div className='team-container'>
            <div className="card-style">
            {
                teams.map(team => <TeamCard team={team}></TeamCard>)
            }
            </div>
        </div>
    );
};

export default TeamContainer;