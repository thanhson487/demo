import React from 'react';
import { Table, Button, Tag, Avatar, Layout, Select, Pagination } from 'antd';
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  FileText, 
  Plus, 
  TrendingUp, 
  Clock, 
  HardDrive,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import styled from 'styled-components';
import { tokens } from '../theme/tokens';

const { Content } = Layout;

const ViewWrapper = styled.div`
  padding: 32px;
  background: ${tokens.colorBgLayout};
`;

const PageHeader = styled.div`
  margin-bottom: 32px;
  
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
`;

const FilterBar = styled.div`
  background: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid ${tokens.colorBorder};
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  
  .filter-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 160px;
    
    label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${tokens.colorTextSecondary};
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

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 32px;
`;

const MiniStat = styled.div<{ variant?: 'primary' | 'secondary' | 'accent' }>`
  background: ${props => props.variant === 'primary' ? tokens.colorPrimary : props.variant === 'accent' ? '#d9e2ff' : '#dce9ff'};
  color: ${props => props.variant === 'primary' ? 'white' : tokens.colorTextBase};
  padding: 24px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  
  label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.7;
    margin-bottom: 12px;
    display: block;
  }
  
  .val {
    font-size: 32px;
    font-weight: 800;
    font-family: ${tokens.fontFamilyHeadline};
  }
  
  p {
    font-size: 11px;
    margin: 4px 0 0 0;
    opacity: 0.8;
  }
  
  .bg-icon {
    position: absolute;
    right: -10px;
    bottom: -10px;
    opacity: 0.1;
    transform: rotate(-15deg);
  }
`;

