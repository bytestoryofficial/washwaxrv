import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/styled-engine';
import { Provider } from 'react-redux';

import TitleContextProvider from './TitleContext';
import ToasterProvider from './ToasterProvider';

import store from 'store/configureStore';

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TitleContextProvider>
          <Router>
            <StyledEngineProvider injectFirst>
              <ToasterProvider />
              {children}
            </StyledEngineProvider>
          </Router>
        </TitleContextProvider>
      </LocalizationProvider>
    </Provider>
  );
};

export default AppProvider;
