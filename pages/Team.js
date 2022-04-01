import { useState, useEffect } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import Typography from "@mui/material/Typography";

import { get, subscribe } from "../store";
import Container from "../components/Container";
import ConnectWallet, { connectWallet } from "../components/ConnectWallet";
import showMessage from "../components/showMessage";

// import styled from "styled-components";
// import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

// import Container from "../components/Container";
import AppHeader from "./AppHeader";
import img from "../public/images/154.jpg";


const ContentImage = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;



const ETHERSCAN_DOMAIN =
  process.env.NEXT_PUBLIC_CHAIN_ID === "1"
    ? "etherscan.io"
    : "rinkeby.etherscan.io";

const Content = styled.div`
  max-width: 840px;
  margin: 0 auto 5% auto;
  strong {
    color: red;
  }
`;

const StyledMintButton = styled.div`
  display: inline-block;
  width: 140px;
  text-align: center;
  padding: 10px 10px;
  border: 4px solid #000;
  border-radius: 20px;
  color: #000;
  background: #dde4b6;
  cursor: ${(props) => {
  return props.minting || props.disabled ? "not-allowed" : "pointer";
}};
  opacity: ${(props) => {
  return props.minting || props.disabled ? 0.6 : 1;
}};
`;

function MintButton(props) {
  const [minting, setMinting] = useState(false);

  return (
    <StyledMintButton
      disabled={!!props.disabled}
      minting={minting}
      onClick={async () => {
        if (minting || props.disabled) {
          return;
        }
        setMinting(true);
        try {
          const { signer, contract } = await connectWallet();
          const contractWithSigner = contract.connect(signer);
          const value = ethers.utils.parseEther(
            props.mintAmount === 1 ? "0.035" : "0.07"
          );
          const tx = await contractWithSigner.mint(props.mintAmount, {
            value,
          });
          const response = await tx.wait();
          showMessage({
            type: "success",
            title: "Mint success !",
            body: (
              <div>

              </div>
            ),
          });
        } catch (err) {
          showMessage({
            type: "error",
            title: "Mint error !",
            body: err.message,
          });
        }
        props.onMinted && props.onMinted();
        setMinting(false);
      }}
      style={{
        background: "#dde4b6",
        ...props.style,
      }}
    >
      Minting {props.mintAmount} piece{minting ? "..." : ""}
    </StyledMintButton>
  );
}

function MintSection() {
  const [status, setStatus] = useState("0");
  const [progress, setProgress] = useState(null);
  const [fullAddress, setFullAddress] = useState(null);
  const [numberMinted, setNumberMinted] = useState(0);

  async function updateStatus() {
    const { contract } = await connectWallet();
    const status = await contract.status();
    const progress = parseInt(await contract.totalSupply());
    setStatus(status.toString());
    setProgress(progress);
    // 在 mint 事件的时候更新数据
    contract.on("Minted", async (event) => {
      const status = await contract.status();
      const progress = parseInt(await contract.totalSupply());
      setStatus(status.toString());
      setProgress(progress);
    });
  }

  useEffect(() => {
    (async () => {
      const fullAddressInStore = get("fullAddress") || null;
      if (fullAddressInStore) {
        const { contract } = await connectWallet();
        const numberMinted = await contract.numberMinted(fullAddressInStore);
        setNumberMinted(parseInt(numberMinted));
        setFullAddress(fullAddressInStore);
      }
      subscribe("fullAddress", async () => {
        const fullAddressInStore = get("fullAddress") || null;
        setFullAddress(fullAddressInStore);
        if (fullAddressInStore) {
          const { contract } = await connectWallet();
          const numberMinted = await contract.numberMinted(fullAddressInStore);
          setNumberMinted(parseInt(numberMinted));
          updateStatus();
        }
      });
    })();
  }, []);

  useEffect(() => {
    try {
      const fullAddressInStore = get("fullAddress") || null;
      if (fullAddressInStore) {
        updateStatus();
      }
    } catch (err) {
      showMessage({
        type: "error",
        title: "Failed to get contract status.",
        body: err.message,
      });
    }
  }, []);

  async function refreshStatus() {
    const { contract } = await connectWallet();
    const numberMinted = await contract.numberMinted(fullAddress);
    setNumberMinted(parseInt(numberMinted));
  }

  let mintButton = (
    <StyledMintButton
      style={{
        background: "#eee",
        color: "#999",
        cursor: "not-allowed",
      }}
    >
      尚未开始
    </StyledMintButton>
  );

  if (status === "1") {
    mintButton = (
      <div
        style={{
          display: "flex",
        }}
      >
        <MintButton
          onMinted={refreshStatus}
          mintAmount={1}
          style={{ marginRight: "20px" }}
        />
        <MintButton
          onMinted={refreshStatus}
          mintAmount={2}
          disabled={numberMinted === 1}
        />
      </div>
    );
  }

  if (progress >= 1000 || status === "2") {
    mintButton = (
      <StyledMintButton
        style={{
          background: "#eee",
          color: "#999",
          cursor: "not-allowed",
        }}
      >
        Sould  out! Thanks !
      </StyledMintButton>
    );
  }

  if (numberMinted === 2) {
    mintButton = (
      <StyledMintButton
        style={{
          background: "#eee",
          color: "#999",
          cursor: "not-allowed",
        }}
      >
          The casting mint has been reached
      </StyledMintButton>
    );
  }

  if (!fullAddress) {
    mintButton = (
      <StyledMintButton
        style={{
          background: "#eee",
          color: "#999",
          cursor: "not-allowed",
        }}
      >
        Please connect wallet!
      </StyledMintButton>
    );
  }

  mintButton = (
    <StyledMintButton
      style={{
        background: "#eee",
        color: "#999",
        cursor: "not-allowed",
      }}
    >
        Sold out!
    </StyledMintButton>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: 20, display: "flex", alignItems: "center" }}>
        Your wallet： <ConnectWallet />{" "}
        {fullAddress && (
          <span style={{ marginLeft: 10 }}>
            can  Mint {10 - numberMinted} 个。
          </span>
        )}
      </div>
      {mintButton}
      <div style={{ marginTop: 10 }}>
          Please go{" "}
        <a
          href="https://opensea.io/collection/gclx"
          target="_blank"
          rel="noreferrer"
        >
          OpenSea
        </a>{" "}
          Check
      </div>
      <div style={{ marginTop: 20, fontSize: 20, textAlign: "center" }}>
        Process：{progress === null ? "please connect wallet" : progress} / 7000，Price
        0.035 ETH per，Up to ten per wallet
        <br />

      </div>
    </div>
  );
}

