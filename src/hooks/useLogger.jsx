import DICTIONARY from 'constants/Dictionary';

const useLogger = () => {
  const token = localStorage.getItem(DICTIONARY.accessToken);

  return {
    isLogged: token !== undefined && token !== null,
  };
};

export default useLogger;
