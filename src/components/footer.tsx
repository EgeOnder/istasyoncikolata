export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<img
					src="/logo/logowhite.svg"
					alt="logo"
					className="footer-logo"
				/>
				<div className="footer-lists">
					<ul className="footer-ul">
						<span className="footer-ul-title">Navigasyon</span>
						<li>
							<a className="footer-li" href="/menu">
								{' '}
								Menü
							</a>
						</li>
						<li>
							<a className="footer-li" href="/iletisim">
								{' '}
								İletişim
							</a>
						</li>
					</ul>
					<ul className="footer-ul">
						<span className="footer-ul-title">Bize Ulaşın</span>
						<li>
							<a className="footer-li" href="tel:+902826503050">
								+90 (282) 650 30 50
							</a>
						</li>
						<li>
							<a
								className="footer-li"
								target="_blank"
								href="https://www.google.com/maps/place/Chocolate+Station/@41.1551059,27.840676,15z/data=!4m5!3m4!1s0x0:0x34d7dcc075cf0d5f!8m2!3d41.1551059!4d27.840676"
							>
								Esentepe Mah. Adnan Doğu Cd. Kervancı Süit No:10
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="copy-container">
				<span className="copy-text">
					&copy; ChocolateStation. Tüm hakları saklıdır.
				</span>
				<div className="copy-social">
					<a
						className="btn-icon"
						href="https://facebook.com/ChocolateStationCafe"
						target="_blank"
					>
						<i className="fab fa-facebook"></i>
					</a>
					<a
						className="btn-icon"
						href="https://instagram.com/chocolatestationcorlu"
						target="_blank"
					>
						<i className="fab fa-instagram"></i>
					</a>
				</div>
			</div>
		</footer>
	);
}
