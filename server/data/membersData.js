const baseUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:3001'
		: 'https://space-tourism-api.onrender.com';

const crewData = [
	{
		name: 'Douglas Hurley',
		link: `${baseUrl}/crew-images/image-douglas-hurley.webp`,
		position: 'Commander',
		description:
			'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
	},
	{
		name: 'MARK SHUTTLEWORTH',
		link: `${baseUrl}/crew-images/image-mark-shuttleworth.webp`,
		position: 'Mission Specialist',
		description:
			'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
	},
	{
		name: 'Victor Glover',
		link: `${baseUrl}/crew-images/image-victor-glover.webp`,
		position: 'PILOT',
		description:
			'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
	},
	{
		name: 'Anousheh Ansari',
		link: `${baseUrl}/crew-images/image-anousheh-ansari.webp`,
		position: 'Flight Engineer',
		description:
			'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
	},
];

module.exports = {
	crewData,
};
