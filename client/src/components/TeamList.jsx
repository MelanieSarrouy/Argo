import React from 'react'
import { MdEdit } from 'react-icons/md'
import { MdDeleteForever } from 'react-icons/md'

const TeamList = ({ setAdd, add, team, setMember, setModal }) => {
  const handleEdit = (member) => {
    setMember(member)
    setModal(true)
    window.scrollTo(0, 0)
  }
  const handleDelete = async (member) => {
    await fetch(`/api/argonautes/${member}`, {
      method: 'DELETE',
    })
    setAdd(!add)
  }
  return (
    <table>
      <thead>
        <tr>
          <th>N°</th>
          <th>Nom</th>
          <th>Age</th>
          <th>Rôle</th>
          <th>Caractéristiques</th>
          <th colSpan={2}>actions</th>
        </tr>
      </thead>
      <tbody>
        {team.map((member, index) => (
          <tr key={member._id}>
            <td className="td">{index + 1}</td>
            <td className="td">{member.name}</td>
            <td className="td">{member.age === 0 ? '-' : member.age}</td>
            <td className="td">{member.role}</td>
            <td className="td">{member.qualification}</td>
            <td className="td__button">
              <div className="td__button__div" onClick={() => handleEdit(member)}>
                <MdEdit />
              </div>
            </td>
            <td className="td__button">
              <div className="td__button__div" onClick={() => handleDelete(member._id)}>
                <MdDeleteForever />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TeamList
