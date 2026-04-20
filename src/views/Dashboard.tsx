import React from 'react';
import { Row, Col, Card, Avatar, Tag, Button } from 'antd';
import { 
  Globe, 
  FileText, 
  ArrowUpRight, 
  ExternalLink, 
  Edit3, 
  Upload, 
  PlusCircle, 
  PlayCircle 
} from 'lucide-react';
import styled from 'styled-components';
import { tokens } from '../theme/tokens';

const ViewWrapper = styled.div`
  padding: 32px;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
  
  h2 {
    font-family: ${tokens.fontFamilyHeadline};
    font-size: 32px;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.02em;
  }
  
  p {
    font-size: 16px;
    color: ${tokens.colorTextSecondary};
    margin: 8px 0 0 0;
  }
`;

const StatCard = styled(Card)`
  border-radius: 16px !important;
  border: 1px solid ${tokens.colorBorder} !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02) !important;
  
  .ant-card-body {
    padding: 24px !important;
  }
  
  .icon-wrapper {
    padding: 10px;
    border-radius: 12px;
    display: inline-flex;
    margin-bottom: 16px;
  }
  
  .label {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 11px;
    font-weight: 700;
    color: ${tokens.colorTextSecondary};
    margin-bottom: 4px;
  }
  
  .value {
    font-family: ${tokens.fontFamilyHeadline};
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
  }
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: ${tokens.colorBgContainer};
  border-radius: 12px;
  margin-bottom: 12px;
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background: #f0f7ff;
    transform: translateY(-1px);
  }
  
  .content {
    flex: 1;
    
    p {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      
      span {
        font-weight: 400;
        color: ${tokens.colorTextSecondary};
      }
      
      .link {
        color: ${tokens.colorPrimary};
      }
    }
    
    .meta {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: ${tokens.colorTextSecondary};
      margin-top: 4px;
    }
  }
`;

const ActionButton = styled(Button)`
  width: 100%;
  height: 60px !important;
  display: flex !important;
  align-items: center;
  gap: 16px !important;
  padding: 0 20px !important;
  text-align: left !important;
  border-radius: 16px !important;
  border: 1px solid ${tokens.colorBorder} !important;
  background: white !important;
  transition: all 0.2s !important;
  
  .icon-box {
    padding: 8px;
    border-radius: 8px;
    background: ${tokens.colorSidebar};
    color: ${tokens.colorPrimary};
    transition: all 0.2s;
  }
  
  &:hover {
    border-color: ${tokens.colorPrimary} !important;
    .icon-box {
      background: ${tokens.colorPrimary};
      color: white;
    }
  }
  
  .btn-text {
    .title {
      font-size: 14px;
      font-weight: 700;
      display: block;
      line-height: 1.2;
    }
    .subtitle {
      font-size: 10px;
      color: ${tokens.colorTextSecondary};
      display: block;
    }
  }
`;

