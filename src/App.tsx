import React from 'react';
import './App.css';

// import info from file
import teamInfo from './CollegeBasketballTeams.json';

// define the type for each team in the JSON file
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

// function to introduce user to the site
function Intro() {
  return <h1>March Madness Special: NCAA Basketball Teams</h1>;
}

// component for a single team
class TeamCard extends React.Component<Team> {
  render() {
    // select attributes to display
    const { school, name, city, state } = this.props;

    // return info for single team
    return (
      <div>
        <h2>{school}</h2>
        <h3>Mascot Name: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
        <br />
      </div>
    );
  }
}

// function to render a list of teams
function TeamList() {
  // access the 'teams' array from the imported JSON data
  const teams = teamInfo.teams;

  // return list of all teams
  return (
    <div>
      {teams.map((oneTeam: Team, index: number) => (
        <TeamCard key={index} {...oneTeam} />
      ))}
    </div>
  );
}

// app component
function App() {
  // return two visual functions (intro, teamlist)
  return (
    <div className="App">
      <Intro />
      <TeamList />
    </div>
  );
}

export default App;
