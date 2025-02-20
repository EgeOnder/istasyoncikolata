import Footer from '~/components/footer';
import Navbar from '~/components/navbar';

export default function NotFound() {
	return (
		<>
			<Navbar off={false} />

			<header className="header">
				<div className="notfound-container">
					<h1 style={{ marginBottom: '2rem' }}>
						Aradığın sayfayı bulamadık!
					</h1>
					<a className="btn" href="/">
						{' '}
						Ana Sayfaya Dön
					</a>
				</div>
			</header>

			<Footer />
		</>
	);
}
