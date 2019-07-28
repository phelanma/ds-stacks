docker network create -d overlay public-net
docker network create -d overlay data-net
docker network create -d overlay monitoring-net
docker network create -d overlay agent-net

# docker stack deploy -c gelk.stack.yml gelk


