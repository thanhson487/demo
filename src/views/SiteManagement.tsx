import React from 'react';
import { Table, Button, Tag, Layout, Badge, Row, Col, Card, Avatar } from 'antd';
import { 
  Globe, 
  Plus, 
  ExternalLink, 
  MoreVertical, 
  Activity, 
  Zap, 
  Rocket, 
  Terminal, 
  Code,
  CheckCircle2,
  X
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

const EnvItem = styled.div<{ active?: boolean }>`
  background: ${props => props.active ? '#eff4ff' : 'transparent'};
  border: 1px solid ${props => props.active ? tokens.colorPrimary + '20' : 'transparent'};
  padding: 12px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: #f8f9ff;
    border-color: ${tokens.colorBorder};
  }
  
  .meta {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .text {
      p { margin: 0; font-size: 13px; font-weight: 700; color: ${tokens.colorTextBase}; }
      span { font-size: 10px; font-family: monospace; color: ${tokens.colorTextSecondary}; }
    }
  }
`;

export const SiteManagement: React.FC = () => {
  const sites = [
    { key: '1', name: 'North America Global', domain: 'architect-us.io', locale: 'EN-US', status: 'ACTIVE', flag: 'US', color: tokens.colorPrimary, deploy: '2h ago' },
    { key: '2', name: 'European Portal', domain: 'architect.eu', locale: 'FR-EU', status: 'INACTIVE', flag: 'EU', color: tokens.colorWarning, deploy: '5d ago' },
    { key: '3', name: 'Tokyo Region', domain: 'jp.architect-node.com', locale: 'JA-JP', status: 'ACTIVE', flag: 'JP', color: '#425d97', deploy: '15m ago' },
  ];

  const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',
      render: (text: string, record: any) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: record.color + '10', color: record.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 10 }}>
            {record.flag}
          </div>
          <span style={{ fontSize: 13, fontWeight: 700 }}>{text}</span>
        </div>
      ),
    },
    {
      title: 'DOMAIN',
      dataIndex: 'domain',
      render: (text: string) => <span style={{ fontSize: 12, fontFamily: 'monospace', color: tokens.colorTextSecondary }}>{text}</span>,
    },
    {
      title: 'LOCALE',
      dataIndex: 'locale',
      render: (text: string) => <Tag color="blue" style={{ borderRadius: 4, fontWeight: 800, fontSize: 9 }}>{text}</Tag>,
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status: string) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 30, height: 16, borderRadius: 100, background: status === 'ACTIVE' ? tokens.colorPrimary : '#e5e5e5', position: 'relative', padding: 2 }}>
            <div style={{ width: 12, height: 12, background: 'white', borderRadius: '50%', marginLeft: status === 'ACTIVE' ? 14 : 0, transition: 'all 0.2s' }} />
          </div>
          <span style={{ fontSize: 11, fontWeight: 700, color: status === 'ACTIVE' ? tokens.colorPrimary : tokens.colorTextSecondary }}>{status === 'ACTIVE' ? 'Active' : 'Inactive'}</span>
        </div>
      ),
    },
    {
      title: 'LAST DEPLOY',
      dataIndex: 'deploy',
      render: (text: string) => <span style={{ fontSize: 12, color: tokens.colorTextSecondary }}>{text}</span>,
    },
    {
      title: 'ACTIONS',
      align: 'right' as const,
      render: () => <Button type="text" icon={<MoreVertical size={18} />} />,
    },
  ];

  return (
    <ViewWrapper>
      <MainContent>
        <PageHeader>
          <div className="title-area">
            <h2>Site Management</h2>
            <p>Configure and monitor your enterprise domain ecosystem.</p>
          </div>
          
          <div style={{ display: 'flex', gap: 12 }}>
            <Button type="link" style={{ fontWeight: 700 }}>Export CSV</Button>
            <Button type="primary" icon={<Plus size={16} />} style={{ fontWeight: 700 }}>Register Domain</Button>
          </div>
        </PageHeader>
        
        <TableCard>
          <Table dataSource={sites} columns={columns} pagination={false} />
        </TableCard>
        
        <Row gutter={24} style={{ marginTop: 32 }}>
          <Col span={8}>
            <Card style={{ borderRadius: 16, background: '#f8f9ff', border: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 8, background: 'white', borderRadius: 8, color: tokens.colorPrimary, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}><Activity size={18} /></div>
                <span style={{ fontWeight: 700, fontSize: 13 }}>Health Status</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <span style={{ fontSize: 24, fontWeight: 800, fontFamily: tokens.fontFamilyHeadline }}>99.98%</span>
                <Tag color="success" style={{ fontWeight: 700, fontSize: 9 }}>OPTIMAL</Tag>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ borderRadius: 16, background: '#f8f9ff', border: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 8, background: 'white', borderRadius: 8, color: tokens.colorWarning, boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}><Zap size={18} /></div>
                <span style={{ fontWeight: 700, fontSize: 13 }}>Avg. Response</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <span style={{ fontSize: 24, fontWeight: 800, fontFamily: tokens.fontFamilyHeadline }}>142ms</span>
                <Tag color="warning" style={{ fontWeight: 700, fontSize: 9 }}>-12% YTD</Tag>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ borderRadius: 16, background: '#f8f9ff', border: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ padding: 8, background: 'white', borderRadius: 8, color: '#425d97', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}><Globe size={18} /></div>
                <span style={{ fontWeight: 700, fontSize: 13 }}>Total Locales</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <span style={{ fontSize: 24, fontWeight: 800, fontFamily: tokens.fontFamilyHeadline }}>14</span>
                <Tag color="processing" style={{ fontWeight: 700, fontSize: 9 }}>+2 ADDED</Tag>
              </div>
            </Card>
          </Col>
        </Row>
      </MainContent>
      
      <DetailsSider width={400}>
        <div className="header">
          <div>
            <h3>Site Details</h3>
            <p>North America Global</p>
          </div>
          <X size={18} color={tokens.colorTextSecondary} style={{ cursor: 'pointer' }} />
        </div>
        
        <div style={{ marginBottom: 32 }}>
          <h5 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: tokens.colorTextSecondary, marginBottom: 16 }}>Environments</h5>
          <EnvItem active>
            <div className="meta">
              <Rocket size={18} color={tokens.colorPrimary} />
              <div className="text">
                <p>Production</p>
                <span>prod-v2.1.0</span>
              </div>
            </div>
            <CheckCircle2 size={16} fill={tokens.colorPrimary} color="white" />
          </EnvItem>
          <EnvItem>
            <div className="meta">
              <Terminal size={18} color={tokens.colorTextSecondary} />
              <div className="text">
                <p>Staging</p>
                <span>stage-v2.2.0-rc1</span>
              </div>
            </div>
            <div style={{ width: 14, height: 14, border: '2px solid #ccc', borderRadius: '50%' }} />
          </EnvItem>
          <EnvItem>
            <div className="meta">
              <Code size={18} color={tokens.colorTextSecondary} />
              <div className="text">
                <p>Development</p>
                <span>dev-feature-auth</span>
              </div>
            </div>
            <div style={{ width: 14, height: 14, border: '2px solid #ccc', borderRadius: '50%' }} />
          </EnvItem>
        </div>
        
        <div style={{ marginBottom: 32 }}>
          <h5 style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: tokens.colorTextSecondary, marginBottom: 16 }}>Metadata</h5>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', color: tokens.colorTextSecondary, marginLeft: 8 }}>Canonical URL</label>
            <div style={{ background: '#f8f9ff', padding: '10px 12px', borderRadius: 8, fontSize: 12, fontFamily: 'monospace', marginTop: 4 }}>https://architect-us.io</div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', color: tokens.colorTextSecondary, marginLeft: 8 }}>Region Owner</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#f8f9ff', padding: '10px 12px', borderRadius: 8, marginTop: 4 }}>
              <Avatar size={20} src="https://picsum.photos/seed/sarah/100/100" />
              <span style={{ fontSize: 12, fontWeight: 600 }}>Sarah Jenkins</span>
            </div>
          </div>
          <div>
            <label style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', color: tokens.colorTextSecondary, marginLeft: 8 }}>Tags</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {['Primary-Node', 'AWS-Oregon', 'Enterprise-Plan'].map(tag => (
                <Tag key={tag} bordered={false} style={{ background: tokens.colorPrimary + '10', color: tokens.colorPrimary, fontWeight: 700, fontSize: 10, borderRadius: 4 }}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 24 }}>
          <Button block type="primary" style={{ height: 42, fontWeight: 700 }}>Update Configuration</Button>
          <Button block danger type="text" style={{ fontWeight: 700 }}>Purge Edge Cache</Button>
        </div>
      </DetailsSider>
    </ViewWrapper>
  );
};
