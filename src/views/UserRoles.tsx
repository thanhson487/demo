import React from 'react';
import { Table, Button, Tag, Avatar, Layout, Switch, Row, Col, Card } from 'antd';
import { 
  Filter, 
  UserPlus, 
  Edit2, 
  Settings2, 
  Shield, 
  History, 
  X,
  Users
} from 'lucide-react';
import styled from 'styled-components';
import { tokens } from '../theme/tokens';

const { Sider, Content } = Layout;

const ViewWrapper = styled(Layout)`
  background: transparent;
  height: calc(100vh - 64px);
`;

const MainContent = styled(Content)`
  padding: 32px;
  overflow-y: auto;
`;

const PageHeader = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  .title-area {
    h2 {
      font-family: ${tokens.fontFamilyHeadline};
      font-size: 32px;
      font-weight: 800;
      margin: 0;
      letter-spacing: -0.02em;
    }
    
    p {
      font-size: 14px;
      color: ${tokens.colorTextSecondary};
      margin: 4px 0 0 0;
    }
  }
`;

const TableCard = styled.div`
  background: white;
  border-radius: 16px;
  border: 1px solid ${tokens.colorBorder};
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
`;

const DetailsSider = styled(Sider)`
  background: white !important;
  border-left: 1px solid ${tokens.colorBorder};
  padding: 32px;
  overflow-y: auto;
  box-shadow: -16px 0 32px rgba(11, 28, 48, 0.04);
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 32px;
    
    h3 {
      font-family: ${tokens.fontFamilyHeadline};
      font-size: 20px;
      font-weight: 800;
      margin: 0;
    }
    
    p {
      font-size: 11px;
      font-weight: 600;
      color: ${tokens.colorTextSecondary};
    }
  }
`;

const PermissionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  
  .info {
    max-width: 80%;
    
    p {
      margin: 0;
      font-size: 13px;
      font-weight: 700;
    }
    
    span {
      font-size: 11px;
      color: ${tokens.colorTextSecondary};
    }
  }
`;

const AuditCard = styled.div`
  margin-top: 24px;
  background: linear-gradient(135deg, ${tokens.colorWarning}, ${tokens.tertiary || '#c64f00'});
  border-radius: 16px;
  padding: 24px;
  color: white;
  position: relative;
  overflow: hidden;
  
  h4 {
    color: white;
    font-weight: 800;
    margin: 12px 0 8px 0;
  }
  
  p {
    font-size: 11px;
    opacity: 0.9;
    margin-bottom: 16px;
  }
  
  button {
    background: transparent;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    color: white;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    padding: 0;
    
    &:hover {
      border-bottom-color: white;
    }
  }
`;

