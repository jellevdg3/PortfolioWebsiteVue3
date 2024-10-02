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