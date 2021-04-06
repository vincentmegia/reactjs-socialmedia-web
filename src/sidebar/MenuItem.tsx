import "./MenuItem.css"

interface IMenuItemProps {
	className?: string
	menuText?: string
	children?: any
	onItemClick?: any
}

const MenuItem = ({className, menuText, children, onItemClick}: IMenuItemProps) => {
	return <li  className="sidebarlist-item-container"
				onClick={onItemClick}>
			<div className="sidebarlist-item">
			<div className="sidebarlist-item-container-cell-icon">
				<i className={`${className} fa-2x`}/></div>
			<div>{menuText ?? ""}</div>
		</div>
	</li>
}

export default MenuItem