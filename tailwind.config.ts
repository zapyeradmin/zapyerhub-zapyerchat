import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'cyber': ['Orbitron', 'monospace'],
				'tech': ['Space Grotesk', 'sans-serif'],
				'sans': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				whatsapp: {
					DEFAULT: 'hsl(var(--whatsapp-green))',
					hover: 'hsl(var(--whatsapp-green-hover))',
					dark: 'hsl(var(--whatsapp-dark))',
					darker: 'hsl(var(--whatsapp-darker))',
					user: 'hsl(var(--whatsapp-user-bubble))',
					bot: 'hsl(var(--whatsapp-bot-bubble))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
					'50%': { transform: 'translateY(-20px) rotate(2deg)' }
				},
				'matrix-scan': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'digital-rain': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						opacity: '1',
						filter: 'brightness(1) drop-shadow(0 0 5px hsl(145 100% 55%))'
					},
					'50%': { 
						opacity: '0.8',
						filter: 'brightness(1.2) drop-shadow(0 0 20px hsl(145 100% 55%))'
					}
				},
				'cyber-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(145 100% 55% / 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(145 100% 55% / 0.8), 0 0 60px hsl(215 100% 55% / 0.3)' 
					}
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink-caret': {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--primary))' }
				},
				'fadeInUp': {
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'fadeInLeft': {
					'to': { opacity: '1', transform: 'translateX(0)' }
				},
				'fadeInRight': {
					'to': { opacity: '1', transform: 'translateX(0)' }
				},
				'scaleIn': {
					'to': { opacity: '1', transform: 'scale(1)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'magnetic-hover': {
					'0%': { transform: 'scale(1) rotate(0deg)' },
					'50%': { transform: 'scale(1.05) rotate(1deg)' },
					'100%': { transform: 'scale(1) rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'matrix-scan': 'matrix-scan 3s linear infinite',
				'digital-rain': 'digital-rain 3s linear infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'cyber-glow': 'cyber-glow 2s ease-in-out infinite',
				'typing': 'typing 3s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
				'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
				'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
				'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
				'scale-in': 'scaleIn 0.5s ease-out forwards',
				'gradient-shift': 'gradient-shift 15s ease infinite',
				'magnetic-hover': 'magnetic-hover 0.3s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
