import React from 'react'
import { useState } from 'react'

const AddForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [role, setRole] = useState('')
  const [qualification, setQualification] = useState('')

  return (
    <form action="" method="get" className="form">
      <div className="form__div">
        <label htmlFor="name" name="name" required={true} className="form__div__label">
          Nom de l'Argonaute :
        </label>
        <input type="text" name="name" id="name" className="form__div__input" placeholder="Polux" />
      </div>
      <div className="form__div">
        <label htmlFor="age" name="age" required={true} className="form__div__label">
          Age de l'Argonaute :
        </label>
        <input
          type="number"
          name="age"
          id="age"
          className="form__div__input"
          min={0}
          max={120}
          placeholder={18}
        />
      </div>
      <div className="form__div">
        <label htmlFor="role" name="role" required={true} className="form__div__label">
          Rôle de l'Argonaute :
        </label>
        <input
          type="text"
          name="role"
          id="role"
          className="form__div__input"
          placeholder="Capitaine"
        />
      </div>
      <div className="form__div">
        <label
          htmlFor="qualification"
          name="qualification"
          required={true}
          className="form__div__label"
        >
          Caractéristiques de l'Argonaute :
        </label>
        <input
          type="text"
          name="qualification"
          id="qualification"
          className="form__div__input"
          placeholder="Force, courage, volonté, cupidité"
        />
      </div>
      <div className="form__div">
        <button type="submit" onClick={() => console.log('ajouté')} className="form__div__button">
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default AddForm
