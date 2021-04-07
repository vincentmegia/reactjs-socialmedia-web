import "./MenuItem.css"
import React from "react"
import { Link } from "react-router-dom"


interface IMenuItemProps {
	className?: string
	menuText?: string
	url?: string
	onItemClick?: any	
}

const MenuItem = ({className, menuText, url, onItemClick}: IMenuItemProps) => {
	return <li  className="sidebarlist-item-container"
					onClick={onItemClick}>
				<div className="sidebarlist-item">
				<div className="sidebarlist-item-container-cell-icon">
					<i className={`${className} fa-2x`}/></div>
					<Link to={url ?? ""}>{menuText ?? ""}</Link>
			</div>
		</li>
}

export default MenuItem