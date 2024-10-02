const projects = [
	{
		id: 1,
		title: 'Featured Project',
		image: 'https://via.placeholder.com/800x400/777',
		featured: true,
		screenshots: [
			'https://placehold.co/800x400?text=Image+1',
			'https://placehold.co/800x400?text=Image+2',
			'https://placehold.co/800x400?text=Image+3',
			'https://placehold.co/800x400?text=Image+4',
			'https://placehold.co/800x400?text=Image+5',
			'https://placehold.co/800x400?text=Image+6',
			'https://placehold.co/800x400?text=Image+7',
			'https://placehold.co/800x400?text=Image+8',
			'https://placehold.co/800x400?text=Image+9',
			'https://placehold.co/800x400?text=Image+10',
			'https://placehold.co/800x400?text=Image+11',
			'https://placehold.co/800x400?text=Image+12',
			'https://placehold.co/800x400?text=Image+13',
			'https://placehold.co/800x400?text=Image+14',
			'https://placehold.co/800x400?text=Image+15',
			'https://placehold.co/800x400?text=Image+16',
			'https://placehold.co/800x400?text=Image+17',
			'https://placehold.co/800x400?text=Image+18',
			'https://placehold.co/800x400?text=Image+19',
			'https://placehold.co/800x400?text=Image+20',
		],
		description:
			'This is a detailed description of the featured project. It includes key features and technologies used.',
	},
	{
		id: 2,
		title: 'Alpha Initiative',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Alpha+1',
			'https://placehold.co/800x400?text=Alpha+2',
			'https://placehold.co/800x400?text=Alpha+3',
			'https://placehold.co/800x400?text=Alpha+4',
			'https://placehold.co/800x400?text=Alpha+5',
			'https://placehold.co/800x400?text=Alpha+6',
			'https://placehold.co/800x400?text=Alpha+7',
			'https://placehold.co/800x400?text=Alpha+8',
			'https://placehold.co/800x400?text=Alpha+9',
			'https://placehold.co/800x400?text=Alpha+10',
			'https://placehold.co/800x400?text=Alpha+11',
			'https://placehold.co/800x400?text=Alpha+12',
			'https://placehold.co/800x400?text=Alpha+13',
			'https://placehold.co/800x400?text=Alpha+14',
			'https://placehold.co/800x400?text=Alpha+15',
			'https://placehold.co/800x400?text=Alpha+16',
			'https://placehold.co/800x400?text=Alpha+17',
			'https://placehold.co/800x400?text=Alpha+18',
			'https://placehold.co/800x400?text=Alpha+19',
			'https://placehold.co/800x400?text=Alpha+20',
		],
		description:
			'Alpha Initiative focuses on innovative solutions to modern challenges, leveraging cutting-edge technologies.',
	},
	{
		id: 3,
		title: 'Beta Build',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Beta+1',
			'https://placehold.co/800x400?text=Beta+2',
			'https://placehold.co/800x400?text=Beta+3',
			'https://placehold.co/800x400?text=Beta+4',
			'https://placehold.co/800x400?text=Beta+5',
			'https://placehold.co/800x400?text=Beta+6',
			'https://placehold.co/800x400?text=Beta+7',
			'https://placehold.co/800x400?text=Beta+8',
			'https://placehold.co/800x400?text=Beta+9',
			'https://placehold.co/800x400?text=Beta+10',
			'https://placehold.co/800x400?text=Beta+11',
			'https://placehold.co/800x400?text=Beta+12',
			'https://placehold.co/800x400?text=Beta+13',
			'https://placehold.co/800x400?text=Beta+14',
			'https://placehold.co/800x400?text=Beta+15',
			'https://placehold.co/800x400?text=Beta+16',
			'https://placehold.co/800x400?text=Beta+17',
			'https://placehold.co/800x400?text=Beta+18',
			'https://placehold.co/800x400?text=Beta+19',
			'https://placehold.co/800x400?text=Beta+20',
		],
		description:
			'Beta Build is all about creating robust and scalable applications tailored to client needs.',
	},
	{
		id: 4,
		title: 'Gamma Growth',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Gamma+1',
			'https://placehold.co/800x400?text=Gamma+2',
			'https://placehold.co/800x400?text=Gamma+3',
			'https://placehold.co/800x400?text=Gamma+4',
			'https://placehold.co/800x400?text=Gamma+5',
			'https://placehold.co/800x400?text=Gamma+6',
			'https://placehold.co/800x400?text=Gamma+7',
			'https://placehold.co/800x400?text=Gamma+8',
			'https://placehold.co/800x400?text=Gamma+9',
			'https://placehold.co/800x400?text=Gamma+10',
			'https://placehold.co/800x400?text=Gamma+11',
			'https://placehold.co/800x400?text=Gamma+12',
			'https://placehold.co/800x400?text=Gamma+13',
			'https://placehold.co/800x400?text=Gamma+14',
			'https://placehold.co/800x400?text=Gamma+15',
			'https://placehold.co/800x400?text=Gamma+16',
			'https://placehold.co/800x400?text=Gamma+17',
			'https://placehold.co/800x400?text=Gamma+18',
			'https://placehold.co/800x400?text=Gamma+19',
			'https://placehold.co/800x400?text=Gamma+20',
		],
		description:
			'Gamma Growth drives business expansion through strategic planning and effective execution.',
	},
	{
		id: 5,
		title: 'Delta Design',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Delta+1',
			'https://placehold.co/800x400?text=Delta+2',
			'https://placehold.co/800x400?text=Delta+3',
			'https://placehold.co/800x400?text=Delta+4',
			'https://placehold.co/800x400?text=Delta+5',
			'https://placehold.co/800x400?text=Delta+6',
			'https://placehold.co/800x400?text=Delta+7',
			'https://placehold.co/800x400?text=Delta+8',
			'https://placehold.co/800x400?text=Delta+9',
			'https://placehold.co/800x400?text=Delta+10',
			'https://placehold.co/800x400?text=Delta+11',
			'https://placehold.co/800x400?text=Delta+12',
			'https://placehold.co/800x400?text=Delta+13',
			'https://placehold.co/800x400?text=Delta+14',
			'https://placehold.co/800x400?text=Delta+15',
			'https://placehold.co/800x400?text=Delta+16',
			'https://placehold.co/800x400?text=Delta+17',
			'https://placehold.co/800x400?text=Delta+18',
			'https://placehold.co/800x400?text=Delta+19',
			'https://placehold.co/800x400?text=Delta+20',
		],
		description:
			'Delta Design specializes in creating user-centric interfaces that enhance user experience.',
	},
	{
		id: 6,
		title: 'Epsilon Engine',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Epsilon+1',
			'https://placehold.co/800x400?text=Epsilon+2',
			'https://placehold.co/800x400?text=Epsilon+3',
			'https://placehold.co/800x400?text=Epsilon+4',
			'https://placehold.co/800x400?text=Epsilon+5',
			'https://placehold.co/800x400?text=Epsilon+6',
			'https://placehold.co/800x400?text=Epsilon+7',
			'https://placehold.co/800x400?text=Epsilon+8',
			'https://placehold.co/800x400?text=Epsilon+9',
			'https://placehold.co/800x400?text=Epsilon+10',
			'https://placehold.co/800x400?text=Epsilon+11',
			'https://placehold.co/800x400?text=Epsilon+12',
			'https://placehold.co/800x400?text=Epsilon+13',
			'https://placehold.co/800x400?text=Epsilon+14',
			'https://placehold.co/800x400?text=Epsilon+15',
			'https://placehold.co/800x400?text=Epsilon+16',
			'https://placehold.co/800x400?text=Epsilon+17',
			'https://placehold.co/800x400?text=Epsilon+18',
			'https://placehold.co/800x400?text=Epsilon+19',
			'https://placehold.co/800x400?text=Epsilon+20',
		],
		description:
			'Epsilon Engine powers high-performance applications with efficient and reliable solutions.',
	},
	{
		id: 7,
		title: 'Zeta Zone',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Zeta+1',
			'https://placehold.co/800x400?text=Zeta+2',
			'https://placehold.co/800x400?text=Zeta+3',
			'https://placehold.co/800x400?text=Zeta+4',
			'https://placehold.co/800x400?text=Zeta+5',
			'https://placehold.co/800x400?text=Zeta+6',
			'https://placehold.co/800x400?text=Zeta+7',
			'https://placehold.co/800x400?text=Zeta+8',
			'https://placehold.co/800x400?text=Zeta+9',
			'https://placehold.co/800x400?text=Zeta+10',
			'https://placehold.co/800x400?text=Zeta+11',
			'https://placehold.co/800x400?text=Zeta+12',
			'https://placehold.co/800x400?text=Zeta+13',
			'https://placehold.co/800x400?text=Zeta+14',
			'https://placehold.co/800x400?text=Zeta+15',
			'https://placehold.co/800x400?text=Zeta+16',
			'https://placehold.co/800x400?text=Zeta+17',
			'https://placehold.co/800x400?text=Zeta+18',
			'https://placehold.co/800x400?text=Zeta+19',
			'https://placehold.co/800x400?text=Zeta+20',
		],
		description:
			'Zeta Zone explores new frontiers in technology, pushing the boundaries of what is possible.',
	},
	{
		id: 8,
		title: 'Eta Enterprise',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Eta+1',
			'https://placehold.co/800x400?text=Eta+2',
			'https://placehold.co/800x400?text=Eta+3',
			'https://placehold.co/800x400?text=Eta+4',
			'https://placehold.co/800x400?text=Eta+5',
			'https://placehold.co/800x400?text=Eta+6',
			'https://placehold.co/800x400?text=Eta+7',
			'https://placehold.co/800x400?text=Eta+8',
			'https://placehold.co/800x400?text=Eta+9',
			'https://placehold.co/800x400?text=Eta+10',
			'https://placehold.co/800x400?text=Eta+11',
			'https://placehold.co/800x400?text=Eta+12',
			'https://placehold.co/800x400?text=Eta+13',
			'https://placehold.co/800x400?text=Eta+14',
			'https://placehold.co/800x400?text=Eta+15',
			'https://placehold.co/800x400?text=Eta+16',
			'https://placehold.co/800x400?text=Eta+17',
			'https://placehold.co/800x400?text=Eta+18',
			'https://placehold.co/800x400?text=Eta+19',
			'https://placehold.co/800x400?text=Eta+20',
		],
		description:
			'Eta Enterprise delivers comprehensive solutions for businesses looking to optimize their operations.',
	},
	{
		id: 9,
		title: 'Theta Tech',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Theta+1',
			'https://placehold.co/800x400?text=Theta+2',
			'https://placehold.co/800x400?text=Theta+3',
			'https://placehold.co/800x400?text=Theta+4',
			'https://placehold.co/800x400?text=Theta+5',
			'https://placehold.co/800x400?text=Theta+6',
			'https://placehold.co/800x400?text=Theta+7',
			'https://placehold.co/800x400?text=Theta+8',
			'https://placehold.co/800x400?text=Theta+9',
			'https://placehold.co/800x400?text=Theta+10',
			'https://placehold.co/800x400?text=Theta+11',
			'https://placehold.co/800x400?text=Theta+12',
			'https://placehold.co/800x400?text=Theta+13',
			'https://placehold.co/800x400?text=Theta+14',
			'https://placehold.co/800x400?text=Theta+15',
			'https://placehold.co/800x400?text=Theta+16',
			'https://placehold.co/800x400?text=Theta+17',
			'https://placehold.co/800x400?text=Theta+18',
			'https://placehold.co/800x400?text=Theta+19',
			'https://placehold.co/800x400?text=Theta+20',
		],
		description:
			'Theta Tech is dedicated to developing advanced technologies that drive industry standards forward.',
	},
	{
		id: 10,
		title: 'Iota Innovations',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Iota+1',
			'https://placehold.co/800x400?text=Iota+2',
			'https://placehold.co/800x400?text=Iota+3',
			'https://placehold.co/800x400?text=Iota+4',
			'https://placehold.co/800x400?text=Iota+5',
			'https://placehold.co/800x400?text=Iota+6',
			'https://placehold.co/800x400?text=Iota+7',
			'https://placehold.co/800x400?text=Iota+8',
			'https://placehold.co/800x400?text=Iota+9',
			'https://placehold.co/800x400?text=Iota+10',
			'https://placehold.co/800x400?text=Iota+11',
			'https://placehold.co/800x400?text=Iota+12',
			'https://placehold.co/800x400?text=Iota+13',
			'https://placehold.co/800x400?text=Iota+14',
			'https://placehold.co/800x400?text=Iota+15',
			'https://placehold.co/800x400?text=Iota+16',
			'https://placehold.co/800x400?text=Iota+17',
			'https://placehold.co/800x400?text=Iota+18',
			'https://placehold.co/800x400?text=Iota+19',
			'https://placehold.co/800x400?text=Iota+20',
		],
		description:
			'Iota Innovations focuses on creating unique and effective solutions for complex problems.',
	},
	{
		id: 11,
		title: 'Kappa Kreatives',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Kappa+1',
			'https://placehold.co/800x400?text=Kappa+2',
			'https://placehold.co/800x400?text=Kappa+3',
			'https://placehold.co/800x400?text=Kappa+4',
			'https://placehold.co/800x400?text=Kappa+5',
			'https://placehold.co/800x400?text=Kappa+6',
			'https://placehold.co/800x400?text=Kappa+7',
			'https://placehold.co/800x400?text=Kappa+8',
			'https://placehold.co/800x400?text=Kappa+9',
			'https://placehold.co/800x400?text=Kappa+10',
			'https://placehold.co/800x400?text=Kappa+11',
			'https://placehold.co/800x400?text=Kappa+12',
			'https://placehold.co/800x400?text=Kappa+13',
			'https://placehold.co/800x400?text=Kappa+14',
			'https://placehold.co/800x400?text=Kappa+15',
			'https://placehold.co/800x400?text=Kappa+16',
			'https://placehold.co/800x400?text=Kappa+17',
			'https://placehold.co/800x400?text=Kappa+18',
			'https://placehold.co/800x400?text=Kappa+19',
			'https://placehold.co/800x400?text=Kappa+20',
		],
		description:
			'Kappa Kreatives brings creative ideas to life through meticulous design and execution.',
	},
	{
		id: 12,
		title: 'Lambda Labs',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Lambda+1',
			'https://placehold.co/800x400?text=Lambda+2',
			'https://placehold.co/800x400?text=Lambda+3',
			'https://placehold.co/800x400?text=Lambda+4',
			'https://placehold.co/800x400?text=Lambda+5',
			'https://placehold.co/800x400?text=Lambda+6',
			'https://placehold.co/800x400?text=Lambda+7',
			'https://placehold.co/800x400?text=Lambda+8',
			'https://placehold.co/800x400?text=Lambda+9',
			'https://placehold.co/800x400?text=Lambda+10',
			'https://placehold.co/800x400?text=Lambda+11',
			'https://placehold.co/800x400?text=Lambda+12',
			'https://placehold.co/800x400?text=Lambda+13',
			'https://placehold.co/800x400?text=Lambda+14',
			'https://placehold.co/800x400?text=Lambda+15',
			'https://placehold.co/800x400?text=Lambda+16',
			'https://placehold.co/800x400?text=Lambda+17',
			'https://placehold.co/800x400?text=Lambda+18',
			'https://placehold.co/800x400?text=Lambda+19',
			'https://placehold.co/800x400?text=Lambda+20',
		],
		description:
			'Lambda Labs conducts research and development to innovate and improve technological solutions.',
	},
	{
		id: 13,
		title: 'Mu Metrics',
		image: 'https://via.placeholder.com/400x200/444',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Mu+1',
			'https://placehold.co/800x400?text=Mu+2',
			'https://placehold.co/800x400?text=Mu+3',
			'https://placehold.co/800x400?text=Mu+4',
			'https://placehold.co/800x400?text=Mu+5',
			'https://placehold.co/800x400?text=Mu+6',
			'https://placehold.co/800x400?text=Mu+7',
			'https://placehold.co/800x400?text=Mu+8',
			'https://placehold.co/800x400?text=Mu+9',
			'https://placehold.co/800x400?text=Mu+10',
			'https://placehold.co/800x400?text=Mu+11',
			'https://placehold.co/800x400?text=Mu+12',
			'https://placehold.co/800x400?text=Mu+13',
			'https://placehold.co/800x400?text=Mu+14',
			'https://placehold.co/800x400?text=Mu+15',
			'https://placehold.co/800x400?text=Mu+16',
			'https://placehold.co/800x400?text=Mu+17',
			'https://placehold.co/800x400?text=Mu+18',
			'https://placehold.co/800x400?text=Mu+19',
			'https://placehold.co/800x400?text=Mu+20',
		],
		description:
			'Mu Metrics provides data-driven insights to help businesses make informed decisions.',
	},
];

