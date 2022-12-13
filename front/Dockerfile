FROM node:16-alpine

WORKDIR /app/
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json ./
COPY ./vite.config.js ./
COPY ./postcss.config.js ./
COPY ./tailwind.config.js ./

RUN npm install

# section PROD
# RUN npm run build
# RUN npm install -g serve
# endsection PROD

EXPOSE 3000

# section PROD
# CMD ["serve", "-s", "/app/public", "-l", "3000"]
# endsection PROD

# section DEV
CMD ["npm", "run", "dev"]
# endsection DEV
