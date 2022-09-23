import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddForm from '../components/AddForm'
import TeamList from '../components/TeamList'

const TeamPage = () => {
  const [team, setTeam] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('/api/argonautes')
      const json = await data.json()
      console.log(json)
      setTeam(json)
    }
    fetchData()
  }, [])

  return (
    <main>
      <h1>Les Argonautes</h1>
      <h2>Ajouter un(e) Argonaute</h2>
      <AddForm />
      <h2>Membres de l'équipage</h2>
      <TeamList team={team} />
    </main>
  )
}

export default TeamPage
