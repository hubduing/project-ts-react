import React from 'react'
import './Partners.scss'
import Partners1 from '../../img/partners/partners-1.png'
import Partners2 from '../../img/partners/partners-2.png'
import Partners3 from '../../img/partners/partners-3.png'
import Partners4 from '../../img/partners/partners-4.png'
import Partners5 from '../../img/partners/partners-5.png'

const Partners: React.FC = () => {
  return (
    <div>
      <div className="partners">
        <div className="partners__wrapper">
          <img src={Partners1} alt="Partners1"/>
          <img src={Partners2} alt="Partners2"/>
          <img src={Partners3} alt="Partners3"/>
          <img src={Partners4} alt="Partners4"/>
          <img src={Partners5} alt="Partners5"/>
        </div>
      </div>
    </div>
  )
}
export default Partners