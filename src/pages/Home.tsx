import React from 'react'
import { MainContent } from '../components/MainContent'
import { Sidebar } from '../components/Sidebar'
import styled from 'styled-components'

const StyledHome = styled.div`
    display: flex;
    position: relative;
`;

export function Home() {
    return (
        <StyledHome>
            <Sidebar />
            <MainContent />
        </StyledHome>
    )
}
