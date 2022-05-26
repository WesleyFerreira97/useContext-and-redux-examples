import React, { createContext } from 'react'
import { MainContent } from '../components/MainContent'
import { Sidebar } from '../components/Sidebar'
import styled from 'styled-components'
import { SectionsStyleProvider } from '../contexts/SectionsContext';
import { SectionsStylesProvider } from '../contexts/SectionsStyles';

const StyledHome = styled.div`
    display: flex;
    position: relative;
`;

export function Home() {
    return (
        <SectionsStylesProvider>
            <SectionsStyleProvider>
                <StyledHome>
                    <Sidebar />
                    <MainContent />
                </StyledHome>
            </SectionsStyleProvider>
        </SectionsStylesProvider>
    )
}
