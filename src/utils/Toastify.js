import { toast, Zoom } from 'react-toastify';

const Toastify = (type, message) => {
	switch (type) {
		case 'error':
			toast.error(message, {
				position: 'top-right',
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				transition: Zoom,
			});
			break;

		case 'success':
			toast.success(message, {
				position: 'top-right',
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				transition: Zoom,
			});
			break;
		default:
			break;
	}
};

export default Toastify;
