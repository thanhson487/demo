import React from 'react';
import { Layout, Button, Input, Tag, Avatar, Space } from 'antd';
import { 
  ArrowLeft, 
  History, 
  Search, 
  Bold, 
  Italic, 
  List, 
  Image as ImageIcon, 
  Link, 
  Maximize2, 
  Save, 
  Archive, 
  Send,
  CloudCheck,
  GitBranch,
  Settings2,
  ExternalLink
} from 'lucide-react';
import styled from 'styled-components';
import { tokens } from '../theme/tokens';

const { Sider, Content } = Layout;

const EditorWrapper = styled(Layout)`
  background: transparent;
  height: calc(100vh - 64px);
`;

const MainContent = styled(Content)`
  padding: 32px;
  overflow-y: auto;
`;

const EditorHeader = styled.div`
  margin-bottom: 40px;
  
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
    font-weight: 500;
  }
`;

const ContentCanvas = styled.div`
  max-width: 900px;
  
  .title-field {
    font-family: ${tokens.fontFamilyHeadline};
    font-size: 28px;
    font-weight: 700;
    border: none;
    background: transparent;
    width: 100%;
    margin-bottom: 8px;
    padding: 0;
    
    &:focus {
      outline: none;
    }
  }
  
  .slug-field {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: ${tokens.colorTextSecondary};
    margin-bottom: 32px;
    
    span { color: #c1c6d7; }
    input {
      color: ${tokens.colorPrimary};
      font-weight: 600;
      border: none;
      background: #eff4ff;
      padding: 2px 8px;
      border-radius: 4px;
    }
  }
`;

const RichTextEditor = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
  border-top: 4px solid ${tokens.colorPrimary};
  overflow: hidden;
  
  .toolbar {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background: #f8f9ff;
    border-bottom: 1px solid ${tokens.colorBorder};
    gap: 8px;
    
    .divider {
      width: 1px;
      height: 16px;
      background: ${tokens.colorBorder};
      margin: 0 4px;
    }
  }
  
  .canvas {
    padding: 32px;
    min-height: 500px;
    font-size: 15px;
    line-height: 1.6;
    color: ${tokens.colorTextBase};
    
    p { margin-bottom: 16px; }
  }
`;

const DetailsSider = styled(Sider)`
  background: #f8f9ff !important;
  padding: 32px;
  overflow-y: auto;
  border-left: 1px solid ${tokens.colorBorder};
