import fakeMenuData from "./MenuSidebar.service.json"

export interface IMenuItem {
	className: string
	menuText?: string
	children?: any
	onItemClick?: any,
	url?: string
}

export const getMenuItems = (): IMenuItem[] => {
	return fakeMenuData.data
}