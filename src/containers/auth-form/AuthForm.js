import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Button, Heading, TextInput, SubHeading } from '../../components';
import styles from './AuthForm.module.css';
import { useAuth } from '../../contexts/AuthContext';
import { Card } from '../../components/card/Card';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const AuthFormTypes = {
	signUp: {
		main: 'Üye Ol',
		anti: 'Giriş Yap',
		url: 'auth/local/register',
	},
	signIn: {
		main: 'Giriş Yap',
		anti: 'Üye Ol',
		url: 'auth/local',
	},
};

function AuthForm() {
	const { signUp, signIn } = AuthFormTypes;

	const [formType, setFormType] = useState(signIn);
	const { login, register } = useAuth();

	useDocumentTitle(`${formType.main}`);

	const signupSchema = Yup.object().shape({
		email: Yup.string().email('Geçerli bir mail adresi giriniz').required(),
		password: Yup.string().min(8, 'En az 8 karakter olmalı.').max(20, 'En fazla 20 karakter olabilir.').required(),
	});

	const changeFormType = () => {
		setFormType((prevType) => {
			return prevType === signUp ? signIn : signUp;
		});
	};

	return (
		<Card className={styles.authForm}>
			<Formik
				initialValues={{}}
				validationSchema={signupSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (formType === signUp) {
						register(formType.url, values.email, values.password);
					}
					login(formType.url, values.email, values.password);
					setSubmitting(false);
				}}
			>
				<Form>
					<Heading text={formType.main} className={styles.heading} />
					<SubHeading className={styles.subTitle}>
						Fırsatlardan yararlanmak için {formType.main.toLowerCase()}!
					</SubHeading>
					<TextInput
						id="email"
						name="email"
						type="email"
						label="Email"
						placeholder="Email@example.com"
						className={styles.input}
					/>
					<TextInput
						id="password"
						name="password"
						type="password"
						label="Password"
						placeholder="Password"
						className={styles.input}
					/>
					<Button label={formType.main} primary className={styles.button} />
					<SubHeading className={styles.subTitleBottom}>
						Hesabın var mı? {/* Span component'a çevirilecek	 */}
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
