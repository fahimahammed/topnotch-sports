import { useEffect, useState } from 'react';
import Header from '../Header/Header'
import TeamContainer from '../TeamContainer/TeamContainer'

const Home = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain')
      .then(res => res.json())
      .then(data => setTeam(data.teams));
    }, [])

    //slice data..(first 15 team)
    const Team15 = team.slice(0, 15);
    
    return (
        <div>
            <Header></Header>
            <TeamContainer team={Team15}></TeamContainer>
            
        </div>
    );
};

export default Home;