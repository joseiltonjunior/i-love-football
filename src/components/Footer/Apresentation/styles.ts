import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: '$gray800',
  },

  img: {
    background: '$gray900',
    borderRadius: 6,
  },

  '@media (min-width: 900px)': {
    maxWidth: 400,
  },
})
