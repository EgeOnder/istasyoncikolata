'use client';

import { UploadButton } from '~/utils/uploadthing';

export default function Upload({ menuId }: { menuId: number }) {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<UploadButton
				content={{
					button: 'Yükle',
					allowedContent: 'Maksimum: 32MB',
				}}
				endpoint='imageUploader'
				onClientUploadComplete={(res) => {
					alert(
						'Dosya başarıyla yüklendi! Değişikliklerin görünmesi için sayfayı yenileyin.',
					);
				}}
				onBeforeUploadBegin={(files) => {
					return files.map(
						(f) =>
							new File([f], `${menuId}-menu`, { type: f.type }),
					);
				}}
				onUploadError={(error: Error) => {
					alert(`HATA! ${error.message}`);
				}}
			/>
		</main>
	);
}
