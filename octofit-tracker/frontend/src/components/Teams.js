import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://urban-orbit-x77gvpgvj63pvgg-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Teams</h2>
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{team.members && team.members.map(member => member.username).join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-outline-primary mt-3" disabled>Add Team (Coming Soon)</button>
      </div>
    </div>
  );
}

export default Teams;
