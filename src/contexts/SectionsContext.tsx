import React, { createContext, useContext, useState } from "react";

type SectionsContextTypes = {
    bg: string;
    text: string;
}

type SectionsContextProviderProps = {
    state: SectionsContextTypes;
    setState: (state: SectionsContextTypes) => void;
}

const initialValues = {
    bg: '#680ba7',
    text: 'Section Default'
}

const SectionContext = createContext<SectionsContextTypes>(initialValues);

export const useSectionsContext = () => {
    const context = useContext(SectionContext);
    const [contextState, setContextState] = useState<SectionsContextTypes>(context);

    return { contextState, setContextState };
}

type SectionsStyleTypes = {
    children: React.ReactNode
}

export const SectionsStyleProvider = ({ children }: SectionsStyleTypes) => {

    return (
        <SectionContext.Provider value={initialValues}>
            {children}
        </SectionContext.Provider>
    )
}

