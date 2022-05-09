/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '../button';
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
			<Span>Sürükleyip bırakarak yükle</Span>
			<div {...getRootProps()}>
				<input {...getInputProps()} />
				<Button button label="Görsel Seçin" className={styles.button} />
			</div>
			<Span>PNG ve JPEG Dosya boyutu max. 100kb</Span>
		</div>
	);
}

export { DropBox };
