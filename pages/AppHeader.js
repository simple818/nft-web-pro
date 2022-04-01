import styled from "styled-components";
import ConnectWallet from "../components/ConnectWallet";
import { padWidth } from "./../utils";
import Link from 'next/link'

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MenuItemText = styled.span`
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

function MenuItem(props) {
  const elementId = props.elementId;
  return (
    <Link href= { props.href }> 
    <MenuItemText
      style={{ padding: "10px 20px" }}
    >
      {props.children}
    </MenuItemText>
    </Link>
  );
}

function AppHeader() {
  return (
    <Head>
        {/*<h1>国产良心 NFT</h1>*/}
        <MenuWrapper>
          <MenuItem elementId="intro" href="Intro">介绍</MenuItem>
          <MenuItem elementId="roadmap" href="Roadmap">快乐源泉</MenuItem>
          <MenuItem elementId="faq" href="FAQ">媒体</MenuItem>
          <MenuItem elementId="team" href="Team">Mint</MenuItem>
        </MenuWrapper>
    </Head>
  );
}

export default AppHeader;
