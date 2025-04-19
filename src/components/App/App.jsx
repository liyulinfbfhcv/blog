/**
 * App: Root Component for Blog Application
 * 应用根组件：博客项目的布局容器
 * @module App
 * @author ylli <1930207416@qq.com>
 * @version 1.0.0
 */

// Import assets and dependencies
// 导入资源和依赖
import "./App.css";
import { Outlet } from "react-router-dom";
import { Space, Typography } from "antd";
import Header from "../header/header";
const { Text, Link } = Typography;
/**
 * Main application component that serves as the layout container
 * 应用主组件，作为整体布局容器
 * @function App
 * @returns {JSX.Element} The application layout structure
 * @returns {JSX.Element} 应用布局结构
 */
function App() {
  return (
    // Main container with flex column layout
    // 主容器采用垂直弹性布局
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure full viewport height / 确保撑满整个视口高度
        flex: 1,
        justifyContent: "flex-start", // Content aligned to top / 内容顶部对齐
      }}
    >
      {/* Header section with navigation */}
      {/* 顶部导航栏区域 */}
      <div
        style={{
          width: "100%",
          height: "4rem",
        }}
      >
        <Header />
      </div>

      {/* Main content area where child routes will render */}
      {/* 主内容区域（子路由将在此渲染） */}
      <div id="main" style={{ flex: 1, height: " 100%" }}>
        <Outlet />{" "}
        {/* React Router outlet for nested routes / 嵌套路由的渲染出口 */}
      </div>
    </div>
  );
}

export default App;
