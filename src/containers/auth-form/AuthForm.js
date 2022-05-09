import React, { useState } from 'react';

import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { useAuth } from '../../contexts/AuthContext';

import { Button, Heading, Input, SubHeading, Card, Span } from '../../components';
import styles from './AuthForm.module.css';

const AuthFormTypes = {
	signUp: {
		main: 'Üye Ol',
		anti: 'Giriş Yap',
	},
	signIn: {
		main: 'Giriş Yap',
		anti: 'Üye Ol',
	},
};

function AuthForm() {
	const { signUp, signIn } = AuthFormTypes;
	const { login, register } = useAuth();
	const [formType, setFormType] = useState(signIn);

	const signupSchema = Yup.object().shape({
		email: Yup.string().email('Geçerli bir mail adresi giriniz').required('Bu alan boş bırakılamaz.'),
		password: Yup.string()
			.min(8, 'En az 8 karakter olmalı.')
			.max(20, 'En fazla 20 karakter olabilir.')
			.required('Bu alan boş bırakılamaz.'),
	});

	const changeFormType = () => {
		setFormType((prevType) => {
			return prevType === signUp ? signIn : signUp;
		});
	};

	return (
		<Card className={styles.authForm}>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={signupSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (formType.main === 'Üye Ol') {
						register(values.email, values.password);
					} else {
						login(values.email, values.password);
					}
					setSubmitting(false);
				}}
			>
				<Form>
					<Heading text={formType.main} size="32" className={styles.heading} />
					<Span className={styles.subHeading}>Fırsatlardan yararlanmak için {formType.main.toLowerCase()}!</Span>
					<Field
						label="Email"
						placeholder="Email@example.com"
						name="email"
						type="email"
						component={Input}
						inputClassName={styles['auth-form-input']}
					/>
					<Field
						label="Password"
						placeholder="Password"
						name="password"
						type="password"
						component={Input}
						inputClassName={styles['auth-form-input']}
					/>
					<Button label={formType.main} mode="primary" className={styles.button} />
					<SubHeading className={styles.subTitleBottom}>
						Hesabın var mı? {/* Span component'a çevirilecek */}
						<span
							onClick={() => {
								changeFormType();
							}}
							onKeyDown={() => {}}
							tabIndex="0"
							aria-checked="false"
							role="switch"
						>
							{formType.anti}
						</span>
					</SubHeading>
				</Form>
			</Formik>
		</Card>
	);
}

export { AuthForm };
