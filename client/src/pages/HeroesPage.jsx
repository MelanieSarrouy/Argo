import React from 'react'
import hero1 from '../assets/hero-ares.png'
import hero2 from '../assets/hero-artemis.png'
import hero3 from '../assets/hero-hercule.png'
import { ImQuotesLeft } from 'react-icons/im'
import { ImQuotesRight } from 'react-icons/im'

const heros = [
  { img: hero1, name: 'Ares', quote: 'We shall have fun' },
  { img: hero2, name: 'Artemis', quote: 'Know thyself' },
  {
    img: hero3,
    name: 'Hercules',
    quote:
      'I am on my way. I can go the distance. I don\'t care fhow far, somehow I will be stron',
  },
]

const HeroesPage = () => {
  return (
    <div>
      <h1>Nos héros</h1>
      <section className="heros">
        {heros.map((hero, index) => (
          <article key={index} className="hero">
            <img src={hero.img} alt={hero.name} className="hero__img" />
            <h2 className="hero__title">{hero.name}</h2>
            <div className="hero__quote">
              <ImQuotesLeft />
              <p>{hero.quote}</p>
              <ImQuotesRight />
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default HeroesPage