`;

const SidePanel = styled.div`
  background: #eff4ff;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  
  h4 {
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }
`;

const WorkflowStep = styled.div<{ active?: boolean; complete?: boolean }>`
  position: relative;
  display: flex;
  gap: 12px;
  padding-bottom: 24px;
  
  &::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 24px;
    bottom: 0;
    width: 2px;
    background: ${tokens.colorBorder};
    display: ${props => props.complete ? 'block' : 'none'};
  }
  
  .circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${props => props.complete ? tokens.colorPrimary : props.active ? tokens.colorSidebar : '#e5e5e5'};
    border: 2px solid ${props => props.active ? tokens.colorPrimary : 'transparent'};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${props => props.active ? tokens.colorPrimary : tokens.colorBorder};
      display: ${props => props.complete ? 'none' : 'block'};
    }
  }
  
  .info {
    p { font-size: 13px; font-weight: 700; margin: 0; color: ${props => props.active ? tokens.colorPrimary : tokens.colorTextBase}; }
    span { font-size: 10px; color: ${tokens.colorTextSecondary}; }
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #0b1c30;
  color: white;
  padding: 12px 24px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 1000;
  
  span { font-size: 13px; font-weight: 500; }
  .undo {
    font-size: 11px;
    font-weight: 800;
    color: #afc6ff;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const PostEditor: React.FC = () => {
  return (
    <EditorWrapper>
      <MainContent>
        <EditorHeader>
          <h2>Post Editor</h2>
          <p>Crafting: "The Future of Sustainable Architecture 2024"</p>
        </EditorHeader>
        
        <ContentCanvas>
          <input className="title-field" value="The Future of Sustainable Architecture 2024" readOnly />
          <div className="slug-field">
            <Link size={14} />
            <span>domain.com/blog/</span>
            <input value="future-sustainable-architecture-2024" readOnly />
          </div>
          
          <div style={{ background: 'white', borderRadius: 16, padding: 24, marginBottom: 24, border: `1px solid ${tokens.colorBorder}` }}>
            <label style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              Executive Summary
            </label>
            <p style={{ margin: 0, fontSize: 13, color: tokens.colorTextSecondary }}>
              Exploring the intersection of brutalist aesthetics and net-zero energy requirements in modern urban development.
            </p>
          </div>
          
          <RichTextEditor>
            <div className="toolbar">
              <Button type="text" size="small" icon={<Bold size={16} />} />
              <Button type="text" size="small" icon={<Italic size={16} />} />
              <Button type="text" size="small" icon={<List size={16} />} />
              <div className="divider" />
              <Button type="text" size="small" icon={<ImageIcon size={16} />} />
              <Button type="text" size="small" icon={<Link size={16} />} />
              <Button type="text" size="small" icon={<Maximize2 size={16} />} className="ml-auto" />
            </div>
            
            <div className="canvas">
              <p>As the global climate crisis intensifies, the role of architects has shifted from pure aesthetics to structural survivalism. This article examines the emergent trends in bio-mimicry...</p>
              <div style={{ margin: '32px 0', border: `1px solid ${tokens.colorBorder}`, borderRadius: 12, overflow: 'hidden' }}>
                <img src="https://picsum.photos/seed/editor-main/800/400" style={{ width: '100%', height: 260, objectFit: 'cover' }} alt="" />
              </div>
              <p>Recent data indicates that passive cooling systems can reduce energy expenditure by up to 40% in equatorial climates. By integrating vertical gardens not just as decorative elements, but as essential thermal mass...</p>
            </div>
          </RichTextEditor>
        </ContentCanvas>
      </MainContent>
      
      <DetailsSider width={380}>
        <SidePanel>
          <h4><GitBranch size={16} color={tokens.colorPrimary} /> Workflow Status</h4>
          <WorkflowStep complete>
            <div className="circle" />
            <div className="info">
              <p>Draft</p>
              <span>Completed on Oct 11, 10:45 AM</span>
            </div>
          </WorkflowStep>
          <WorkflowStep active>
            <div className="circle"><div className="dot" /></div>
            <div className="info">
              <p>In Review</p>
              <span>Assigned to Sarah Chen</span>
            </div>
          </WorkflowStep>
          <WorkflowStep>
            <div className="circle"><div className="dot" /></div>
            <div className="info">
              <p>Published</p>
              <span>Estimated: Oct 15</span>
            </div>
          </WorkflowStep>
          
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Button block type="primary" style={{ fontWeight: 700, height: 42 }}>Submit for Review</Button>
            <Space style={{ width: '100%' }}>
              <Button style={{ flex: 1, fontWeight: 700 }}>Save Draft</Button>
              <Button style={{ flex: 1, fontWeight: 700, borderColor: tokens.colorError, color: tokens.colorError }}>Archive</Button>
            </Space>
          </div>
        </SidePanel>
        
        <div style={{ background: 'white', padding: 24, borderRadius: 16, border: `1px solid ${tokens.colorBorder}`, marginBottom: 24 }}>
          <h4 style={{ fontSize: 13, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Search size={16} color="#425d97" /> SEO Metadata
          </h4>
          <label style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', color: tokens.colorTextSecondary }}>Focus Keyword</label>
          <Input defaultValue="Sustainable Architecture" style={{ margin: '4px 0 16px 0', background: tokens.colorBgLayout, border: 'none' }} />
          
          <div style={{ padding: 12, background: tokens.colorBgLayout, borderRadius: 8, border: `1px solid ${tokens.colorBorder}` }}>
            <p style={{ margin: 0, fontSize: 9, fontWeight: 800, color: tokens.colorPrimary }}>Google Preview</p>
            <p style={{ margin: '4px 0 2px 0', fontSize: 11, fontWeight: 700, color: '#1a0dab' }}>The Future of Sustainable Architecture 2024</p>
            <p style={{ margin: 0, fontSize: 9, color: '#006621' }}>domain.com › blog › future-sustainable-...</p>
            <p style={{ margin: '4px 0 0 0', fontSize: 10, color: tokens.colorTextSecondary }}>Exploring the intersection of brutalist aesthetics and net-zero energy...</p>
          </div>
        </div>
        
        <div style={{ background: 'white', padding: 24, borderRadius: 16, border: `1px solid ${tokens.colorBorder}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            <h4 style={{ fontSize: 13, fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
              <History size={16} color={tokens.colorTextSecondary} /> Version History
            </h4>
            <Button type="link" size="small" style={{ fontSize: 10, fontWeight: 700 }}>View All</Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 4, background: '#f8f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: tokens.colorTextSecondary }}>V.3</div>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: 11, fontWeight: 700 }}>Edited by Sarah Chen</p>
              <p style={{ margin: 0, fontSize: 9, color: tokens.colorTextSecondary }}>2 mins ago • Major Revision</p>
            </div>
          </div>
        </div>
      </DetailsSider>
      
      <Toast>
        <CloudCheck size={18} color="#afc6ff" />
        <span>Draft autosaved at 12:45:02 PM</span>
        <div className="undo">Undo</div>
      </Toast>
    </EditorWrapper>
  );
};
