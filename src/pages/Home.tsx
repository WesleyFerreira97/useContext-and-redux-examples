import { MainContent } from '../components/MainContent'
import { Sidebar } from '../components/Sidebar'
import styled from 'styled-components'
import { SectionsStylesProvider } from '../contexts/SectionsStyles';

const StyledHome = styled.div`
    display: flex;
    position: relative;
`;

export function Home() {
    return (
        <SectionsStylesProvider>
            <StyledHome>
                <Sidebar />
                <MainContent />
            </StyledHome>
        </SectionsStylesProvider>
    )
}
