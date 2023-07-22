const baseUrl =
	process.env.NODE_ENV !== 'production'
		? 'http://localhost:3001'
		: 'https://space-tourism-api.onrender.com';

const techData = [
	{
		term: 'LAUNCH VEHICLE',
		links: {
			landscape: `${baseUrl}/tech-images/image-launch-vehicle-landscape.jpg`,
			portrait: `${baseUrl}/tech-images/image-launch-vehicle-portrait.jpg`,
		},
		definition: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
	},
	{
		term: 'SPACEPORT',
		links: {
			landscape: `${baseUrl}/tech-images/image-spaceport-landscape.jpg`,
			portrait: `${baseUrl}/tech-images/image-spaceport-portrait.jpg`,
		},
		definition: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.`,
	},
	{
		term: 'SPACE CAPSULE',
		links: {
			landscape: `${baseUrl}/tech-images/image-space-capsule-landscape.jpg`,
			portrait: `${baseUrl}/tech-images/image-space-capsule-portrait.jpg`,
		},
		definition: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
	},
];

module.exports = {
	techData,
};
