import { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import './WidgetSidebar.css'

const WidgetSidebar = () => {
    const [searchKey, setSearchKey] = useState('')

    return (
        <div id="widget-sidebar">
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
                            style={{ height: '50px' }}
                            className="widgetsidebarround"
                        ></FormControl>
                    </InputGroup>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSidebar
