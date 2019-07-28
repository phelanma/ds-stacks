FROM node:12-slim
COPY package.json package.json
RUN npm i
COPY index.js index.js
ENV PORT=8989
CMD ["node", "index.js"]
