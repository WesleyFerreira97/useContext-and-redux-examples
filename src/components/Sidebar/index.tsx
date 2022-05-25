import React, { useEffect } from 'react'
import { useSectionsContext } from '../../contexts/SectionsContext'
import { ButtonSidebar } from '../ButtonSidebar'
import { SidebarWrap } from './style'

const SectionsStyles = {
    section1: {
        bg: '#FF2E63',
        text: 'Section 1'
    },
    section2: {
        bg: '#3e13b4',
        text: 'Section 2'
    },
    section3: {
        bg: '#292928',
        text: 'Section 3'
    }
}

export function Sidebar() {
    const { setContextState } = useSectionsContext();

    useEffect(() => {

        setContextState({
            bg: 'black',
            text: 'fuck'
        });
    }, [])

    return (
        <SidebarWrap>
            <ButtonSidebar> Style 1 </ButtonSidebar>
            <ButtonSidebar> Style 2 </ButtonSidebar>
        </SidebarWrap>
    )
}
