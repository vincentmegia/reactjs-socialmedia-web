import fakeMenuData from "./MenuSidebar.service.json"

export interface IMenuItem {
	className: string
	menuText?: string
	children?: any
	onItemClick?: any
}

export const getMenuItems = (): IMenuItem[] => {
	return fakeMenuData.data
}