const workExperience = [
	{
		id: 1,
		title: 'Software Engineer',
		company: 'Innovatielab (iLab) Politie',
		duration: 'Apr 2024 - Present',
		responsibilities: [
			'Develop and maintain software solutions for law enforcement applications.',
			'Collaborate with cross-functional teams to define and implement new features.',
			'Ensure the scalability and performance of enterprise-level systems.'
		]
	},
	{
		id: 2,
		title: 'Software Engineer',
		company: 'Centric',
		duration: 'Aug 2023 - Present',
		responsibilities: [
			'Work on developing web and mobile applications for various clients.',
			'Implement best practices in software development and code reviews.',
			'Integrate Azure services to enhance application capabilities.'
		]
	},
	{
		id: 3,
		title: 'Lead Developer',
		company: 'ChimpWorks',
		duration: 'Apr 2022 - Sep 2023',
		responsibilities: [
			'Led a team of 10 developers in the development of large-scale gaming projects.',
			'Managed iterative releases and feature implementations for a user base of 100+ million players.',
			'Focused on user experience, optimization, and detailed code quality assurance.'
		]
	},
	{
		id: 4,
		title: 'Medior Software Engineer',
		company: 'Talespin',
		duration: 'Nov 2019 - Mar 2022',
		responsibilities: [
			'Developed immersive training simulations using Unreal Engine.',
			'Collaborated with designers and other engineers to create interactive user experiences.',
			'Optimized application performance and integrated feedback from users.'
		]
	},
	{
		id: 5,
		title: 'Junior Software Engineer',
		company: 'Talespin',
		duration: 'Oct 2018 - Nov 2019',
		responsibilities: [
			'Assisted in the development of game mechanics and features.',
			'Participated in code reviews and contributed to improving coding standards.',
			'Supported senior engineers in debugging and troubleshooting issues.'
		]
	},
	{
		id: 6,
		title: 'Software Engineer Intern',
		company: 'Philips Lighting',
		duration: 'Sep 2017 - Mar 2018',
		responsibilities: [
			'Developed tools for lighting system management and control.',
			'Collaborated with the engineering team to enhance product features.',
			'Conducted testing and documentation for developed software modules.'
		]
	},
	{
		id: 7,
		title: 'Game Developer Intern',
		company: 'Astute Monkey Studio',
		duration: 'May 2013 - Nov 2013',
		responsibilities: [
			'Assisted in the development of mobile games using Unity.',
			'Implemented gameplay features and user interface elements.',
			'Worked closely with designers to bring game concepts to life.'
		]
	}
];

