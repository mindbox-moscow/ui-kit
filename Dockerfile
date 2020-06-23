FROM node:10.16.3

ENV ROOT_DIR /app

RUN apt-get update && \
	apt-get install -y git sudo software-properties-common

RUN wget https://dl-ssl.google.com/linux/linux_signing_key.pub && sudo apt-key add linux_signing_key.pub
RUN sudo add-apt-repository "deb http://dl.google.com/linux/chrome/deb/ stable main"

RUN	apt-get -y update && apt-get -y install google-chrome-stable

RUN apt-get -qqy update \
  && apt-get -qqy --no-install-recommends install \
    libfontconfig \
    libfreetype6 \
    xfonts-cyrillic \
    xfonts-scalable \
    fonts-liberation \
    fonts-ipafont-gothic \
    fonts-wqy-zenhei \
  && rm -rf /var/lib/apt/lists/* \
  && apt-get -qyy clean

RUN mkdir ${ROOT_DIR}
WORKDIR ${ROOT_DIR}

CMD [ "npm", "run", "test:screenshots" ]