export const ContentLibrary: React.FC = () => {
  const data = [
    { key: '1', title: 'The Future of Minimalist Architecture', slug: '/blog/minimalist-architecture-2024', type: 'ARTICLE', status: 'PUBLISHED', site: 'Main Portfolio', updated: 'Oct 12, 2023 · 14:22' },
    { key: '2', title: 'Global Sustainability Report', slug: '/impact/sustainability-2023', type: 'PAGE', status: 'DRAFT', site: 'Marketing Hub', updated: '2 mins ago' },
    { key: '3', title: 'Hero Carousel Component', slug: '@shared/hero-carousel-v2', type: 'COMPONENT', status: 'REVIEWING', site: 'All Sites', updated: 'Oct 11, 2023 · 09:10' },
    { key: '4', title: 'Privacy Policy Update v4.1', slug: '/legal/privacy', type: 'PAGE', status: 'PUBLISHED', site: 'Main Portfolio', updated: 'Oct 10, 2023 · 18:45' },
    { key: '5', title: 'Team Onboarding Guide', slug: '/internal/onboarding', type: 'ARTICLE', status: 'DRAFT', site: 'Partner Portal', updated: 'Oct 09, 2023 · 11:30' },
  ];

  const columns = [
    {
      title: 'TITLE',
      dataIndex: 'title',
      render: (text: string, record: any) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: tokens.colorTextBase }}>{text}</span>
          <span style={{ fontSize: 11, color: tokens.colorTextSecondary, opacity: 0.6 }}>{record.slug}</span>
        </div>
      ),
    },
    {
      title: 'TYPE',
      dataIndex: 'type',
      render: (type: string) => (
        <Tag color="blue" style={{ borderRadius: 100, fontWeight: 800, fontSize: 9 }}>
          {type}
        </Tag>
      ),
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      render: (status: string) => (
        <Tag color={status === 'PUBLISHED' ? 'success' : status === 'REVIEWING' ? 'warning' : 'default'} style={{ borderRadius: 100, fontWeight: 800, fontSize: 9 }}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'SITE',
      dataIndex: 'site',
      render: (text: string) => <span style={{ fontSize: 13, fontWeight: 500, color: tokens.colorTextSecondary }}>{text}</span>,
    },
    {
      title: 'LAST UPDATED',
      dataIndex: 'updated',
      render: (text: string) => <span style={{ fontSize: 12, color: tokens.colorTextSecondary }}>{text}</span>,
    },
    {
      title: 'ACTIONS',
      align: 'right' as const,
      render: () => <Button type="text" icon={<MoreHorizontal size={18} />} />,
    },
  ];

  return (
    <ViewWrapper>
      <PageHeader>
        <h2>Content Repository</h2>
        <p>Manage and curate cross-platform content assets.</p>
      </PageHeader>
      
      <FilterBar>
        <div className="filter-group">
          <label>Site</label>
          <Select defaultValue="all" bordered={false} className="bg-blue-50/50 rounded-lg">
            <Select.Option value="all">All Sites</Select.Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Type</label>
          <Select defaultValue="all" bordered={false} className="bg-blue-50/50 rounded-lg">
            <Select.Option value="all">All Types</Select.Option>
          </Select>
        </div>
        <div className="filter-group">
          <label>Status</label>
          <Select defaultValue="all" bordered={false} className="bg-blue-50/50 rounded-lg">
            <Select.Option value="all">All Statuses</Select.Option>
          </Select>
        </div>
        
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
          <Button type="text" icon={<Filter size={16} />} style={{ fontWeight: 600, color: tokens.colorPrimary }}>Reset Filters</Button>
          <Button type="primary" style={{ background: tokens.colorTextBase, fontWeight: 700, padding: '0 24px' }}>Apply View</Button>
        </div>
      </FilterBar>
      
      <TableCard>
        <Table 
          dataSource={data} 
          columns={columns} 
          pagination={false}
          rowClassName="hover:bg-blue-50/20"
        />
        <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafbfc', borderTop: `1px solid ${tokens.colorBorder}` }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: tokens.colorTextSecondary }}>Showing 1 to 5 of 124 results</span>
          <div style={{ display: 'flex', gap: 4 }}>
            <Button size="small" type="text" icon={<ChevronLeft size={16} />} disabled />
            <Button size="small" type="primary" style={{ minWidth: 28, height: 28, fontWeight: 800 }}>1</Button>
            <Button size="small" type="text" style={{ minWidth: 28, height: 28, fontWeight: 700 }}>2</Button>
            <Button size="small" type="text" style={{ minWidth: 28, height: 28, fontWeight: 700 }}>3</Button>
            <span style={{ color: '#c1c6d7', padding: '0 4px' }}>...</span>
            <Button size="small" type="text" style={{ minWidth: 28, height: 28, fontWeight: 700 }}>25</Button>
            <Button size="small" type="text" icon={<ChevronRight size={16} />} />
          </div>
        </div>
      </TableCard>
      
      <StatsRow>
        <MiniStat variant="primary">
          <label>Content Velocity</label>
          <div className="val">12.4%</div>
          <p>Increase in published assets this month</p>
          <TrendingUp size={80} className="bg-icon" />
        </MiniStat>
        
        <MiniStat variant="accent">
          <label>Pending Reviews</label>
          <div className="val">18</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
            <div style={{ display: 'flex' }}>
              {[1, 2].map(i => (
                <Avatar size="small" src={`https://picsum.photos/seed/editor${i}/100/100`} style={{ marginLeft: -8, border: '2px solid white' }} key={i} />
              ))}
              <Avatar size="small" style={{ marginLeft: -8, border: '2px solid white', background: tokens.colorTextBase, color: 'white', fontSize: 8, fontWeight: 800 }}>+5</Avatar>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: tokens.colorPrimary }}>Assigned to Editors</span>
          </div>
          <Clock size={80} className="bg-icon" />
        </MiniStat>
        
        <MiniStat variant="secondary">
          <label>Storage Usage</label>
          <div className="val">74%</div>
          <div style={{ height: 6, background: 'rgba(0, 87, 194, 0.1)', borderRadius: 100, marginTop: 16, overflow: 'hidden' }}>
            <div style={{ width: '74%', height: '100%', background: tokens.colorPrimary }} />
          </div>
          <HardDrive size={80} className="bg-icon" />
        </MiniStat>
      </StatsRow>
    </ViewWrapper>
  );
};
