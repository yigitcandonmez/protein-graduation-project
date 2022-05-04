import { AuthProvider } from './AuthContext';
import { ProductProvider } from './ProductContext';

function AppProviders({ children }) {
	return (
		<AuthProvider>
			<ProductProvider>{children}</ProductProvider>
		</AuthProvider>
	);
}

export default AppProviders;