const aboutData = {
	cvLink: '/documents/cv-template.pdf',
	profileImage: 'https://via.placeholder.com/500',
	aboutText: `
		Hi! My name is Jelle, and I am a passionate software engineer with 5 years of experience.
		I have a foundation in game development, but have always diversified my skills to encompass a wide
		range of software development projects. This has included work on mobile apps, web applications, and
		enterprise-level software systems. My experience in game development has instilled in me a strong
		focus on user experience, optimization, and an attention to detail that I bring to all of my
		projects.
		My current position is Lead Developer at ChimpWorks where I lead a small team of 10 developers to
		work on their biggest project where we iteratively release new features to keep it interesting for
		100+ million players.
	`,
	skills: [
		'Scaled Agile Framework',
		'Scrum',
		'Agile Methodologies',
		'Microsoft Azure',
		'Object-Oriented Programming (OOP)',
		'English',
		'Programming',
		'C#',
		'C++',
		'Game Development',
		'Software Architecture',
		'HTML5',
		'Unity',
		'Unreal Engine 4',
		'Unreal Engine',
		'Game Programming',
		'OpenGL Shading Language (GLSL)',
		'DirectX',
		'Mobile Game Development',
		'Parallel Programming',
		'Gameplay Programming',
		'HLSL',
		'OpenGL'
	],
	education: [
		{
			title: 'Bachelor of Science in Computer Science',
			institution: 'University of Your Choice',
			duration: '2013 - 2017',
			description: 'Description of your educational background, relevant courses, projects, and achievements.'
		}
	]
};

export const getProjects = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(projects)
		}, 50)
	})
}

export const getProjectById = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(projects.find((project) => project.id === parseInt(id)))
		}, 50)
	})
}

export const getWorkExperience = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(workExperience)
		}, 50)
	})
}

export const getAboutData = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(aboutData)
		}, 50)
	})
}