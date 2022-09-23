import React from 'react'
import { useState } from 'react'

const UpdateForm = ({ setAdd, add, setModal, member }) => {
  const [name, setName] = useState(member.name)
  const [age, setAge] = useState(member.age)
  const [role, setRole] = useState(member.role)
  const [qualification, setQualification] = useState(member.qualification)

  const handleChangeName = (e) => {
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
    await updateArgo({ name: name, age: age, role: role, qualification: qualification })
    setName(member.name)
    setAge(member.age)
    setRole(member.role)
    setQualification(member.qualification)
  }

  const updateArgo = async (values) => {
    await fetch(`/api/argonautes/${member._id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(values),
    })
    setAdd(!add)
    setModal(false)
  }

  return (
    <form action="" method="patch" className="form">
      <div className="form__div">
        <label htmlFor="name" name="name" className="form__div__label">
          Nom de l'Argonaute :
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__div__input"
          placeholder={name}
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
          placeholder={age}
          value={age}
          onChange={handleChangeAge}
        />
      </div>
      <div className="form__div">
        <label htmlFor="role" name="role" className="form__div__label">
          Rôle de l'Argonaute :
        </label>
        <input
          type="text"
          name="role"
          id="role"
          className="form__div__input"
          placeholder={role}
          value={role}
          onChange={handleChangeRole}
        />
      </div>
      <div className="form__div">
        <label htmlFor="qualification" name="qualification" className="form__div__label">
          Caractéristiques de l'Argonaute :
        </label>
        <input
          type="text"
          name="qualification"
          id="qualification"
          className="form__div__input"
          placeholder={qualification}
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

export default UpdateForm
