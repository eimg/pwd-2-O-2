pwd
mkdir app
cd app
pwd
ls
touch README.md .gitignore
ls
ls -la

echo "MIT" > LICENSE.md
cat LICENSE.md

nano app.js
# [write code]
# [ctrl+o save, ctrl+x exit]

cat app.js

vim style.css
# [press `i` to enter insert mode]
# [write code]
# [press `esc`]
# [:wq Enter]

cat style.css

mv app.js server.js
cp style.css components.css
mkdir js
mv server.js js/
mkdir -p img/brand
rm LICENSE.md

sudo apt update
sudo apt install tree
tree .

# Git
sudo apt install git

# [ open project folder in terminal ]
pwd
touch index.html
ls
git init
git status
git add .
git commit -m "first commit"

git log
# [press q to quit log]

echo "PWD 2" > README.md
git add .
git commit -m "second commit"

git log
# [press q to quit log]

git tag 0.1.0
touch app.js
git add .
git commit -m "third commit"

git checkout 0.1.0
git checkout main

git branch
# [press q to quit]

git branch dev
git branch
git checkout dev
touch style.css
git add .
git commit -m "fourth commit"
git checkout main
git merge dev

# docker
docker images
docker ps
docker run ubuntu echo "Hello Docker"

docker run -ti ubuntu /bin/bash
apt update
apt install nginx

# [new termianl tab]
docker ps
docker commit <container_id> ubuntu:nginx

docker run -it -p 90:80 ubuntu:nginx /bin/bash
