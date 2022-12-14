import React from 'react'
import { useState } from 'react'

const AddForm = ({ setAdd, add }) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [role, setRole] = useState('')
    const [qualification, setQualification] = useState('')
    const [error, setError] = useState(false)

    const handleChangeName = (e) => {
      setError(false)
      setName(e.target.value)
    }
    const handleChangeAge = (e) => {
      setAge(e.target.value)
    }
    const handleChangeRole = (e) => {
      setRole(e.target.value)
    }
    const handleChangeQualification = (e) => {
      setQualification(e.target.value)
    }
    const handleSubmit = async (e) => {
      e.preventDefault()
      if (name !== '') {
        await addArgo({ name: name, age: age, role: role, qualification: qualification })
        setName('')
        setAge(0)
        setRole('')
        setQualification('')
      } else {
        setError(true)
      }
    }

  const addArgo = async (values) => {
    await fetch('/api/argonautes', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(values),
    })
    setAdd(!add)
  }

  return (
    <form action="" method="get" className="form">
      {error && (
        <div className="form__div--error">
          <p>Merci de renseigner le nom de l'Argonaute</p>
        </div>
      )}
      <div className="form__div">
        <label htmlFor="name" name="name" className="form__div__label">
          Nom de l'Argonaute :
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__div__input"
          placeholder="Name"
          required={true}
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <div className="form__div">
        <label htmlFor="age" name="age" className="form__div__label">
          Age de l'Argonaute :
        </label>
        <input
          type="number"
          name="age"
          id="age"
          className="form__div__input"
          min={12}
          max={120}
          placeholder={18}
          value={age}
          onChange={handleChangeAge}
        />
      </div>
      <div className="form__div">
        <label htmlFor="role" name="role" className="form__div__label">
          R??le de l'Argonaute :
        </label>
        <input
          type="text"
          name="role"
          id="role"
          className="form__div__input"
          placeholder="Capitaine"
          value={role}
          onChange={handleChangeRole}
        />
      </div>
      <div className="form__div">
        <label htmlFor="qualification" name="qualification" className="form__div__label">
          Caract??ristiques de l'Argonaute :
        </label>
        <input
          type="text"
          name="qualification"
          id="qualification"
          className="form__div__input"
          placeholder="Force, courage, volont??, cupidit??"
          value={qualification}
          onChange={handleChangeQualification}
        />
      </div>
      <div className="form__div">
        <button type="submit" className="form__div__button" onClick={handleSubmit}>
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default AddForm
