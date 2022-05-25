import React from 'react'
import { ButtonSidebar } from '../ButtonSidebar'
import { SidebarWrap } from './style'

export function Sidebar() {
    return (
        <SidebarWrap>
            <ButtonSidebar> Style 1 </ButtonSidebar>
            <ButtonSidebar> Style 2 </ButtonSidebar>
        </SidebarWrap>
    )
}
