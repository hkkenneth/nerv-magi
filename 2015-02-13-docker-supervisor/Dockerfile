From debian:wheezy
MAINTAINER hkkenneth@gmail.com

RUN apt-get update && apt-get install -y openssh-server apache2 supervisor && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/lock/apache2 /var/run/apache2 /var/run/sshd /var/log/supervisor

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 22 80

CMD ["/usr/bin/supervisord"]

