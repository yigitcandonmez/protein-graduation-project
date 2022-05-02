import { AuthProvider } from './AuthContext';
import { ProductProvider } from './ProductContext';

function AppProviders({ children }) {
	return (
		<ProductProvider>
			<AuthProvider>{children}</AuthProvider>
		</ProductProvider>
	);
}

export default AppProviders;
