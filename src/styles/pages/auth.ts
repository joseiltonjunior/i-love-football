import { styled } from '..'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 600px',

  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  transition: 'all 0.2s',

  aside: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '$gray800',
    height: 'calc(100vh - 8.4rem)',

    img: {
      width: 'auto',
      height: 'auto',

      objectFit: 'contain',
      right: 0,
    },
  },

  '@media (max-width: 1000px)': {
    gridTemplateColumns: '1fr',
    height: 'calc(100vh - 8.4rem)',
    padding: '1rem',

    main: {
      h3: {
        fontSize: '$lg',
      },
    },

    aside: {
      display: 'none',
    },
  },
})

export const Main = styled('main', {
  margin: '0 auto',
  background: '$gray800',
  padding: '1.5rem',
  borderRadius: 8,

  h3: {
    fontSize: '$xl',
  },

  a: {
    textAlign: 'center',
    textDecoration: 'none',
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  div: {
    maxWidth: 500,
    gap: '1rem',
    display: 'flex',
    flexDirection: 'column',

    button: {
      marginTop: '2rem',
    },
  },
})
