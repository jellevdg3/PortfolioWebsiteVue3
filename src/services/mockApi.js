const projects = [
	{
		id: 1,
		title: 'Featured Project',
		image: 'https://via.placeholder.com/800x400',
		featured: true,
		screenshots: [
			'https://placehold.co/800x400?text=Image 1',
			'https://placehold.co/800x400?text=Image 2',
			'https://placehold.co/800x400?text=Image 3',
		],
		description:
			'This is a detailed description of the featured project. It includes key features and technologies used.',
	},
	{
		id: 2,
		title: 'Project Two',
		image: 'https://via.placeholder.com/400x200',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Image 1',
			'https://placehold.co/800x400?text=Image 2',
		],
		description:
			'Description of project two, highlighting its main functionalities and tech stack.',
	},
	{
		id: 3,
		title: 'Project Three',
		image: 'https://via.placeholder.com/400x200',
		featured: false,
		screenshots: [
			'https://placehold.co/800x400?text=Image 1',
			'https://placehold.co/800x400?text=Image 2',
		],
		description:
			'Details about project three, including challenges faced and solutions implemented.',
	},
	// Add more projects as needed
]

export const getProjects = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(projects)
		}, 500)
	})
}

export const getProjectById = (id) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(projects.find((project) => project.id === parseInt(id)))
		}, 500)
	})
}