import Footer from '~/components/footer';
import Navbar from '~/components/navbar';

import { getMenuImage } from './actions';

export default async function Menu() {
	const menuImages = [];

	for (let i = 0; i < 5; i++) {
		menuImages[i] = await getMenuImage(String(i + 1));
	}

	return (
		<>
			<Navbar off />

			<div className='menu-old'>
				{menuImages.map((menuImage, index) => (
					<img
						src={menuImage}
						alt={`Menu ${index + 1}`}
						key={index}
						className='menu-old-item'
					/>
				))}
			</div>

			<Footer />
		</>
	);
}
