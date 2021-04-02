import React, { memo, PropsWithChildren } from "react"
import { Button, Container } from "react-bootstrap"
import DebugRender from "../tools/DebugRender"
import "./MenuSidebar.css"
import { IMenuSidebarProps } from "./widgetsidebar-types"
import { v4 as uuidv4 } from 'uuid';

const equals = (prevProps: Readonly<PropsWithChildren<IMenuSidebarProps>>,
	nextProps: Readonly<PropsWithChildren<IMenuSidebarProps>>) => {
	return prevProps.controlid === nextProps.controlid
}

interface IMenuItemProps {
	className: string
	menuText?: string
}

const MenuItem = ({className, menuText}: IMenuItemProps) => {
	return <li className="sidebarlist-item">
		<div className="sidebarlist-item-container">
			<div className="sidebarlist-item-container-cell-icon"><i className={`${className} fa-2x`}/></div>
			<div>{menuText ?? ""}</div>
		</div>
	</li>
}

const MenuSidebar = ({ controlid, onMenuCallback }: IMenuSidebarProps) => {
	const onClick = (e: any) => onMenuCallback("sdfsd")
	const items = [
		{ className: "fab fa-earlybirds" },
		{ className: "fas fa-house-user", menuText: "Home" },
		{ className: "fas fa-hashtag", menuText: "Notifications" },
		{ className: "fas fa-hashtag", menuText: "Messagers" },
		{ className: "fas fa-bookmark", menuText: "Bookmarks" },
		{ className: "fas fa-list", menuText: "List" },
		{ className: "fas fa-user", menuText: "Profile" },
		{ className: "fas fa-ellipsis-h", menuText: "More" },
		{ className: "fas fa-ellipsis-h", children: <Button onClick={onClick}>Tweet</Button> }
	]

	return (
		<div id="menu-sidebar" style={{ backgroundColor: "red" }}>
			<ul className="sidebarlist">
				{
					items.map(item => <MenuItem
						key={uuidv4()}
						className={item.className} 
						menuText={item.menuText} />)
				}
			</ul>
			<DebugRender />
		</div>
	)
}

export default memo(MenuSidebar, equals)
