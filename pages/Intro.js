import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import img from '../public/images/154.jpg'
import Container from "../components/Container";
import AppHeader from "./AppHeader";

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 60px;
`;
const ContentImage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

function Intro() {
    console.log(img)
    return (
        <Container

            id="intro"
        >
            {/* <AppHeader /> */}
            {/* <Content> */}
            {/* <ContentImage> */}
            {/*<img style={{ width: 200 }} src="/images/demo.gif" />*/}
            {/* </ContentImage> */}
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "15px"}}>
                <div style={{display: 'flex', justifyContent: 'flex-start',}}>
                    <img src={img.src}
                         style={{width: 50, height: 50, marginRight: '10px', borderRadius: "50% 50%"}}></img>
                    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: "column"}}>
                        <span style={{fontSize: '18px', fontWeight: "bold"}}>sartoshi</span>
                        <span style={{color: "rgb(92 92 81 / 66%)"}}>sartoshi.eth</span>
                    </div>
                </div>
                <AppHeader/>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexWrap: 'wrap',
                    maxWidth: '900px',
                    minWidthL: "880px",
                    height: '50vh',
                    minHeight: "450px",
                    marginTop: "120px",
                    marginLeft: "30%"
                }}>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
                <img src={img.src} style={{width: 200, height: 200, marginRight: '20px'}}></img>
            </div>

            <div style={{
                maxWidth: '900px', minWidthL: "880px", height: '50vh', minHeight: "2050px", marginLeft: "30%"
            }}>

                <p style={{textAlign: "left", fontSize: "40px", fontWeight: "bold", lineHeight: "40px"}}>What are
                    Happy puppy ?</p>
                <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: "250px"}}>
                    <span style={{
                        color: "rgb(92 92 81 / 66%)",
                        backgroundColor: "rgb(167 167 158 / 35%)",
                        padding: "2px 5px"
                    }}> 0xeD98</span>
                    <span style={{
                        color: "rgb(92 92 81 / 66%)",
                        backgroundColor: "rgb(167 167 158 / 35%)",
                        padding: "2px 5px"
                    }}> February 13th, 2022</span>
                </div>

                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    A young man named Tofu left his hometown alone to work in a big city.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    His cyberslacking was caught by the boss one day. He not only lost his job, but also was blacklisted
                    in the world of work. He lost his hard-earned job and his girlfriend broke up with him after hearing
                    the news.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    On the subway, some people around him were visiting bbs, some were laughing while watching
                    the video, and others were eating by themselves.
                    People have their own joys and sorrows. Who knows
                    and cares about tofu’s sadness? There are many job hunters in this city every day. Many of them
                    lined up to look for a job yesterday, as they did the day before yesterday. It is just that there is
                    one more job hunter Tofu today.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    As tofu was blacklisted in the world of work, he was rejected by all
                    companies. Helpless, he chose to deliver the takeout. But everything was still so bad. He was
                    ridiculed by the second-generation rich driving a sports car with exhaust gas.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    He fell while
                    delivering the meal and got a negative feedback for being late. He worked as a builder later, but he
                    hurt his leg because of carelessness.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    As soon as he got home hopelessly, the landlord knocked on the
                    door again to urge him to pay the rent.
                    All the bad luck pressed on Tofu like a huge wave, making
                    him suffocate.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    Finally, he pointed a pistol at himself.
                </p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    Just then his father called him. After
                    learning about the situation, his father said to him, “I know it’s hard for you now, but don’t do
                    anything stupid. There are many people who love you in the world. This world has been full of
                    suffering. I didn’t tell you before because I just wanted to make you happy. Although the world is
                    not perfect, it is still wonderful. If you feel tired, come home.”</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    Tofu couldn’t help crying. He
                    remembered the freshness he felt when he first came to the city, the happy time with his parents,
                    his childhood, the funny things he did at school with his companions, as well as his family and
                    friends. He is young and he can not die like this. There is still a lot of happiness he has not
                    experienced. He wants to live. He wants to live happily.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>
                    The story ends. Although some plots are
                    slightly abrupt, it is undeniable that this is an epitome of contemporary migrant workers. In this
                    world full of difficulties, who is easy?</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>I didn’t know how to
                    cherish happiness when I was a child, but now it is
                    difficult to find it out.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}>Each of us is not
                    perfect, but at least we are unique. Each of us is
                    different from others. You will find the place that belongs to you one day unless you give up.</p>
                <p style={{textAlign: "left", color: "#696969", lineHeight: 2.5, fontSize: 18}}> I
                    hope you can enjoy the sunshine, dessert and scenery today. Good luck to you!</p>

            </div>
            {/* <Typography
          style={{
            position:"fixed",
            bottom:"0",
            left:"0"
          }}
        >
          我们不与国际接轨
        </Typography> */}
            {/* </Content> */}
        </Container>
    );
}

export default Intro;
