import React, { useEffect } from 'react'
import { ValueTypes, useSectionsContext } from '../../contexts/SectionsStyles';
import { ButtonSidebar } from '../ButtonSidebar'
import { SidebarWrap } from './style'

const sectionsStyles = {
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
    const { setValues } = useSectionsContext();

    function handleChangeSection(values: ValueTypes) {
        setValues(values);
    }

    return (
        <SidebarWrap>
            <ButtonSidebar
                onClick={() => handleChangeSection(sectionsStyles.section1)}> Style 1
            </ButtonSidebar>
            <ButtonSidebar
                onClick={() => handleChangeSection(sectionsStyles.section2)}> Style 2
            </ButtonSidebar>
            <ButtonSidebar
                onClick={() => handleChangeSection(sectionsStyles.section3)}> Style 3
            </ButtonSidebar>
        </SidebarWrap>
    )
}


