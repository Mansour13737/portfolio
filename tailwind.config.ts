import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