export const UserRoles: React.FC = () => {
  const users = [
    { key: '1', name: 'Julianne Devis', email: 'julianne@enterprise.com', role: 'ADMIN', scope: 'All Micro-sites', initial: 'JD', color: tokens.colorPrimary },
    { key: '2', name: 'Marcus Knight', email: 'm.knight@agency.co', role: 'EDITOR', scope: 'Global Marketing', initial: 'MK', color: '#425d97' },
    { key: '3', name: 'Sarah Lin', email: 's.lin@internal.com', role: 'APPROVER', scope: 'EMEA Region', initial: 'SL', color: tokens.colorTextSecondary },
  ];

  const columns = [
    {
      title: 'USER',
      dataIndex: 'name',
      render: (text: string, record: any) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 8, background: record.color + '20', color: record.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            {record.initial}
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{text}</div>
            <div style={{ fontSize: 11, color: tokens.colorTextSecondary }}>{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'ROLE',
      dataIndex: 'role',
      render: (role: string) => (
        <Tag color={role === 'ADMIN' ? 'orange' : role === 'EDITOR' ? 'blue' : 'default'} style={{ borderRadius: 100, fontWeight: 800, fontSize: 10 }}>
          {role}
        </Tag>
      ),
    },
    {
      title: 'SITE SCOPE',
      dataIndex: 'scope',
      render: (text: string) => <span style={{ fontSize: 13, fontWeight: 500, color: tokens.colorTextSecondary }}>{text}</span>,
    },
    {
      title: 'ACTION',
      align: 'right' as const,
      render: () => (
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', color: tokens.colorTextSecondary }}>
          <Button type="text" icon={<Edit2 size={16} />} />
        </div>
      ),
    },
  ];

  return (
    <ViewWrapper>
      <MainContent>
        <PageHeader>
          <div className="title-area">
            <h2>User Management</h2>
            <p>Configure workspace access and granular functional permissions for your team.</p>
          </div>
          
          <div style={{ display: 'flex', gap: 12 }}>
            <Button icon={<Filter size={16} />} style={{ fontWeight: 600 }}>Filter</Button>
            <Button type="primary" icon={<UserPlus size={16} />} style={{ fontWeight: 600 }}>Invite Member</Button>
          </div>
        </PageHeader>
        
        <TableCard>
          <Table 
            dataSource={users} 
            columns={columns} 
            pagination={false}
            rowClassName={(record, index) => index === 1 ? 'bg-blue-50/30' : ''}
          />
        </TableCard>
        
        <div style={{ marginTop: 40 }}>
          <h4 style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: tokens.colorTextSecondary, marginBottom: 24 }}>Role Capability Reference</h4>
          <Row gutter={24}>
            {['Administrator', 'Editor', 'Approver'].map((role, i) => (
              <Col span={8} key={role}>
                <Card style={{ borderRadius: 12, border: `1px solid ${tokens.colorBorder}30` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: i === 0 ? tokens.colorPrimary : i === 1 ? '#425d97' : tokens.colorTextSecondary }} />
                    <span style={{ fontWeight: 700, fontSize: 14 }}>{role}</span>
                  </div>
                  <p style={{ fontSize: 11, color: tokens.colorTextSecondary, margin: 0 }}>
                    {i === 0 ? 'Full system access, user management, billing, and global settings configuration.' :
                     i === 1 ? 'Focuses on content creation, editing, and assets within their assigned site scopes.' :
                     'Final review stage for content quality assurance before deployment to live.'}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </MainContent>
      
      <DetailsSider width={380}>
        <div className="header">
          <div>
            <h3>Functional Permissions</h3>
            <p>SELECTED: EDITOR</p>
          </div>
          <X size={18} color={tokens.colorTextSecondary} style={{ cursor: 'pointer' }} />
        </div>
        
        <div className="permissions">
          {[
            { title: 'Create Content', desc: 'Allowed to initialize new pages and assets', active: true },
            { title: 'Edit Existing', desc: 'Modify draft and published content items', active: true },
            { title: 'Delete', desc: 'Permanently remove content from library', active: false },
            { title: 'Publish', desc: 'Push content to live environment', active: true },
          ].map(p => (
            <PermissionItem key={p.title} style={{ opacity: p.active ? 1 : 0.6 }}>
              <div className="info">
                <p>{p.title}</p>
                <span>{p.desc}</span>
              </div>
              <Switch size="small" checked={p.active} />
            </PermissionItem>
          ))}
        </div>
        
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: `1px solid ${tokens.colorBorder}` }}>
          <Button block type="primary" style={{ height: 42, fontWeight: 700, background: tokens.colorTextBase }}>
            Update Permissions
          </Button>
        </div>
        
        <AuditCard>
          <Shield size={32} />
          <h4>Audit Logs</h4>
          <p>Track every permission change and user invite for full compliance reporting.</p>
          <button>View Full History</button>
        </AuditCard>
        
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 24 }}>
          <div style={{ display: 'flex', marginLeft: 8 }}>
            {[1, 2, 3].map(i => (
              <Avatar size="small" src={`https://picsum.photos/seed/face${i}/100/100`} style={{ marginLeft: -8, border: '2px solid white' }} key={i} />
            ))}
            <Avatar size="small" style={{ marginLeft: -8, border: '2px solid white', background: '#d9e2ff', color: tokens.colorPrimary, fontSize: 8, fontWeight: 800 }}>+3</Avatar>
          </div>
          <span style={{ fontSize: 10, fontWeight: 600, color: tokens.colorTextSecondary }}>5 active users in Permissions Manager</span>
        </div>
      </DetailsSider>
    </ViewWrapper>
  );
};
