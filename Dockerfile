FROM node:14.17.5
WORKDIR /usr/src/atask
COPY ./ ./
RUN npm install --silent
EXPOSE 3000
CMD ["npm", "start"]

#docker build -t atask .
#docker run -p 3000:3000 -it --name atask --mount target=/usr/src/atask atask

