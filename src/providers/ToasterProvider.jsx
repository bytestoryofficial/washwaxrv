import { Toaster } from 'react-hot-toast';

const toasterOptions = {
  style: {
    fontWeight: 500,
    fontFamily: "'Montserrat', sans-serif",
    maxWidth: '500px',
  },
  duration: 5000,
};

const ToasterProvider = () => {
  return <Toaster toastOptions={toasterOptions} />;
};

export default ToasterProvider;
