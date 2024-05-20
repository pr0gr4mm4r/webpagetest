import React from 'react'
import logo from './webseitenportrait.jpeg'

export default function Personal() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <img src={logo} className="img-fluid" alt="Portrait von David" />
        </div>
        <div className="col-md-8" >
          <h2>Über mich</h2>
          <p>Hallo, mein Name ist David und ich bin von Beruf Systemadministrator. Neben meiner regulären Tätigkeit als Systemadministrator biete ich meine Dienstleistungen auch als Freelancer an. Ich habe Erfahrung in verschiedenen Bereichen der IT-Infrastruktur und -Administration.</p>
          <p>Einige meiner bisherigen Kunden sind Manimedia und Korrektur.de, für die ich erfolgreich Projekte umgesetzt und IT-Lösungen bereitgestellt habe. Ich bin bestrebt, meinen Kunden stets die bestmöglichen Lösungen anzubieten und sie bei der Optimierung ihrer Systeme zu unterstützen.</p>
          <p>Meine Leidenschaft für Technologie und mein Engagement für eine zuverlässige und effiziente IT-Infrastruktur treiben mich an, kontinuierlich mein Wissen zu erweitern und mich neuen Herausforderungen zu stellen.</p>
          <p>Wenn Sie Interesse an meinen Dienstleistungen haben oder Fragen haben, zögern Sie nicht, mich zu kontaktieren. Ich freue mich darauf, mit Ihnen zusammenzuarbeiten!</p>
        </div>
      </div>
    </div>
  )
}
