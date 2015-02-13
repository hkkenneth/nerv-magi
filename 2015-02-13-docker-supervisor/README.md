Docker with supervisor
======================

Based on https://docs.docker.com/articles/using_supervisord/

1. Build Docker image
```bash
sudo docker build -t <yourname>/supervisord .
```
2. Run it
```bash
sudo docker run -p 22 -p 80 -t -i <yourname>/supervisord
```
3. Exercise
  1. Change the autorestart config for one of the processes (e.g apache2)
  2. Reload the configuration without affecting other processes
  3. Kill apache2 with various signals and see what happens
