// Import images
import pa1 from '../assets/pa1.png';
import pa2 from '../assets/pa2.png';
import pa3 from '../assets/pa3.png';
import drive1 from '../assets/drive1.png';
import drive2 from '../assets/drive2.png';
import drive3 from '../assets/drive3.png';
import gpt1 from '../assets/gpt1.png';
import gpt2 from '../assets/gpt2.png';
import medi1 from '../assets/medi1.png';
import medi2 from '../assets/medi2.png';
import medi3 from '../assets/medi3.png';
import medi4 from '../assets/medi4.png';
import medi5 from '../assets/medi5.png';
import edulink from '../assets/edulink.jpg';
import edulink2 from '../assets/edulink2.jpg';
import edulink3 from '../assets/edulink3.jpg';
import royal from '../assets/royal1.jpg';
import royal2 from '../assets/royal2.jpg';
import royal3 from '../assets/royal3.jpg';


export const projectsData = [
	{
		id: 1,
		title: 'Edulink',
		category: 'A platform streamlining connections between colleges and companies',
		img: [edulink, edulink2, edulink3],
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		github:'https://github.com/aayushbisht/EduLink',
		deployment:'https://edulink2023.netlify.app/',
		
	},
	{
		id: 2,
		title: 'RoyalRealms',
		category: 'A property management system built using MERN stack enabling users to list and buy properties',
		img: [royal,royal2,royal3],
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		github:'https://github.com/aayushbisht/Real-Estate',
		deployment:'https://royalrealms.onrender.com/',
		
	},
	

	{
		id: 3,
		title: 'Blockchain Based Crowdfunding System',
		category: 'A blockchain-based crowdfunding application which enables secure, transparent and decentralized funding of campaigns.',
		img: [pa1,pa2, pa3],
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'Web3',
		},
		github:'https://github.com/aayushbisht/CROWD-FUNDING',
		deployment:'https://crowd-funding-hwyt237jm-harshuljain2002-gmailcom.vercel.app/',
		
	},
	{
		id: 4,
		title: 'MediBloc',
		category: 'Blockchain-based medical record storage for patients and insurance companies',
		img: [medi1,medi2,medi3,medi4,medi5,medi1],
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'Web3',
		},
		github:'https://github.com/aayushbisht/MediBloc-v2',
		deployment:'',
		
	},
	{
		id: 5,
		title: 'CryptoDrive',
		category: 'A decentralized file storing drive that enables users to securely store their images over IPFS and share them with other users.',
		img: [drive1,drive2,drive3],
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'Web Application',
		},
		github:'https://github.com/aayushbisht/CryptoDrive',
		deployment:'',
	},

	{
		id: 6,
		title: 'ChatEcho',
		category: 'An AI chat application that utilizes the GPT-3 API, provides natural and intuitive conversations with artificial intelligence',
		img: [gpt2,gpt1,gpt2],
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'Web and AI',
		},
		github:'https://github.com/aayushbisht/ChatEcho',
		deployment:'',
	},


];
