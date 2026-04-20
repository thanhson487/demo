import React from 'react';
import { Layout, Input, Badge, Avatar } from 'antd';
import { Search, Bell, HelpCircle, ChevronDown, Globe } from 'lucide-react';
import styled from 'styled-components';
import { tokens } from '../../theme/tokens';

const { Header: AntHeader } = Layout;

const HeaderWrapper = styled(AntHeader)`
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px !important;
  height: 64px !important;
  background: rgba(248, 249, 255, 0.8) !important;
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 2px rgba(11, 28, 48, 0.05) !important;
  border-bottom: 1px solid ${tokens.colorBorder};
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
`;

const StyledInput = styled(Input)`
  max-width: 400px;
  background: ${tokens.colorBgContainer} !important;
  border: 1px solid ${tokens.colorBorder} !important;
  
  &:focus {
    border-color: ${tokens.colorPrimary} !important;
    box-shadow: 0 0 0 2px rgba(0, 87, 194, 0.1) !important;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconButton = styled.div`
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${tokens.colorTextSecondary};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: ${tokens.colorSidebar};
    color: ${tokens.colorPrimary};
  }
`;

const SiteSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${tokens.colorSidebar};
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s;
  
  span {
    font-size: 12px;
    font-weight: 600;
    color: ${tokens.colorPrimary};
  }
  
  &:hover {
    background: #e5eeff;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-left: 16px;
  margin-left: 8px;
  border-left: 1px solid ${tokens.colorBorder};
  cursor: pointer;
  
  .info {
    text-align: right;
    
    p {
      margin: 0;
      line-height: 1;
    }
    
    .name {
      font-size: 13px;
      font-weight: 600;
      color: ${tokens.colorTextBase};
    }
    
    .role {
      font-size: 10px;
      color: ${tokens.colorTextSecondary};
      margin-top: 4px;
    }
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <SearchWrapper>
        <StyledInput 
          prefix={<Search size={16} color={tokens.colorTextSecondary} />} 
          placeholder="Search architecture..." 
        />
        
        <SiteSelector>
          <Globe size={14} color={tokens.colorPrimary} />
          <span>Global Site Selector</span>
          <ChevronDown size={14} color={tokens.colorTextSecondary} />
        </SiteSelector>
      </SearchWrapper>
      
      <RightSection>
        <IconButton>
          <Badge dot color={tokens.colorPrimary}>
            <Bell size={20} />
          </Badge>
        </IconButton>
        
        <IconButton>
          <HelpCircle size={20} />
        </IconButton>
        
        <UserProfile>
          <div className="info">
            <p className="name">Alex Architect</p>
            <p className="role">Enterprise Admin</p>
          </div>
          <Avatar 
            src="https://picsum.photos/seed/architect/100/100" 
            size={36} 
            style={{ border: `2px solid ${tokens.colorPrimary}` }}
          />
        </UserProfile>
      </RightSection>
    </HeaderWrapper>
  );
};
