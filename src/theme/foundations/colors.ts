const customColors = {
  gray: {
    1000: '#333333',
    700: '#989898',
    500: '#C4C4C4',
    300: '#E4E4E4',
    200: '#F3F3F3',
    100: '#F9F9F9',
  },
  orange: {
    600: '#FF8615',
    300: '#F5E6D7',
  },
  teal: {
    1000: '#001315',
    900: '#001F24',
    800: '#003238',
    700: '#2E4D50',
    600: '#35595D',
    400: '#5D8180',
    200: '#BDD4D6',
  },
  popTeal: '#00F4C5',
}

export const brandColors = {
  teal: customColors.teal[800],
  orange: customColors.orange[600],
}

export const colors = {
  brand: brandColors,
  grey: customColors.gray,
  ...customColors,
}