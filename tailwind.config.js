module.exports = {
    variants: {
      extend: {
        // ...
       grayscale: ['hover', 'focus'],
      }
    },
    theme: {
      extend: {
        lineHeight: {
         'no-lineheight': '0',
         '0': '0px',
        }
      },
      screens: {
        'sm': '52 0px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '900px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  }