const PreviewCard = styled.div`
  background: #0b1c30;
  border-radius: 16px;
  height: 260px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
  
  .bg {
    position: absolute;
    inset: 0;
    opacity: 0.4;
    background-image: url('https://picsum.photos/seed/arch-hero/800/600');
    background-size: cover;
    background-position: center;
    transition: transform 0.6s;
  }
  
  &:hover .bg {
    transform: scale(1.05);
  }
  
  .glass {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0b1c30 0%, transparent 60%);
    z-index: 1;
  }
  
  .content {
    position: relative;
    z-index: 2;
    
    .label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-weight: 800;
      color: #afc6ff;
      margin-bottom: 8px;
    }
    
    h4 {
      font-family: ${tokens.fontFamilyHeadline};
      font-size: 20px;
      font-weight: 700;
      color: white;
      margin: 0 0 16px 0;
    }
    
    button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-weight: 700;
      font-size: 12px;
      padding: 8px 16px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

export const Dashboard: React.FC = () => {
  return (
    <ViewWrapper>
      <PageHeader>
        <h2>Executive Overview</h2>
        <p>Monitor your ecosystem health and content velocity across all enterprise channels.</p>
      </PageHeader>
      
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12} lg={8}>
          <StatCard>
            <div className="icon-wrapper" style={{ background: '#d9e2ff', color: tokens.colorPrimary }}>
              <Globe size={20} />
            </div>
            <div className="label">Total Sites</div>
            <p className="value">142</p>
            <Tag color="success" style={{ position: 'absolute', top: 24, right: 24, borderRadius: 4, fontWeight: 700 }}>
              +4.2%
            </Tag>
          </StatCard>
        </Col>
        
        <Col xs={24} md={12} lg={8}>
          <StatCard>
            <div className="icon-wrapper" style={{ background: '#e5eeff', color: '#425d97' }}>
              <FileText size={20} />
            </div>
            <div className="label">Content Items</div>
            <p className="value">12.8k</p>
            <Tag color="processing" style={{ position: 'absolute', top: 24, right: 24, borderRadius: 4, fontWeight: 700 }}>
              Stable
            </Tag>
          </StatCard>
        </Col>
        
        <Col xs={24} lg={8}>
          <Card style={{ borderRadius: 16, height: '100%', border: `1px solid ${tokens.colorBorder}` }}>
            <div style={{ textTransform: 'uppercase', fontSize: 11, fontWeight: 700, color: tokens.colorTextSecondary, letterSpacing: '0.1em', marginBottom: 16 }}>
              Publication Status
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, height: '100%' }}>
              <div style={{ position: 'relative', width: 80, height: 80 }}>
                {/* Simplified donut chart using CSS */}
                <div style={{ 
                  width: '100%', height: '100%', borderRadius: '50%',
                  background: `conic-gradient(${tokens.colorPrimary} 72%, #eff4ff 0)`
                }} />
                <div style={{ 
                  position: 'absolute', inset: 8, background: 'white', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', 
                  fontSize: 18, fontWeight: 800, textAlign: 'center', lineHeight: '64px'
                }}>
                  72%
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: tokens.colorPrimary }} />
                  Published (9.2k)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: tokens.colorTextSecondary }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#eff4ff' }} />
                  Drafts (3.6k)
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[32, 24]} style={{ marginTop: 32 }}>
        <Col xs={24} xl={16}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0, fontFamily: tokens.fontFamilyHeadline }}>Stream of Operations</h3>
            <Button type="link" style={{ fontWeight: 700 }}>View Ledger</Button>
          </div>
          
          <ActivityItem>
            <Avatar src="https://picsum.photos/seed/user1/100/100" size={40} />
            <div className="content">
              <p>Sarah Chen <span>updated</span> <span className="link">Q4 Marketing Campaign</span></p>
              <div className="meta">In Media Assets • 12 mins ago</div>
            </div>
            <Tag color="cyan" style={{ borderRadius: 100, fontWeight: 700, fontSize: 9 }}>PUBLISHED</Tag>
          </ActivityItem>
          
          <ActivityItem>
            <Avatar src="https://picsum.photos/seed/user2/100/100" size={40} />
            <div className="content">
              <p>Marcus Wright <span>created</span> <span className="link">Internal Developer Docs</span></p>
              <div className="meta">In Documentation • 2 hours ago</div>
            </div>
            <Tag color="default" style={{ borderRadius: 100, fontWeight: 700, fontSize: 9 }}>DRAFT</Tag>
          </ActivityItem>
          
          <ActivityItem>
            <Avatar src="https://picsum.photos/seed/user3/100/100" size={40} />
            <div className="content">
              <p>Elena Rossi <span>uploaded</span> <span className="link">Corporate Rebranding Kit</span></p>
              <div className="meta">In Media Assets • 5 hours ago</div>
            </div>
            <Tag color="orange" style={{ borderRadius: 100, fontWeight: 700, fontSize: 9 }}>PRIORITY</Tag>
          </ActivityItem>
        </Col>
        
        <Col xs={24} xl={8}>
          <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 24, fontFamily: tokens.fontFamilyHeadline }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ActionButton>
              <div className="icon-box"><Edit3 size={18} /></div>
              <div className="btn-text">
                <span className="title">Create Content</span>
                <span className="subtitle">New article or page</span>
              </div>
            </ActionButton>
            
            <ActionButton>
              <div className="icon-box"><Upload size={18} /></div>
              <div className="btn-text">
                <span className="title">Upload Asset</span>
                <span className="subtitle">Bulk upload images/docs</span>
              </div>
            </ActionButton>
            
            <ActionButton>
              <div className="icon-box"><PlusCircle size={18} /></div>
              <div className="btn-text">
                <span className="title">Create Site</span>
                <span className="subtitle">Spin up a new sub-domain</span>
              </div>
            </ActionButton>
          </div>
          
          <div style={{ marginTop: 32 }}>
            <PreviewCard>
              <div className="bg" />
              <div className="glass" />
              <div className="content">
                <div className="label">Live Preview</div>
                <h4>Metropolis 2.0 Redesign</h4>
                <button>
                  Review Live Site
                  <ExternalLink size={14} />
                </button>
              </div>
            </PreviewCard>
          </div>
        </Col>
      </Row>
    </ViewWrapper>
  );
};
