import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Content } from "rsuite";
import SidebarMain from "../../Components/Common/Sidebar/SidebarMain";
import HeaderMain from "../../Components/Common/Header/HeaderMain";

const Layout = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <SidebarMain expand={expand} setExpand={setExpand} />
        <Container className="gw-pageright-side">
          <Header className="gw-header">
            <HeaderMain />
          </Header>
          <Content>
            <Outlet />
          </Content>
        </Container>
      </Container>
    </div>
  );
};

export default Layout;
