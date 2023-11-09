# Docker Containers for development

Mongodb, /frontend (nextjs), /backend (fastapi)
are setup with live reloading when a file is changed
on the local filesystem. Docker mounts directories /frontend and /backend to the instanced image when docker-compose is used.

Main commands:

> docker-compose up
> docker-compose up --build

this will partially rebuild containers that have changed

> docker-compose down -v

this will remove the containers and attached volumes after hitting ctrl-c in the terminal
For mongodb the mongodb_data volume will be deleted with the -v option

### Troubleshooting

if having _permission issues (*nix)_

- add your user to the docker group

> sudo usermod -aG docker $USER

- apply the changes by either logging out our running

> newgrp docker

if having issues updating the build

### Docker containers

if you would like the see the containers that
are running:

> docker ps

### To find logs

> docker ps #to find the container id

> docker-compose logs <container id>

### References

On how Docker builds its containers:
https://docs.docker.com/build/guide/