function Mint() {
  return (
    <Container
      style={{
        background: "#FFFFFF",
        color: "black",
      }}
      id="mint"
    >
        <div style={{display: "flex", justifyContent: "space-between", marginLeft: "1315px"}}>

            <AppHeader/>
        </div>


      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
        component="div"
      >
        Mint
      </Typography>

        <div style={{
            maxWidth: '900px', minWidthL: "880px", height: '50vh', minHeight: "700px", marginLeft: "25%"
        }}>

            <p style={{textAlign: "left", color: "#000000", lineHeight: 2.5, fontSize: 18}}> I like Steve Jobs and
                his innovative spirit very much. For Apple, innovation is not only the soul, but also its enterprise
                spirit.</p>
            <p style={{textAlign: "left", color: "#000000", lineHeight: 2.5, fontSize: 18}}> A few days after
                Christmas in 2021, I participated in an AMA for a project, and the host said,“Everything can be NFT.
                I don’t know what will become NFT in the future”. </p>
            <p style={{textAlign: "left", color: "#000000", lineHeight: 2.5, fontSize: 18}}> The speaker was
                unintentional but the listener thought more. I thought, “NFT can be pictures, music, animation or
                even video now. Is it possible that NFT will be a small game in the future?” The idea excited me
                very much. I thought I could boldly imagine, “in the future, an NFT may be a 3A game, a Hollywood
                movie, or an elaborate concert scene, a completely bionic AI partner.</p>
            <p style={{textAlign: "left", color: "#000000", lineHeight: 2.5, fontSize: 18}}> That is right.
                Everything can be NFT”. </p>
            <p style={{textAlign: "left", color: "#000000", lineHeight: 2.5, fontSize: 18}}> I began to devote
                myself to the study of NFT creation.</p>
            <p style={{textAlign: "left", color: "#000000", lineHeight: 2.5, fontSize: 18}}> Among them, drawing
                took me a long time (although I was good at drawing when I was a child). Finally, I combined NFT
                pictures with jigsaw puzzles. </p>
            <p style={{textAlign: "left", color: "#000000", lineHeight: 2.5, fontSize: 18}}> Right, it is the jigsaw
                puzzles I played when I was a child. Each NFT is not only a work of art, but also a jigsaw puzzle.
                Although each game is very simple, it will make you feel the happiness of childhood.</p>
        </div>

      <Content>
        <div
          style={{
            marginTop: 60,
            border: "4px dashed #000",
            padding: "40px",
            borderRadius: 20,
          }}
        >
          <MintSection />
        </div>

      </Content>
    </Container>
  );
}

export default Mint;
