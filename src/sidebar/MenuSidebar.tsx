import "./MenuSidebar.css"
import React, { memo, PropsWithChildren, useCallback, useEffect, useState } from "react"
import DebugRender from "../tools/DebugRender"
import { IMenuSidebarProps } from "./widgetsidebar-types"
import { IMenuItem, getMenuItems } from "./MenuSidebar.service"
import MenuItem from "./MenuItem"
import { Button } from "react-bootstrap"

const equals = (prevProps: Readonly<PropsWithChildren<IMenuSidebarProps>>,
	nextProps: Readonly<PropsWithChildren<IMenuSidebarProps>>) => {
	return prevProps.controlid === nextProps.controlid
}


const MenuSidebar = ({ controlid, onMenuCallback }: IMenuSidebarProps) => {
	const [items] = useState(getMenuItems())
	const onItemClick = useCallback((event: React.MouseEvent<HTMLLIElement, MouseEvent>) =>{
	}, [controlid])

	return (
		<div id="menu-sidebar">
			<ul className="sidebarlist">
				{
					items.map((item: IMenuItem, index: number) => <MenuItem
						key={index}
						className={item.className} 
						menuText={item.menuText}
						url={item.url}
						onItemClick={onItemClick} />)
				}
				<li className="sidebarlist-item-container empty">
					<Button>Tweet</Button>
				</li>
			</ul>
			<DebugRender />
		</div>
	)
}

export default memo(MenuSidebar, equals)
