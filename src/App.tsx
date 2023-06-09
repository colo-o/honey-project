import React, { useState } from 'react'
import {useTrail, a  } from '@react-spring/web'

import styles from './styles.module.css'

const Tickets = () => {
  return <>
    <div className={styles.ticketHeader}>
      <img src="https://www.nme.com/wp-content/uploads/2022/05/NME%E2%80%93MAneskin-EUROVISION%E2%80%93Credit-Fabio-Germinario-7_2000.jpg" alt="img" style={{ width: '100%', height: '100%', zIndex: 3, position: 'absolute', left: 0, objectFit: 'cover'}}></img>
    </div>
<main className={styles.ticketSystem}>
   <div className={styles.top}>
   <div className={styles.printer} />
   </div>
   <div className={styles.receiptsWrapper}>
      <div className={styles.receipts}>
         <div className={styles.receipt}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <img src="https://d1fdloi71mui9q.cloudfront.net/K6mZ0B3ITX6pWdoS8cbl_5lm8fAkF6XFutMRj" alt="img" className={styles.maneLogo}></img>
              <div className={styles.route}>
                <h2>RUSH WORLD TOUR!</h2>
              </div>
            </div>
            <div className={styles.details}>
               <div className={styles.item}>
                  <span>Lugar</span>
                  <h3>Movistar Arena</h3>
               </div>
               <div className={styles.item}>
                  <span>Localidad</span>
                  <h3>PLATEA</h3>
               </div>
               <div className={styles.item}>
                  <span>Apertura de puertas</span>
                  <h3>06:30 PM</h3>
               </div>
               <div className={styles.item}>
                  <span>Hora</span>
                  <h3>09:00</h3>
               </div>
               <div className={styles.item}>
                  <span>Fecha</span>
                  <h3>24/10/2023</h3>
               </div>
               <div className={styles.item}>
                  <span>Puerta No.</span>
                  <h3>5</h3>
               </div>
            </div>
         </div>
         <div className={`${styles.qrCode} ${styles.receipt}`}>
            <svg className={styles.qr} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.938 29.938">
               <path d="M7.129 15.683h1.427v1.427h1.426v1.426H2.853V17.11h1.426v-2.853h2.853v1.426h-.003zm18.535 12.83h1.424v-1.426h-1.424v1.426zM8.555 15.683h1.426v-1.426H8.555v1.426zm19.957 12.83h1.427v-1.426h-1.427v1.426zm-17.104 1.425h2.85v-1.426h-2.85v1.426zm12.829 0v-1.426H22.81v1.426h1.427zm-5.702 0h1.426v-2.852h-1.426v2.852zM7.129 11.406v1.426h4.277v-1.426H7.129zm-1.424 1.425v-1.426H2.852v2.852h1.426v-1.426h1.427zm4.276-2.852H.002V.001h9.979v9.978zM8.555 1.427H1.426v7.127h7.129V1.427zm-5.703 25.66h4.276V22.81H2.852v4.277zm14.256-1.427v1.427h1.428V25.66h-1.428zM7.129 2.853H2.853v4.275h4.276V2.853zM29.938.001V9.98h-9.979V.001h9.979zm-1.426 1.426h-7.127v7.127h7.127V1.427zM0 19.957h9.98v9.979H0v-9.979zm1.427 8.556h7.129v-7.129H1.427v7.129zm0-17.107H0v7.129h1.427v-7.129zm18.532 7.127v1.424h1.426v-1.424h-1.426zm-4.277 5.703V22.81h-1.425v1.427h-2.85v2.853h2.85v1.426h1.425v-2.853h1.427v-1.426h-1.427v-.001zM11.408 5.704h2.85V4.276h-2.85v1.428zm11.403 11.405h2.854v1.426h1.425v-4.276h-1.425v-2.853h-1.428v4.277h-4.274v1.427h1.426v1.426h1.426V17.11h-.004zm1.426 4.275H22.81v-1.427h-1.426v2.853h-4.276v1.427h2.854v2.853h1.426v1.426h1.426v-2.853h5.701v-1.426h-4.276v-2.853h-.002zm0 0h1.428v-2.851h-1.428v2.851zm-11.405 0v-1.427h1.424v-1.424h1.425v-1.426h1.427v-2.853h4.276v-2.853h-1.426v1.426h-1.426V7.125h-1.426V4.272h1.426V0h-1.426v2.852H15.68V0h-4.276v2.852h1.426V1.426h1.424v2.85h1.426v4.277h1.426v1.426H15.68v2.852h-1.426V9.979H12.83V8.554h-1.426v2.852h1.426v1.426h-1.426v4.278h1.426v-2.853h1.424v2.853H12.83v1.426h-1.426v4.274h2.85v-1.426h-1.422zm15.68 1.426v-1.426h-2.85v1.426h2.85zM27.086 2.853h-4.275v4.275h4.275V2.853zM15.682 21.384h2.854v-1.427h-1.428v-1.424h-1.427v2.851zm2.853-2.851v-1.426h-1.428v1.426h1.428zm8.551-5.702h2.853v-1.426h-2.853v1.426zm1.426 11.405h1.427V22.81h-1.427v1.426zm0-8.553h1.427v-1.426h-1.427v1.426zm-12.83-7.129h-1.425V9.98h1.425V8.554z"/>
            </svg>
            <div className={styles.description}>
               <h2>Feliz cumple mi amor</h2>
               <p>Espero disfrutes mucho tu regalo </p>
            </div>
         </div>
      </div>
   </div>
</main>
  </> 
}

const Trail = ({ open, children }: any) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 30,
    height: open ? 180 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

const InitialHome = ({ setStep }: any) => {
  const [open, set] = useState(true)

  const changeStep = () => {
    set(state => false);

    setTimeout(() => {
      setStep(1);
    }, 1000)
  }

  return (
    <div className={styles.container} onClick={() => changeStep()}>
      <Trail open={open}>
        <span>Feliz</span>
        <span>Cumple</span>
        <span>Choco-</span>
        <span>rramito</span>
      </Trail>
    </div>
  )
}

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      {
        step === 0 ? (
          <InitialHome setStep={setStep} />
        ) : (
          <div className={styles.containerCards}>
            <Tickets />
          </div>
        )
      }
    </>
  )
}
