import Footer from '~/components/footer';
import Navbar from '~/components/navbar';

const selected = [
	{
		// image: 'header.png',
		title: 'Serpme Kahvaltı',
		description:
			'Peynir ve zeytin çeşitleri, tereyağı, bal, reçel, sigara böreği, domates, salatalık, mevsim yeşillikleri, haşlanmış yumurta ve sınırsız çay.',
		path: '/menu/kahvaltilar/serpme-kahvalti',
	},
	{
		// image: 'header.png',
		title: 'Hamburger Menü',
		description: 'Hamburger, patates, kola veya ayran.',
		path: '/menu/burgerler/hamburger-menu',
	},
	{
		// image: 'header.png',
		title: 'Kahvaltı Tabağı',
		description:
			'Peynir ve zeytin çeşitleri, tereyağı, bal, reçel, sigara böreği, domates, salatalık, mevsim yeşillikleri, sahanda veya haşlanmış yumurta, patates kızartması, sucuk ve sınırsız çay.',
		path: '/menu/kahvaltilar/kahvalti-tabagi',
	},
	{
		// image: 'header.png',
		title: 'Margarita Pizza',
		description: 'Domates sos, parmesan, fesleğen, mozarella.',
		path: '/menu/pizzalar/margarita',
	},
];

export default function Home() {
	return (
		<>
			<Navbar off={false} />

			<div className="header">
				<div className="header-container">
					<div className="header-left">
						<h1 className="header-title">
							Sade Yaşama İlham Veren
							<span className="highlight"> Mutfak</span> Anlayışı.
						</h1>
						<p className="header-subtitle">
							Taze ve güncel menümüze ulaşmak için tıklayın.
						</p>
						<div className="header-buttons">
							<a className="btn" href="/menu">
								{' '}
								MENÜYÜ İNCELE
							</a>
						</div>
					</div>

					<div className="header-right hidden-on-mobile">
						<img src="/images/header.png" alt="header" />
					</div>
				</div>
			</div>

			<div className="special">
				<div className="special-title">
					<h2>Seçtiklerimiz</h2>
				</div>
				<div className="special-container">
					{selected.map((food, index) => (
						<div className="special-cart" key={index}>
							{/* <img
								src={`${process.env.REACT_APP_API}/public/images/${food.image}`}
								alt="cart"
								className="cart-img"
							/> */}
							<h4
								className="cart-title"
								style={{ marginTop: '2rem' }}
							>
								{food.title}
							</h4>
							<p className="cart-subtitle">{food.description}</p>
							<a
								className="btn"
								style={{ marginBottom: '2rem' }}
								href={food.path}
							>
								Daha Fazla
							</a>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</>
	);
}
