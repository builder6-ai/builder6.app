# Builder6 Monorepo

这是一个基于 pnpm workspaces 的多包开发项目。

## 项目结构

```
builder6/
├── packages/
│   ├── api/          # NestJS API 服务
│   └── shared/       # 共享工具库
├── pnpm-workspace.yaml
└── package.json
```

## 开发环境设置

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动 API 服务（开发模式）
pnpm dev

# 或启动所有包的开发模式
pnpm -r dev
```

### 构建

```bash
# 构建所有包
pnpm build

# 构建特定包
pnpm --filter @builder6/api build
pnpm --filter @builder6/shared build
```

### 测试

```bash
# 运行所有测试
pnpm test

# 运行特定包的测试
pnpm --filter @builder6/api test
```

## 包说明

### @builder6/api
NestJS API 服务,提供后端 REST API。

### @builder6/shared
共享工具库,包含跨包共享的工具函数和类型定义。

## 添加依赖

```bash
# 为根目录添加开发依赖
pnpm add -D -w <package>

# 为特定包添加依赖
pnpm --filter @builder6/api add <package>
pnpm --filter @builder6/shared add <package>
```

## 清理

```bash
# 清理所有构建产物和依赖
pnpm clean
```

## 脚本命令

- `pnpm dev` - 启动 API 服务开发模式
- `pnpm build` - 构建所有包
- `pnpm start` - 启动 API 服务
- `pnpm start:prod` - 生产模式启动 API 服务
- `pnpm test` - 运行所有测试
- `pnpm lint` - 运行代码检查
- `pnpm format` - 格式化代码
- `pnpm clean` - 清理构建产物
