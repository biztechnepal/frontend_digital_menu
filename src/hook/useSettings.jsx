import { useContext } from 'react';
import ConfigurationContext from '../contexts/ConfigurationContext';

// ----------------------------------------------------------------------

const useSettings = () => useContext(ConfigurationContext);

export default useSettings;
