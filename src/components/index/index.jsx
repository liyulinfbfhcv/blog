import index from "../../assets/index.svg";
import douyin from "../../assets/douyin.png";
import { Space, Typography } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { TypeAnimation } from "react-type-animation";

const { Text, Link } = Typography;

/**
 * Index: Landing Page Component
 * 首页组件：应用欢迎页面
 * @module Index
 * @description Displays the welcome page with navigation links
 * @description 展示欢迎页面和导航链接
 * @author YourName <your.email@example.com>
 * @version 1.0.0
 */
function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 150px)", // Full height minus header/footer / 减去页头页尾的视口高度
        flex: 1,
        justifyContent: "center", // Vertical center / 垂直居中
        alignItems: "center", // Horizontal center / 水平居中
        padding: "24px", // Add breathing space / 增加内边距
        textAlign: "center", // Center all text / 文本居中
      }}
    >
      {/* Main logo/illustration */}
      {/* 主logo/插画区域 */}
      <img
        src={index}
        style={{
          height: 350,
          width: 350,
          marginBottom: "24px", // Add spacing below / 下方增加间距
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))", // Add subtle shadow / 添加阴影效果
        }}
        alt="Welcome illustration"
      />
      {/* Welcome text with typography */}
      <TypeAnimation
        sequence={[
          "Welcome to my world", // 要显示的文字
          1000, // 停留时间(毫秒)
        ]}
        speed={20} // 打字速度
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
      {/* Navigation prompt with arrow icon */}
      {/* 导航提示（带箭头图标） */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px", // Limit width / 限制最大宽度
          padding: "12px 24px",
          borderRadius: "8px",
          backgroundColor: "rgba(0,0,0,0.02)", // Very light bg / 浅色背景
          cursor: "pointer",
          transition: "all 0.3s",
          ":hover": {
            backgroundColor: "rgba(0,0,0,0.05)",
          },
        }}
      >
        <Text style={{ marginRight: "8px" }}>Explore My Home</Text>
        <ArrowRightOutlined
          style={{
            color: "#1890ff", // Ant Design primary color / Antd主色
            transition: "transform 0.3s",
          }}
        />
      </div>
    </div>
  );
}

export default Index;
