import React, { useContext } from 'react';
import { Button, Text } from 'grommet';

const T = ({ children }) => (<Text style={{ whiteSpace: 'nowrap' }}>{children}</Text>);
export const IsoCountContext = React.createContext(null);
export const Iso3Label = ({ iso3, onClick }) => {
  const count = useContext(IsoCountContext);
  if (!iso3 || iso3 === 'null') return <Text>(none)</Text>;
  if (count && count.get(iso3) > 1) {
    return <Button onClick={onClick} size="small" color="grid-button" primary label={<T>{`${iso3} (${count.get(iso3)})`} </T>}/>;
  }
  return <T>{iso3} {count.get(iso3)}</T>;
};
