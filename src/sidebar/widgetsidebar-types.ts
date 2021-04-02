import { IServiceContext } from "../services/service-context"

export interface IWidgetSidebarProps {
	serviceContext: IServiceContext
}

export interface IMenuSidebarProps {
	onMenuCallback:any,
	controlid: number
}