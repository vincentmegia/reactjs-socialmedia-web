import { memo, PropsWithChildren } from 'react';
import { Button } from 'react-bootstrap'
import DebugRender from '../tools/DebugRender';
import './MenuSidebar.css'
import { IMenuSidebarProps } from './widgetsidebar-types';

const equals = (prevProps: Readonly<PropsWithChildren<IMenuSidebarProps>>, 
    nextProps: Readonly<PropsWithChildren<IMenuSidebarProps>>) => {
    return prevProps.controlid === nextProps.controlid;
  }

const MenuSidebar = ({controlid, onMenuCallback}: IMenuSidebarProps) => {
    const onClick = (e: any) => {
        // debugger;
        onMenuCallback("sdfsd");
    }

    return (
        <div id="menu-sidebar" style={{ backgroundColor: 'red' }}>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">
                    <i className="fab fa-earlybirds fa-2x"></i>
                </li>
                <li className="sidebarlistitem">
                    <i className="fas fa-house-user fa-2x"></i> Home
                </li>
                <li className="sidebarlistitem">
                    <i className="fas fa-hashtag fa-2x"></i> Notifications
                </li>
                <li className="sidebarlistitem">
                    <i className="fas fa-envelope fa-2x"></i> Messagers
                </li>
                <li className="sidebarlistitem">
                    <i className="fas fa-bookmark fa-2x"></i> Bookmarks
                </li>
                <li className="sidebarlistitem">
                    <i className="fas fa-list fa-2x"></i> List
                </li>
                <li className="sidebarlistitem">
                    <i className="fas fa-user fa-2x"></i> Profile
                </li>
                <li className="sidebarlistitem">
                    <i className="fas fa-ellipsis-h fa-2x"></i> More
                </li>
                <li className="sidebarlistitem">
                    <Button onClick={onClick}>Tweet</Button>
                </li>
            </ul>
            <DebugRender/>
        </div>
    )
}

export default memo(MenuSidebar, equals);
