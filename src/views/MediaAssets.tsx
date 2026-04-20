import React, { useState } from 'react';
import { Row, Col, Card, Button, Input, Tag, Layout } from 'antd';
import { 
  Search, 
  Upload, 
  LayoutGrid, 
  List, 
  CheckCircle2, 
  FileIcon, 
  Trash2, 
  Download,
  Info,
  CirclePlay,
  Image as ImageIcon
} from 'lucide-react';
import styled from 'styled-components';
import { tokens } from '../theme/tokens';

const { Sider, Content } = Layout;

const AssetsWrapper = styled(Layout)`
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
  
  .view-controls {
    display: flex;
    gap: 8px;
    background: #eff4ff;
    padding: 4px;
    border-radius: 8px;
    
    button {
      padding: 6px;
      border: none;
      background: transparent;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: ${tokens.colorTextSecondary};
      
      &.active {
        background: white;
        color: ${tokens.colorPrimary};
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      }
    }
  }
`;

const AssetCard = styled.div<{ selected?: boolean }>`
  background: white;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${props => props.selected ? tokens.colorPrimary : tokens.colorBorder};
  box-shadow: ${props => props.selected ? '0 0 0 1px ' + tokens.colorPrimary : 'none'};
  transition: all 0.2s;
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: ${tokens.colorPrimary};
    transform: translateY(-2px);
  }
  
  .preview {
    aspect-ratio: 16/9;
    background: #eff4ff;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .info {
    p {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    span {
      font-size: 11px;
      color: ${tokens.colorTextSecondary};
      font-weight: 500;
    }
  }
  
  .selected-check {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    background: ${tokens.colorPrimary};
    border-radius: 50%;
    display: ${props => props.selected ? 'flex' : 'none'};
  }
`;

const DetailsSider = styled(Sider)`
  background: #eff4ff !important;
  border-left: 1px solid ${tokens.colorBorder};
  padding: 24px;
  overflow-y: auto;
  
  h3 {
    font-family: ${tokens.fontFamilyHeadline};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  
  .detail-image {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 24px;
    border: 1px solid ${tokens.colorBorder};
  }
  
  .field {
    margin-bottom: 16px;
    
    label {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: ${tokens.colorTextSecondary};
      display: block;
      margin-bottom: 4px;
    }
    
    .value {
      font-size: 13px;
      font-weight: 600;
      background: white;
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid ${tokens.colorBorder};
    }
    
    .simple-value {
      font-size: 13px;
      font-weight: 700;
    }
  }
`;

export const MediaAssets: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<number | null>(0);
  
  const assets = [
    { name: 'Facade_Concept_01.jpg', type: 'JPG', size: '4.2 MB', dim: '3840 × 2160', date: 'Oct 24, 2023', img: 'https://picsum.photos/seed/arch1/400/225' },
    { name: 'Interior_Minimal_Oak.png', type: 'PNG', size: '12.8 MB', dim: '1920 × 1080', date: 'Oct 23, 2023', img: 'https://picsum.photos/seed/arch2/400/225' },
    { name: 'Site_Analysis_v4.pdf', type: 'PDF', size: '2.4 MB', dim: '-', date: 'Oct 22, 2023', isPdf: true },
    { name: 'Floorplan_Level_02.webp', type: 'WEBP', size: '1.1 MB', dim: '2400 × 1600', date: 'Oct 21, 2023', img: 'https://picsum.photos/seed/arch3/400/225' },
    { name: 'Shadow_Play_Concrete.jpg', type: 'JPG', size: '3.5 MB', dim: '3000 × 2000', date: 'Oct 20, 2023', img: 'https://picsum.photos/seed/arch4/400/225' },
    { name: 'Drone_Flythrough.mp4', type: 'MP4', size: '48.2 MB', dim: '1920 × 1080', date: 'Oct 19, 2023', isVideo: true },
    { name: 'Spiral_Geometry_Hero.jpg', type: 'JPG', size: '5.9 MB', dim: '4000 × 3000', date: 'Oct 18, 2023', img: 'https://picsum.photos/seed/arch5/400/225' },
    { name: 'Material_Sample_Eco.png', type: 'PNG', size: '8.1 MB', dim: '2048 × 2048', date: 'Oct 17, 2023', img: 'https://picsum.photos/seed/arch6/400/225' },
  ];

  const current = selectedAsset !== null ? assets[selectedAsset] : null;

  return (
    <AssetsWrapper>
      <MainContent>
        <PageHeader>
          <div className="title-area">
            <h2>Media Assets</h2>
            <p>Manage your enterprise-grade visual resources.</p>
          </div>
          
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div className="view-controls">
              <button className="active"><LayoutGrid size={16} /></button>
              <button><List size={16} /></button>
            </div>
            <Button type="primary" icon={<Upload size={16} />} style={{ fontWeight: 600 }}>
              Upload Asset
            </Button>
          </div>
        </PageHeader>
        
        <Row gutter={[24, 24]}>
          {assets.map((asset, index) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={index}>
              <AssetCard 
                selected={selectedAsset === index}
                onClick={() => setSelectedAsset(index)}
              >
                <div className="preview">
                  {asset.isPdf ? <FileIcon size={40} strokeWidth={1} color={tokens.colorPrimary} opacity={0.3} /> : 
                   asset.isVideo ? <CirclePlay size={40} strokeWidth={1} color={tokens.colorPrimary} opacity={0.3} /> :
                   <img src={asset.img} alt="" referrerPolicy="no-referrer" />}
                </div>
                <div className="info">
                  <p>{asset.name}</p>
                  <span>{asset.type} • {asset.size}</span>
                </div>
                <CheckCircle2 className="selected-check" size={16} fill="currentColor" color="white" />
              </AssetCard>
            </Col>
          ))}
        </Row>
      </MainContent>
      
      <DetailsSider width={320}>
        <h3>Asset Details</h3>
        {current ? (
          <>
            <img className="detail-image" src={current.img || 'https://picsum.photos/seed/placeholder/300/300'} alt="" />
            
            <div className="field">
              <label>File Name</label>
              <div className="value">{current.name}</div>
            </div>
            
            <Row gutter={16}>
              <Col span={12}>
                <div className="field">
                  <label>File Size</label>
                  <div className="simple-value">{current.size}</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="field">
                  <label>Dimensions</label>
                  <div className="simple-value">{current.dim}</div>
                </div>
              </Col>
            </Row>
            
            <div className="field">
              <label>Type</label>
              <Tag color="geekblue" style={{ borderRadius: 100, fontWeight: 700, fontSize: 10, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <ImageIcon size={12} />
                {current.type}
              </Tag>
            </div>
            
            <div className="field">
              <label>Last Modified</label>
              <div style={{ fontSize: 13, fontWeight: 500, color: tokens.colorTextSecondary }}>
                {current.date} • 2:14 PM
              </div>
            </div>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 24 }}>
              <Button ghost type="primary" icon={<Download size={16} />} style={{ fontWeight: 700, height: 42 }}>
                Download Asset
              </Button>
              <Button danger type="text" icon={<Trash2 size={16} />} style={{ fontWeight: 700, height: 42 }}>
                Delete Permanently
              </Button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', paddingTop: 64, color: tokens.colorTextSecondary }}>
            <Info size={48} strokeWidth={1} style={{ marginBottom: 16 }} />
            <p>Select an asset to view details</p>
          </div>
        )}
      </DetailsSider>
    </AssetsWrapper>
  );
};
