import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  GitFork, 
  ShieldCheck, 
  Plus, 
  Settings, 
  HelpCircle 
} from 'lucide-react';
import styled from 'styled-components';
import { tokens } from '../../theme/tokens';

const { Sider } = Layout;

const SidebarWrapper = styled(Sider)`
  height: 100vh;
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  border-right: 1px solid ${tokens.colorBorder};
  
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    padding: 24px 0;
  }
`;

const LogoSection = styled.div`
  padding: 0 24px;
  margin-bottom: 32px;
  
  h1 {
    font-family: ${tokens.fontFamilyHeadline};
    font-weight: 800;
    font-size: 20px;
    color: ${tokens.colorPrimary};
    margin: 0;
  }
  
  p {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
    color: ${tokens.colorTextSecondary};
    margin: 4px 0 0 0;
  }
`;

const BottomSection = styled.div`
  margin-top: auto;
  padding: 0 16px;
  
  .create-btn {
    width: 100%;
    margin-bottom: 24px;
    background: ${tokens.colorPrimary};
    height: 44px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    
    &:hover {
      opacity: 0.9;
    }
  }
`;

const StyledMenu = styled(Menu)`
  background: transparent !important;
  border-inline-end: none !important;
  
  .ant-menu-item {
    height: 48px !important;
    line-height: 48px !important;
    margin: 4px 12px !important;
    width: calc(100% - 24px) !important;
    border-radius: 8px !important;
    color: ${tokens.colorTextSecondary} !important;
    font-weight: 500;
    
    &:hover {
      background: rgba(255, 255, 255, 0.5) !important;
      color: ${tokens.colorPrimary} !important;
    }
    
    &.ant-menu-item-selected {
      background: #ffffff !important;
      color: ${tokens.colorPrimary} !important;
      box-shadow: 0 2px 4px rgba(0, 87, 194, 0.05);
      font-weight: 700;
    }
  }
`;

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const menuItems = [
    { key: 'dashboard', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { key: 'content', icon: <FileText size={18} />, label: 'Content Library' },
    { key: 'media', icon: <ImageIcon size={18} />, label: 'Media Assets' },
    { key: 'workflows', icon: <GitFork size={18} />, label: 'Workflows' },
    { key: 'roles', icon: <ShieldCheck size={18} />, label: 'User Roles' },
  ];

  const secondaryItems = [
    { key: 'settings', icon: <Settings size={18} />, label: 'Settings' },
    { key: 'support', icon: <HelpCircle size={18} />, label: 'Support' },
  ];

  return (
    <SidebarWrapper width={256} theme="light">
      <LogoSection>
        <h1>Architect</h1>
        <p>Enterprise CMS</p>
      </LogoSection>
      
      <StyledMenu
        mode="inline"
        selectedKeys={[currentView]}
        items={menuItems}
        onClick={({ key }) => onViewChange(key)}
      />
      
      <BottomSection>
        <Button 
          type="primary" 
          icon={<Plus size={16} />} 
          className="create-btn"
        >
          Create New Page
        </Button>
        
        <StyledMenu
          mode="inline"
          items={secondaryItems}
          selectable={false}
          style={{ paddingBottom: 16 }}
        />
      </BottomSection>
    </SidebarWrapper>
  );
};
