# 사용할 Node.js 이미지 선택
FROM node:14

# 작업 디렉토리 생성
WORKDIR /usr/src/app

# 애플리케이션 종속성 설치
COPY package*.json ./
RUN npm install

# 애플리케이션 소스 코드 복사
COPY . .

# 애플리케이션 실행
CMD [ "npm", "run", "start" ]