import {COMMON} from '@styles/common';
import {createContext, ReactNode, SetStateAction, useState, Dispatch} from 'react';

interface Props {
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
}

const defaultValue = {
  backgroundColor: COMMON.color.lightBackgroundColor,
  setBackgroundColor: () => {},
};

export const BackgroundMode = createContext<Props>(defaultValue);

export const BackgroundModeProvider = ({children}: {children: ReactNode}) => {
  const [backgroundColor, setBackgroundColor] = useState(COMMON.color.lightBackgroundColor);
  return <BackgroundMode.Provider value={{backgroundColor, setBackgroundColor}}>{children}</BackgroundMode.Provider>;
};
