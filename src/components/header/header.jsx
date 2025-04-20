import avatar from "../../assets/avatar.png";
import github from "../../assets/github-mark.png";
import { Space, Typography } from "antd";
const { Text, Link } = Typography;

/**
 * Main header component with improved styling
 * 优化样式后的头部组件
 * @function Header
 * @returns {JSX.Element} The header layout structure
 * @returns {JSX.Element} 头部布局结构
 */
function Header() {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        justifyContent: "space-between",
        alignItems: "center",
        height: "4rem",
        width: "100%",
        zIndex: "100",
        backgroundColor: "#fff", // Add background color
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
      }}
    >
      {/* Logo with proper spacing */}
      <img
        src={avatar}
        style={{
          height: "4rem",
          width: "4rem",
          borderRadius: "50%", // Make avatar circular
          objectFit: "cover", // Ensure image fills container
        }}
        alt="User avatar"
      />

      {/* Navigation links with proper spacing */}
      <Space
        size="large"
        align="center"
        style={{
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        <Text style={{ cursor: "pointer" }}>首页</Text>
        <Text style={{ cursor: "pointer" }}>记录</Text>
        <Text style={{ cursor: "pointer" }}>日常</Text>

        {/* GitHub link with better styling */}
        <Link
          href="https://github.com/liyulinfbfhcv"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={github}
            style={{
              height: 30,
              width: 30,
              borderRadius: "50%",
            }}
            alt="GitHub"
          />
        </Link>
      </Space>
    </div>
  );
}

export default Header;
