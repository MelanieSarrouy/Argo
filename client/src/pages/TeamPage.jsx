import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddForm from '../components/AddForm'
import TeamList from '../components/TeamList'
import UpdateForm from '../components/UpdateForm'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const TeamPage = () => {
  const [team, setTeam] = useState([])
  const [add, setAdd] = useState(false)
  const [member, setMember] = useState()
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/argonautes')
      const json = await data.json()
      setTeam(json)
    }
    fetchData()
  }, [add])

  return (
    <main>
      {modal && (
        <div className="modal">
          <div className="modal__content">
            <h2>Mettre à jour un(e) Argonaute</h2>
            <hr />
            <UpdateForm setAdd={setAdd} add={add} member={member} setModal={setModal} />
            <div className="modal__content--close" onClick={() => setModal(false)}>
              <IoIosCloseCircleOutline />
            </div>
          </div>
        </div>
      )}
      <h1>Les Argonautes</h1>
      <section className="argonautes__add">
        <h2>Ajouter un(e) Argonaute</h2>
        <hr />
        <AddForm setAdd={setAdd} add={add} />
      </section>
      <section className="argonautes__list">
        <h2>Membres de l'équipage</h2>
        <hr />
          <TeamList
            setAdd={setAdd}
            add={add}
            team={team}
            setMember={setMember}
            setModal={setModal}
          />
      </section>
    </main>
  )
}

export default TeamPage
