import React, { useState } from 'react';

import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

import { useAuth } from '../../contexts/AuthContext';

import { Button, Heading, Input, SubHeading, Card } from '../../components';
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
	const [formType, setFormType] = useState(signIn);

	const { login, register } = useAuth();

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
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={signupSchema}
				onSubmit={(values, { setSubmitting }) => {
					if (formType === signUp) {
						register(values.email, values.password);
					}
					login(values.email, values.password);
					setSubmitting(false);
				}}
			>
				<Form>
					<Heading text={formType.main} className={styles.heading} />
					<SubHeading className={styles.subTitle}>
						Fırsatlardan yararlanmak için {formType.main.toLowerCase()}!
					</SubHeading>
					<Field
						label="Email"
						placeholder="Email@example.com"
						name="email"
						type="email"
						component={Input}
						inputClassName={styles.input}
					/>
					<Field
						label="Password"
						placeholder="Password"
						name="password"
						type="password"
						component={Input}
						inputClassName={styles.input}
					/>
					<Button label={formType.main} primary className={styles.button} />
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
