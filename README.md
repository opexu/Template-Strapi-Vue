# Template-Strapi-Vue
Docker nginx Strapi Postgres Vue3 Tailwind

.env file place to root and backend folders

Example of .env file:

HOST=0.0.0.0
PORT=1337
APP_KEYS=someappkeys1==,someappkeys2==,someappkeys3==,someappkeys4==
API_TOKEN_SALT=sometokensalt
ADMIN_JWT_SECRET=someadminjwtsecret
JWT_SECRET=somejwtsecret==
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=database
DATABASE_USERNAME=username
DATABASE_PASSWORD=username
NODE_ENV=development
DATABASE_CLIENT=postgres
API_SERVER_URL=http://localhost/backend

#SMTP_HOST=email-smtp.eu-west-1.amazonaws.com
#SMTP_PORT=465
#SMTP_USER=smtpuser
#SMTP_PASSWORD=smtppassword
#SMTP_FROM=Support <any@some.ru>
#SMTP_REPLYTO=Support <any@some.ru>