# 第一阶段：构建阶段
FROM node:18-alpine3.17 as build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

# 第二阶段：运行阶段
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]
