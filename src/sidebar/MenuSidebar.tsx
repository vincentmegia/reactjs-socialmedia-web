import "./MenuSidebar.css"
import React, { memo, PropsWithChildren, useCallback } from "react"
import DebugRender from "../tools/DebugRender"
import { IMenuSidebarProps } from "./widgetsidebar-types"
import { v4 as uuidv4 } from 'uuid'
import { IMenuItem, getMenuItems } from "./MenuSidebar.service"
import MenuItem from "./MenuItem"
import { Button } from "react-bootstrap"

const equals = (prevProps: Readonly<PropsWithChildren<IMenuSidebarProps>>,
	nextProps: Readonly<PropsWithChildren<IMenuSidebarProps>>) => {
	return prevProps.controlid === nextProps.controlid
}


const MenuSidebar = ({ controlid, onMenuCallback }: IMenuSidebarProps) => {
	const onItemClick = useCallback((event: React.MouseEvent<HTMLLIElement, MouseEvent>) =>{
		console.log(new Date().getMilliseconds())
	}, [controlid])
	const items = getMenuItems();
	return (
		<div id="menu-sidebar">
			<ul className="sidebarlist">
				{
					items.map((item: IMenuItem) => <MenuItem
						key={uuidv4()}
						className={item.className} 
						menuText={item.menuText}
						children={item.children}
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
