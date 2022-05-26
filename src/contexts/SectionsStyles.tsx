import { createContext, useContext, useState } from "react";

type StateTypes = {
    bg: string;
    text: string;
}

type SectionTypes = {
    values: StateTypes;
    setValues: (value: StateTypes) => void;
}

const initialValue = {
    values: {
        bg: '#fdd242',
        text: 'Section Default'
    },
    setValues: () => { }
}

export const SectionsContext = createContext<SectionTypes>(initialValue);

export const SectionsStylesProvider = ({ children }: any) => {
    const [values, setValues] = useState<StateTypes>(initialValue.values);

    return (
        <SectionsContext.Provider value={{ values, setValues }}>
            {children}
        </SectionsContext.Provider>
    )
}

export const useSectionsContext = () => {
    const { values, setValues } = useContext(SectionsContext);

    return { values, setValues };
}