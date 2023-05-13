import React, { useState } from 'react'
import { useSprings, animated, to as interpolate, useTrail, a, useSpring  } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from './styles.module.css'

const cardsFull = [
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.33%20AM.jpeg?alt=media&token=c6b47eb2-dd0e-4a78-a173-ce057e89d5fe',
    title: 'No zorra',
    description: 'Si algún momento pensaste que no te amaba, pues... No zorra! TE AMO MUCHO MI AMOR <3',
    color: 'deeppink'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/parado.jpeg?alt=media&token=8964a3ee-7a2e-4eea-ac9d-380dbab791ec',
    title: 'Momento Humilde',
    description: 'HAHAHAHAHAHAHA',
    color: 'lemonchiffon'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/hermosa-escaleras.jpeg?alt=media&token=5f26ca74-70c1-422b-a8b9-7e208b052852',
    title: '¡Es mi galeria!',
    description: 'No me importa cuantas veces te ponga, es mi galería presumiré tu belleza las veces que haga falta',
    color: 'aquamarine'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.31%20AM.jpeg?alt=media&token=f097e9d6-4d30-4c61-bb73-ab47eacefed1',
    title: 'No era broma...',
    description: 'Amo retratarte, pues haces de los espacios más comunes los más hermosos y maravillosos',
    color: 'gold'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/bosque-nubado.jpeg?alt=media&token=02959c08-6709-4573-aefa-d4b962687967',
    title: 'Mi hada encantada',
    description: 'En ese bosque nublado, sin duda eras el hada que más brillaba',
    color: 'aquamarine'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.30%20AM.jpeg?alt=media&token=58626eaa-1450-4353-9e16-820fbf311446',
    title: 'La tercera es la vencida',
    description: 'Huf, una tercera primera vez haciendonos el skin-care nunca hace daño',
    color: 'lemonchiffon'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/foto-cuerpocompleto.jpeg?alt=media&token=a5b652dc-ce24-4351-a955-e30726467a2b',
    title: 'Una segunda primera vez',
    description: 'Y sí, esta fue nuestra segunda primera vez... Con una foto de cuerpo completo',
    color: 'deeppink'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.46.28%20AM.jpeg?alt=media&token=e510119f-3537-4d7b-b3cd-a2ca9ba8d894',
    title: 'El resumén de todo en una foto',
    description: 'Yo un amor, tú con la mirada que juzga HEHE',
    color: 'aquamarine'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/cars.jpeg?alt=media&token=94af1fc7-9799-4963-bb4d-6c00096ded1a',
    title: 'Un cumpleaños a las carreras',
    description: 'El mejor cumpleaños que tuve, con conducción limpia y gran habilidad',
    color: 'darksalmon'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.28%20AM.jpeg?alt=media&token=93f260ed-f0f2-4d59-87f8-ceb1ff573975',
    title: 'Altura llena de emoción',
    description: 'Vimos tanto el cielo como el infierno el mismo día (tu entiendes la referencia haha)',
    color: 'deeppink'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.27%20AM.jpeg?alt=media&token=1335bcd8-c9e0-4cc1-8ee0-ea3d4e1a720b',
    title: 'Sombras gemelas',
    description: 'Ese mismo día inmortalizamos un pedacito de nuestras sombras',
    color: 'gold'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/mundial.jpeg?alt=media&token=658506a8-12e6-4029-98f4-ab20bac975b8',
    title: '!Siuuuuuuuu¡',
    description: 'Nuestro primer mundial juntos, dale leooooooo campeooon!',
    color: 'aquamarine'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.26%20AM.jpeg?alt=media&token=c23df66e-e7ba-496e-bc63-df0b3d5d6710',
    title: '!Picaso agarrate¡',
    description: 'Ese día hicimos de nuestro cuadro una obra maestra',
    color: 'lemonchiffon'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.36.36%20AM.jpeg?alt=media&token=2e87ebe3-6592-488d-84af-c7e0bc13572e',
    title: '!Dios mio¡',
    description: '¿Acaso no hay una foto en la que no salgas hermosa?',
    color: 'gold'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.25%20AM.jpeg?alt=media&token=3b5b6d6f-fa84-4070-af8e-de4199807b00',
    title: 'Noche maravillosa en el Jardín botanico',
    description: 'Ni la lluvia nos detuvo ese día, conocer matas y piedras fue mágico a tu lado',
    color: 'lightgreen'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.24%20AM.jpeg?alt=media&token=4b744dcc-10d7-4d08-adf5-c34b62d96337',
    title: 'Momento...',
    description: 'Ese mismo día, aprendí que me encantaba retratarte a más no poder <3',
    color: 'lemonchiffon'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.23%20AM.jpeg?alt=media&token=311694d3-e076-42e9-85b2-057cb6ba006e',
    title: 'Un primer mes apasionado',
    description: 'Recuerdo como si fuera ayer ese día, me transporta a mi lugar feliz',
    color: 'darksalmon'
  },
  {
    image: 'https://firebasestorage.googleapis.com/v0/b/shopping-cart-dev-61d16.appspot.com/o/WhatsApp%20Image%202023-05-13%20at%2012.20.22%20AM.jpeg?alt=media&token=9f08bfde-b4d4-446a-97fd-b196082222a0',
    title: 'Nuestra primera foto',
    description: 'Después de meses, por fin accedí a tomarme una foto contigo :D',
    color: 'lemonchiffon'
  },
  {
    isMain: true,
    title: 'Este es nuestro recorrido de amor',
    description: 'Desliza hacía los lados las cartas para pasar de carta :D... Espero lo disfrutes mi amor tanto como yo haciendolo',
    color: 'lemonchiffon'
  },
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cardsFull.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cardsFull.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y }}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            {
              cardsFull[i].isMain ? (
               <>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#191825', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 20px 0 20px', flexDirection: 'column', border: '10px solid crimson', borderRadius: '10px' }}>
                  <h1 className={styles.homeTitle}>{cardsFull[i].title}</h1>
                  <p className={styles.homeDesc}>{cardsFull[i].description}</p>
                </div>
               </>
              ) : (
                <><div className={styles.img} style={{ backgroundImage: `url(${cardsFull[i].image})`, borderBottom: `10px solid ${cardsFull[i].color}` }} /><div style={{ width: '100%', backgroundColor: '#191825', color: cardsFull[i].color, padding: '5px 0 5px 0' }}>
                    <h1 className={styles.title}>{cardsFull[i].title}</h1>
                  </div><div style={{ padding: '0 10px 0 10px' }}>
                      <p className={styles.desc}>{cardsFull[i].description}</p>
                    </div></>
              )
            }
            
          </animated.div>
        </animated.div>
      ))}
    </>
  )
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
        <span>Un viaje</span>
        <span>Corto</span>
        <span>De</span>
        <span>Amor</span>
      </Trail>
    </div>
  )
}

export default function App() {
  const [step, setStep] = useState(0);
  const [props] = useSpring(
    () => ({
      config: {
        tension: 180, friction: 12
      },
      from: { opacity: 0, y: 0 },
      to: { opacity: 1, y: -30  },
    }),
    []
  )

  return (
    <>
      {
        step === 0 ? (
          <InitialHome setStep={setStep} />
        ) : (
          <div className={styles.containerCards}>
            <Deck />
          </div>
        )
      }
      <animated.div style={props}>
        <div className={styles.badge}>
          Para mi lorita preciosa
          <br />
          <b>Feliz 8 meses amor</b>
        </div>
      </animated.div>
    </>
  )
}
