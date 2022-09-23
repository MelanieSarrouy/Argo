import React from 'react';

const TeamList = ({ team }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Age</th>
          <th>Rôle</th>
          <th>Caractéristiques</th>
        </tr>
      </thead>
      <tbody>
        {team.map((member) => (
          <tr key={member._id}>
            <td>{member.name}</td>
            <td>{member.age}</td>
            <td>{member.role}</td>
            <td>{member.qualification}</td>
            <td>Edit</td>
            <td>Supprimer</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default TeamList;