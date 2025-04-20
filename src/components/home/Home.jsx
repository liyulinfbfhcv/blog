import { useEffect, useMemo, useState } from "react";
import { Space, Typography } from "antd";
import avatar from "../../assets/img/avatar.png";
import email from "../../assets/icon/email-fill.svg";
import ing from "../../assets/icon/ing.svg";
import bad from "../../assets/icon/bad.svg";
import birthday from "../../assets/icon/birthday.svg";
import location from "../../assets/icon/location.svg";
import about from "../../assets/img/person.svg";
import doing from "../../assets/img/doing.svg";
import typing from "../../assets/img/typing.svg";
import index from "../../assets/index.svg";
import { Card, Col, Row, Tag, Progress, Spin } from "antd";
import "./Home.css";
import user from "../../assets/icon/user.svg";
import puzzleding from "../../assets/img/puzzleding.svg";
const { Meta } = Card;
const { Text, Link, Title } = Typography;

function Home() {
  const data = [
    {
      icon: user,
      label: "user",
      content: "liyulinfbfhcv",
    },
    {
      icon: birthday,
      label: "Date of Birth",
      content: " 12/09/2004",
    },
    {
      icon: location,
      label: "location",
      content: "china",
    },
    {
      icon: email,
      label: "email",
      content: "1930207416@qq.com",
    },
  ];
  const cards = [
    [
      {
        id: 1,
        title: "💻 算法打卡",
        icon: typing,
        content: "Python 语言每日刷题ing",
        tag: "Python",
        component: (
          <img
            alt="example"
            src={ing}
            style={{
              height: "30px",
              width: "30px",
              justifyContent: "flex-end",
            }}
          />
        ),
        label: "语言",
      },
      {
        id: 2,
        title: "🌐 网站开发",
        label: "地址",
        icon: doing,
        content: "React + Vite 搭建个人主页网站",
        component: (
          <Progress
            percent={30}
            percentPosition={{ align: "center", type: "inner" }}
            size={[130, 20]}
            strokeColor="#E6F4FF"
          />
        ),
        tag: "https://github.com/liyulinfbfhcv/blog",
      },
    ],

    [
      {
        id: 4,
        title: "📚 六级冲刺",
        tag: "CET-6",
        icon: puzzleding,
        content: "高频词汇背诵:0/2000词",
        component: (
          <Progress
            percent={0}
            percentPosition={{ align: "center", type: "inner" }}
            size={[130, 20]}
            strokeColor="#E6F4FF"
          />
        ),
        link: "/cet6-dashboard",
      },
      {
        id: 3,
        title: "⚡️ 性能优化",
        icon: index,
        component: (
          <img
            alt="example"
            src={bad}
            style={{
              height: "35px",
              width: "35px",
              justifyContent: "flex-end",
            }}
          />
        ),
        content: "页面渲染优化ing  (无从下手)",
      },
    ],
  ];

  // 辅助函数：根据标签返回颜色
  const getTagColor = (tag) => {
    const colors = {
      "Tech Stack": "geekblue",
      Featured: "volcano",
      Learning: "purple",
      Life: "green",
    };
    return colors[tag] || "gray";
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "18rem",
          minHeight: "85vh",
        }}
      >
        <Card
          style={{
            position: "fixed",
            width: "18rem",
            minHeight: "85vh",
          }}
          cover={
            <img
              alt="example"
              src={avatar}
              style={{
                width: "200px",
                marginLeft: "2rem",
                marginTop: "3rem",
                marginBottom: "2rem",
                borderRadius: "50%",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            />
          }
        >
          {data.map((i, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                padding: "0 1.6rem",
                alignItems: "center",
                gap: "2.5rem",

                marginBottom: "1rem",
              }}
            >
              <img className="icon" src={i.icon} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ justifyContent: "flex-start", color: "black" }}>
                  {i.label}
                </span>
                <span>{i.content}</span>
              </div>
            </div>
          ))}
        </Card>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          flex: 1,
        }}
      >
        <Card
          style={{
            height: "330px",
            display: "flex",
            flexDirection: "row-reverse",
          }}
          cover={
            <img
              alt="example"
              src={about}
              style={{
                height: "330px",
                width: "300px",
                justifyContent: "flex-end",
              }}
            />
          }
        >
          <Meta
            title={
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  textAlign: "left",
                }}
              >
                About
              </div>
            }
            description={
              <div
                style={{
                  color: "#666",
                  lineHeight: 1.6,
                  justifyContent: "flex-start",
                  fontSize: "15px",
                  textAlign: "left",
                }}
              >
                <p style={{ marginBottom: "5px" }}>- 🔭 当前：实习ing</p>
                <p style={{ marginBottom: "5px" }}>- 🌱 学习：性能优化实践</p>
                <p style={{ marginBottom: "5px" }}>
                  - 💡 信念："代码应该像散文一样优雅"
                </p>

                <p style={{ marginBottom: "5px" }}>
                  - 🎯 目标：2025年贡献多多项目
                </p>

                <p style={{ marginBottom: "10px" }}>
                  保持开放的学习心态，享受 coding
                  时解决问题的过程。相信持续积累和刻意练习能写出更优雅的代码。
                </p>
              </div>
            }
          />
        </Card>
        <Card
          style={{
            height: "560px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: 1.4,
              textAlign: "left",
              marginBottom: "2rem",
            }}
          >
            Doing
          </div>
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {card.map((i, idx) => {
                return (
                  <Card
                    key={`${index}-${idx}`}
                    style={{
                      height: "200px",
                      width: "400px",
                      marginBottom: "3rem",
                      display: "flex",
                      flexDirection: "row",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}
                    cover={
                      <img
                        alt="example"
                        src={i.icon}
                        style={{
                          height: "200px",
                          width: "200px",
                          justifyContent: "flex-end",
                        }}
                      />
                    }
                  >
                    <Meta
                      title={
                        <div
                          style={{
                            fontSize: "20px",
                            fontWeight: 500,
                            lineHeight: 1.4,
                            textAlign: "left",
                          }}
                        >
                          {i.title}
                        </div>
                      }
                      description={
                        <div
                          style={{
                            color: "#666",
                            lineHeight: 1.6,
                            justifyContent: "flex-start",
                            fontSize: "15px",
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                          }}
                        >
                          <p style={{ marginBottom: "5px" }}>{i.content}</p>
                          <div style={{ marginTop: "0.5rem" }}>
                            {i.component}
                          </div>
                        </div>
                      }
                    />
                  </Card>
                );
              })}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default Home;
