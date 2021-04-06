import React, { memo, MouseEventHandler, PropsWithChildren, useCallback, useMemo } from "react"
import DebugRender from "../tools/DebugRender"
import "./MenuSidebar.css"
import { IMenuSidebarProps } from "./widgetsidebar-types"
import { v4 as uuidv4 } from 'uuid';
import { IMenuItem, getMenuItems } from "./MenuSidebar.service";
import { Button } from "react-bootstrap";

const equals = (prevProps: Readonly<PropsWithChildren<IMenuSidebarProps>>,
	nextProps: Readonly<PropsWithChildren<IMenuSidebarProps>>) => {
	return prevProps.controlid === nextProps.controlid
}

interface IMenuItemProps {
	className?: string
	menuText?: string
	children?: any
	onItemClick?: any
}

/**
 * Needs improvement later
 * @param name 
 * @param text 
 * @returns 
 */
const elementFactory = (name: string, text: string) => {
	let element = null;
	switch(name) {
		case "button":
			element = <Button>{text}</Button>
			break;
	}
	return element
}

const MenuItem = ({className, menuText, children, onItemClick}: IMenuItemProps) => {
	const normal = <div className="sidebarlist-item">
		<div className="sidebarlist-item-container-cell-icon">
			<i className={`${className} fa-2x`}/></div>
		<div>{menuText ?? ""}</div>
	</div>
	const element = elementFactory(children, "Tweet");
	debugger;
	return <li className="sidebarlist-item-container"
				onClick={onItemClick}>
		{element ?? normal}
	</li>
}


const MenuSidebar = ({ controlid, onMenuCallback }: IMenuSidebarProps) => {
	const onItemClick = useCallback((event: React.MouseEvent<HTMLLIElement, MouseEvent>) =>{
		console.log(new Date().getMilliseconds())
	}, [controlid])

	const items = getMenuItems();
	console.log(items)

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
			</ul>
			<DebugRender />
		</div>
	)
}

export default memo(MenuSidebar, equals)
