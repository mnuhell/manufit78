module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    theme: {
        colors: {
            'fit-dark': {
                '50': '#F4F4F6',
                '100': '#EAEAEC',
                '200': '#CACAD0',
                '300': '#AAABB3',
                '400': '#6A6B7B',
                '500': '#2A2C42',
                '600': '#26283B',
                '700': '#191A28',
                '800': '#13141E',
                '900': '#0D0D14',
                },
            'fit-white': {
                '50': '#FBFBFC',
                '100': '#F6F8FA',
                '200': '#EAEDF2',
                '300': '#DDE3EA',
                '400': '#C3CDDA',
                '500': '#A9B8CA',
                '600': '#98A6B6',
                '700': '#656E79',
                '800': '#4C535B',
                '900': '#33373D',
                },
        },
        screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        },

    },
    variants: {},
    plugins: [],
  }