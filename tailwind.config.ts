import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			aclonica: [
  				'var(--font-aclonica)',
  				'sans-serif'
  			],
  			playfair: [
  				'var(--font-playfair)',
  				'sans-serif'
  			],
  			playfair_italic: [
  				'var(--font-playfair_italic'
  			],
  			merienda: [
  				'var(--font-merienda)'
  			]
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'bounce-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0.3) translateY(-50%)'
  				},
  				'50%': {
  					opacity: '0.9',
  					transform: 'scale(1.05) translateY(0)'
  				},
  				'70%': {
  					transform: 'scale(0.95)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'scale(1)'
  				}
  			},
  			rubberBand: {
  				'0%': {
  					transform: 'scale(1)'
  				},
  				'30%': {
  					transform: 'scale(1.25, 0.75)'
  				},
  				'40%': {
  					transform: 'scale(0.75, 1.25)'
  				},
  				'50%': {
  					transform: 'scale(1.15, 0.85)'
  				},
  				'65%': {
  					transform: 'scale(0.95, 1.05)'
  				},
  				'75%': {
  					transform: 'scale(1.05, 0.95)'
  				},
  				'100%': {
  					transform: 'scale(1)'
  				}
  			},
  			'move-left': {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'move-right': {
  				'0%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(0%)'
  				}
  			},
  			lineAnimated: {
  				'0%': {
  					height: '0'
  				},
  				'100%': {
  					height: '100%'
  				}
  			},
  			'Animate-Container': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0px)'
  				}
  			},
  			progress: {
  				'0%': {
  					transform: 'rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg)'
  				}
  			},
  			'progress-bar': {
  				'100%': {
  					width: '0'
  				}
  			},
  			slideIn: {
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			}
  		},
  		animation: {
  			fadeIn: 'fadeIn 1s 0.2s backwards',
  			fadeIn2: 'fadeIn 1s 1.2s backwards',
  			'bounce-in': 'bounce-in 1s 1.5s forwards',
  			'rubber-band': 'rubberBand 1s ',
  			moveLeft: 'move-left 1s  linear infinite',
  			moveRight: 'move-right 1s linear infinite',
  			lineAnimation: 'lineAnimated 3s linear forwards',
  			'Animate-Container': 'Animate-Container 1s linear forwards',
  			slideIn: 'slideIn 0.5s ease-out forwards',
  			progressBar: 'progress-bar 2s linear forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    addVariablesForColors,
      require("tailwindcss-animate")
],
}; 
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;

