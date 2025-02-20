import Footer from '~/components/footer';
import Navbar from '~/components/navbar';
import Upload from './upload';
import { getMenuImage } from './actions';

const menus = [
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
	{
		id: 5,
	},
];

export default async function AdminMenu() {
	const menuImages: string[] = [];

	for (let i = 0; i < menus.length; i++) {
		const url = await getMenuImage(String(i + 1));

		menuImages[i] = url;
	}

	return (
		<>
			<Navbar off />

			<main className='admin-main'>
				{menus.map((menu) => (
					<div key={menu.id}>
						<h3
							style={{
								color: 'black',
								textAlign: 'center',
								marginBottom: '2rem',
							}}
						>
							{menu.id} numaralı menü resmi
						</h3>
						<Upload menuId={menu.id} />
						<img
							src={menuImages[menu.id - 1]}
							alt='menu'
							style={{ height: '400px', width: '200px' }}
						/>
					</div>
				))}
			</main>

			<Footer />
		</>
	);
}
