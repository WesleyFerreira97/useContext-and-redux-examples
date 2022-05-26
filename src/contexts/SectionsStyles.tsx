import { createContext, useContext, useState } from "react";

export type ValueTypes = {
    bg: string;
    text: string;
}

type SectionTypes = {
    values: ValueTypes;
    setValues: (value: ValueTypes) => void;
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
    const [values, setValues] = useState<ValueTypes>(initialValue.values);

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