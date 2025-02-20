import Footer from '~/components/footer';
import Navbar from '~/components/navbar';

export default function Iletisim() {
	return (
		<>
			<Navbar off />
			<div className='contact'>
				<div className='contact-container'>
					<div className='contact-left'>
						<h1 className='contact-title'>İletişim</h1>
						<form>
							<div className='form-input-flex'>
								<input
									type='text'
									placeholder='Ad'
									className='form-input'
								/>
								<input
									type='text'
									placeholder='Soyad'
									className='form-input'
								/>
							</div>
							<div className='form-input-flex'>
								<input
									type='email'
									placeholder='E-posta'
									className='form-input'
								/>
							</div>
							<div className='form-input-flex'>
								<textarea
									placeholder='Mesajınız'
									className='form-textarea'
									rows={4}
								></textarea>
							</div>
							<button className='btn' type='submit'>
								{' '}
								Gönder
							</button>
						</form>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
