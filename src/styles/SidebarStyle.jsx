import styled from "styled-components";

const SidebarStyle = styled.div`
  width: 20%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default SidebarStyle;

const SidebarTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
