import React, { useState } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { ThemeProvider } from 'styled-components';
import { themeConfig, tokens } from './theme/tokens';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './views/Dashboard';
import { MediaAssets } from './views/MediaAssets';
import { UserRoles } from './views/UserRoles';
import { ContentLibrary } from './views/ContentLibrary';
import { PostEditor } from './views/PostEditor';
import { SiteManagement } from './views/SiteManagement';
import styled from 'styled-components';

const { Content } = Layout;

const MainLayout = styled(Layout)`
  min-height: 100vh;
  background: ${tokens.colorBgBase};
`;

const ContentWrapper = styled(Content)`
  margin-left: 256px;
  min-height: calc(100vh - 64px);
`;

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'media':
        return <MediaAssets />;
      case 'roles':
        return <UserRoles />;
      case 'content':
        return <ContentLibrary />;
      case 'workflows':
        return <SiteManagement />; // Remapping workflows to site management for visual demo
      default:
        return <Dashboard />;
    }
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <ThemeProvider theme={tokens}>
        <MainLayout>
          <Sidebar currentView={currentView} onViewChange={setCurrentView} />
          <Layout>
            <Header />
            <ContentWrapper>
              {renderView()}
            </ContentWrapper>
          </Layout>
        </MainLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
}
