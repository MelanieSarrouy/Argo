import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/ship at the sea.jpg'
import ship from '../assets/argo-3.png'

const HomePage = () => {
  return (
    <main>
      <section className="welcome">
        <img src={hero} alt="bateau sur l'eau" className="welcome__img" />
        <h1 className="welcome__title">Bienvenue sur L'Argo</h1>
      </section>
      <section className="history">
        <div className="firstDiv">
          <div className="firstDiv__component">
            <div>
              <h2 className="history__title">L'Argo</h2>
              <p className="history__txt">
                Dans la mythologie grecque, l'<span className="argo">Argo</span> était un navire
                construit avec l'aide des dieux.
                <br />
                Jason et les Argonautes ont navigué sur l'<span className="argo">Argo</span> d'
                Iolcos à Colchis pour récupérer la Toison d'or.
                <br />
                La plupart des récits nomment le navire d'après son constructeur, Argus. <br />
                Cicéron a suggéré qu'il a été nommé d'après les « Argiens », un terme couramment
                utilisé par Homère pour le peuple grec d'Argos. <br />
                Diodorus Siculus a rapporté que certains pensaient que le nom était dérivé d'un
                ancien mot grec signifiant «rapide», <br />
                ce qui aurait pu indiquer que le navire était conçu pour se déplacer rapidement.
              </p>
            </div>
            <div>
              <img src={ship} alt="ship" />
            </div>
          </div>

          <div className="firstDiv__component firstDiv__component--blue">
            <div>
              <h2 className="history__title">Construction de l'Argo</h2>
              <p className="history__txt">
                l'<span className="argo">Argo</span> a été construit par le constructeur naval
                Argus, et son équipage était spécialement protégé par la déesse Héra.
                <br />
                La meilleure source du mythe est l'Argonautica d'Apollonius Rhodius.
                <br />
                Argus aurait planifié ou construit le navire avec l'aide d'Athéna.
                <br />
                Le navire a été construit pour voyager en haute mer et conçu pour se déplacer
                rapidement avec l'aide d'une voile.
                <br />
                Apollodorus a déclaré que le navire avait cinquante rames, qui étaient toutes
                occupées par les Argonautes.
                <br />
                Le bateau a été construit avec une variété de bois provenant de toute la région de
                la Grèce.
                <br />À Médée , Euripide mentionne que les avirons étaient fabriqués à partir de
                pins autour du mont Pélion. <br />
                Catulle a mentionné plus tard que le bateau était fait de bois de sapin. <br />
                La proue du navire a également été fabriquée avec un morceau spécial de chêne de
                Dodone, une zone sacrée pour Zeus.
                <br /> On disait que le chêne était capable de parler avec une voix humaine et
                pouvait dire des oracles.
                <br />
                Selon Apollodore et Catulle, l'
                <span className="argo">Argo</span> a été le premier navire à naviguer sur les mers
                et a été favorisé par les dieux. <br />
                Le dieu Dionysius n'a pas appelé l'
                <span className="argo">Argo</span> le premier navire, mais plutôt un navire bien
                conçu.
                <br />
                Certaines sources déclarent que puisque les gens n'avaient pas vu de navire avant,
                ils ont décrit l'<span className="argo">Argo</span> comme un monstre.
                <br />
                L'<span className="argo">Argo</span> a été construit en Thessalie autour de la
                région du Mont Pélion. Sextus Propertius a prétendu qu'il est parti du port de
                Pagasa.
              </p>
            </div>
          </div>
        </div>
        <div className="secondDiv">
          <div className="secondDiv__component">
            <h2 className="history__title">Le voyage d'Argo</h2>
            <p className="history__txt">
              C'est Athéna qui a appris à Tiphys à attacher les voiles au mât, car il était le
              timonier et aurait besoin de connaître le fonctionnement du navire. <br />
              D'autres sources disent qu'il avait déjà été marin avec deux autres membres, c'est
              pourquoi il a été choisi pour diriger le bateau. <br />
              On a dit aussi que Lynceus a aidé à guider le navire parce qu'il avait la grande vue
              pendant la nuit et le jour. <br />
              Le navire transportait suffisamment de fournitures, telles que des vases contenant de
              l'eau, pour l'équipage collectif et a duré quatre jours avant de devoir faire le
              plein.
              <br />
              D'autres articles, comme un trépied en bronze, ont été transportés à bord.
              <br /> Hérodote a affirmé que le trépied en bronze avait été donné à Triton après que
              les Argonautes se soient perdus dans le lac Tritonis et aient eu besoin d'aide. <br />
              On a dit que le bateau devait être transporté sur terre pendant 12 jours pour
              reprendre sa route. <br /> On disait que l'<span className="argo">Argo</span> était
              aimé des Néréides , qui, aux côtés de Triton, ont aidé à guider le navire à des
              moments dangereux du voyage des Argonautes.
            </p>
          </div>
        </div>
      </section>
      <p>
        source :
        <Link href="https://en.wikipedia.org/wiki/Argo" target="_blank" rel="noopener noreferrer">
          Wikipedia
        </Link>
      </p>
    </main>
  )
}

export default HomePage
