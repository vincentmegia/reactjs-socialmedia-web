import React, { memo, useContext, useState } from "react"
import { FormControl, InputGroup } from "react-bootstrap"
import { ServiceContext } from "../services/service-context"
import DebugRender from "../tools/DebugRender"
import "./WidgetSidebar.css"

const WidgetSidebar = () => {
	// const {postService} = serviceContext
	const [searchKey, setSearchKey] = useState("")
	const { postService } = useContext(ServiceContext)

	return (
		<div id="widget-sidebar">
			postService test: {postService.toString()}
			<ul className="widgetsidebarlist">
				<li className="widgetsidebarlistitem">
					<InputGroup className="widgetsidebarround">
						<InputGroup.Prepend>
							<InputGroup.Text>
								<i className="fas fa-search fa-2x"></i>
							</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							placeholder="Search post"
							style={{ height: "50px" }}
							className="widgetsidebarround"
						></FormControl>
					</InputGroup>
				</li>
			</ul>
			<DebugRender />
		</div>
	)
}

export default memo(WidgetSidebar)
