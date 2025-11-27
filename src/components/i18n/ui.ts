import { SpainFlag, PortugalFlag, UnitedStatesFlag } from '@/components/flags';

export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	pt: {
		code: 'pt',
		name: 'Português',
		flag: PortugalFlag,
	},
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.about': 'Acerca de',
		'nav.experiences': 'Experiencias',
		'nav.gallery': 'Galería',
		'nav.opinions': 'Opiniones',
		'nav.blog': 'Blog',
		'nav.contact': 'Contacto',
	},
	en: {
		'nav.about': 'About Me',
		'nav.experiences': 'Experiences',
		'nav.gallery': 'Gallery',
		'nav.opinions': 'Opinions',
		'nav.blog': 'Blog',
		'nav.contact': 'Contact',
	},
	pt: {
		'nav.about': 'Sobre mim',
		'nav.experiences': 'Experiências',
		'nav.gallery': 'Galeria',
		'nav.opinions': 'Opiniões',
		'nav.blog': 'Blog',
		'nav.contact': 'Contacto',
	},
} as const;

export const routes = {
	es: {
		about: 'acerca-de',
		experiences: 'experiencias',
		gallery: 'galeria',
		opinions: 'opiniones',
		blog: 'blog',
		contact: 'contacto',
	},
	en: {
		about: 'about',
		experiences: 'experiences',
		gallery: 'gallery',
		opinions: 'opinions',
		blog: 'blog',
		contact: 'contact',
	},
	pt: {
		about: 'sobre-mim',
		experiences: 'experiencias',
		gallery: 'galeria',
		opinions: 'opinioes',
		blog: 'blog',
		contact: 'contacto',
	},
};