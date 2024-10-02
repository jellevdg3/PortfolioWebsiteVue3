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
	profileImage: 'https://via.placeholder.com/350',
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