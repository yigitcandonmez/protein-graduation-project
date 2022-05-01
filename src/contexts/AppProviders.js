import { AuthProvider } from './AuthContext';
import { ProductProvider } from './ProductContext';
import { UserProvider } from './UserContext';

function AppProviders({ children }) {
	return (
		<ProductProvider>
			<AuthProvider>
				<UserProvider>{children}</UserProvider>
			</AuthProvider>
		</ProductProvider>
	);
}

export default AppProviders;
