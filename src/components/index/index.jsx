import { useEffect, useMemo, useState } from "react";
import { Space, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { TypeAnimation } from "react-type-animation";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import index from "../../assets/index.svg";
import * as motion from "motion/react-client";
const { Text, Link } = Typography;

function Index() {
  const [init, setInit] = useState(false);

  // 初始化粒子引擎
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // 改为透明背景
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100, // 减小距离避免干扰内容
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#888888", // 使用更柔和的颜色
        },
        links: {
          color: "#aaaaaa",
          distance: 150,
          enable: true,
          opacity: 0.3, // 降低透明度
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2, // 减慢速度
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60, // 减少粒子数量
        },
        opacity: {
          value: 0.3, // 降低透明度
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 }, // 减小粒子大小
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      style={{
        position: "relative", // 添加相对定位
        height: "calc(100vh - 150px)",
        overflow: "hidden", // 防止内容溢出
      }}
    >
      {/* 粒子背景 */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0, // 确保在内容下方
          }}
        />
      )}

      {/* 主要内容 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          textAlign: "center",
          position: "relative", // 添加相对定位
          zIndex: 1, // 确保在粒子上方
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          {" "}
          <img
            src={index}
            style={{
              height: 350,
              width: 350,
              marginBottom: "24px",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            }}
            alt="Welcome illustration"
          />
        </motion.div>

        <TypeAnimation
          sequence={["Welcome to my world", 1000]}
          speed={20}
          wrapper="span"
          style={{
            fontSize: "24px",
            fontWeight: 500,
            marginBottom: "40px",
            color: "#1d1d1d",
            display: "inline-block",
            borderRight: "3px rgb(14, 15, 15)",
          }}
          repeat={0}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
            padding: "12px 24px",
            borderRadius: "8px",
            backgroundColor: "rgba(255,255,255,0.7)", // 半透明白色背景
            backdropFilter: "blur(5px)", // 毛玻璃效果
            cursor: "pointer",
            transition: "all 0.3s",
            ":hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
        >
          <Link href="/home">
            <Text style={{ marginRight: "8px" }}>Explore My Home</Text>
            <ArrowRightOutlined
              style={{
                color: "#1890ff",
                transition: "transform 0.3s",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;
