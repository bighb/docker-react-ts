# React + TypeScript + Vite

这是一个使用 Docker 进行构建和部署的 React 项目。

## 安装

首先，确保你的系统上已经安装了 Docker 和 Docker Compose。如果还没有安装，你可以参考以下链接进行安装：

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 运行

构建完成后，你可以使用以下命令来运行你的应用：

```
docker-compose up -d --build
```

这个命令会启动一个新的 Docker 容器，并将容器的 80 端口映射到主机的 80 端口。**-d** 代表 "分离模式"。这意味着容器将在后台运行，不会阻塞命令行界面。

## Dockerfile 说明

这个项目的 Dockerfile 使用了多阶段构建，分为构建阶段和运行阶段。

- 构建阶段：使用 Node.js 镜像作为基础，复制项目文件，安装依赖，然后运行 `npm run build` 来构建应用。
- 运行阶段：使用 Nginx 镜像作为基础，从构建阶段复制构建的应用到 Nginx 服务器，然后启动 Nginx 服务器。

## 注意事项

请确保你的应用在构建阶段生成的文件位于 `/app/dist` 目录下，因为 Dockerfile 会从这个目录复制文件到 Nginx 服务器。

如果你的应用监听的不是 80 端口，你需要修改 Dockerfile 和运行命令中的端口映射。
