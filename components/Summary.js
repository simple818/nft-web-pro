import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Head = styled.div`
  padding: 30px 0;
  position: relative;
`;

const Content = styled.div`
  width: 94%;
  max-width: 800px;
  margin: 0 auto 5% auto;
  p {
    font-size: 20px;
  }
  strong {
    color: red;
  }
`;

function Summary() {
  const [open, setOpen] = useState(false);

  return (
    <Container
      style={{
        background: "#fff",
        padding: "60px 0",
      }}
      id="summary"
    >
      <Typography style={{ textAlign: "center" }}>

      </Typography>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <Head>
          <Typography
            variant="h3"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            好吧，说点认真的
          </Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            style={{
              position: "fixed",
              top: "30px",
              right: "30px",
            }}
          >
            <CloseIcon style={{ fontSize: 40 }} />
          </IconButton>
        </Head>
        <Content>
          <Typography style={{ marginBottom: 20 }}>

          </Typography>





          <Typography style={{ marginBottom: 20 }}>
            如果您实在是找不到靠谱技术外包，可以官方推特{" "}
            <a
              href="https://twitter.com/gclxnft"
              target="_blank"
              rel="noreferrer"
            >
              @gclxnft
            </a>{" "}
          </Typography>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
          </Typography>








          <div style={{ textAlign: "center", marginTop: 40, fontSize: 24 }}>
            （完）
          </div>
          <div
            style={{
              marginTop: 20,
              marginBottom: 40,
              fontSize: 16,
              color: "#999",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            话说老板来都来了，真不 Mint 一个再走？{" "}
            <img src="/icons/yaofan.jpg" style={{ width: 40 }} alt="" />
          </div>
        </Content>
      </Dialog>
    </Container>
  );
}

export default Summary;
