/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/jsx-props-no-spreading */
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '../button';
import { DropIcon } from '../icons/Icons';
import { Image } from '../image';
import { Span } from '../span';
import styles from './DropBox.module.css';

function DropBox({ formData }) {
	const [files, setFiles] = useState([]);
	const onDrop = useCallback((acceptedFiles) => {
		setFiles(
			acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
	}, []);

	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			'image/jpeg': [],
			'image/png': [],
		},
		onDrop,
		maxFiles: 1,
		maxSize: 409600,
	});

	const thumbs = files.map((file, i) => (
		<div key={file.name}>
			<div className={styles['drop-image-container']}>
				<div style={{ width: '25%', height: '100%', position: 'relative' }}>
					<Image
						localSrc={file.preview}
						className={styles['drop-image']}
						onLoad={() => {
							URL.revokeObjectURL(file.preview);
						}}
					/>
					<Span className={styles.close} handleClick={() => remove(i)}>
						x
					</Span>
				</div>
			</div>
		</div>
	));

	const remove = (file) => {
		const newFiles = [...files];
		newFiles.splice(file, 1);
		setFiles(newFiles);
	};

	useEffect(() => {
		return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
	}, []);

	useEffect(() => {
		if (files[0]?.path) {
			formData.append('files.image', files[0]);
		} else {
			formData.delete('files.image');
		}
	}, [files]);

	return files.length !== 0 ? (
		<div className={styles.thumbs}>{thumbs}</div>
	) : (
		<div className={styles.dropBox}>
			<DropIcon className={styles['dropBox-icon']} />
			<Span className={styles['dropBox-guidance']}>Sürükleyip bırakarak yükle</Span>
			<Span className={styles['dropBox-brace']}>veya</Span>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				<Button button label="Görsel Seçin" className={styles.button} />
			</div>
			<Span className={styles['dropBox-limit']}>PNG ve JPEG Dosya boyutu max. 100kb</Span>
		</div>
	);
}

export { DropBox };
