FROM cypress/base:latest


RUN apt-get update \
    && apt-get install -y locales \
    && sed -i -e 's/# pt_BR.UTF-8 UTF-8/pt_BR.UTF-8 UTF-8/' /etc/locale.gen \
    && locale-gen


ENV LANG=pt_BR.UTF-8


ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


WORKDIR /app



COPY package*.json ./


RUN npm install


COPY . .

RUN mkdir -p /app/cypress/screenshots \
    && mkdir -p /app/cypress/reports/mocha

ENTRYPOINT ["npx", "cypress", "run"]
