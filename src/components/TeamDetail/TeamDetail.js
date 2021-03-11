import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamInfo from '../TeamInfo/TeamInfo';

const TeamDetail = () => {
    const {teamId} = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    useEffect ( () => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamDetail(data.teams))
    },[teamId])
    
    return (
        <div>
            {
                teamDetail.map(team => <TeamInfo team = {team} key={teamId}></TeamInfo>)
            }
        </div>
    );
};

export default TeamDetail;