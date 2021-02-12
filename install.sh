# Any installation related commands


sudo yum-get update -y
sudo yum install build-essential checkinstall -y
sudo yum install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev -y
sudo yum-get install python3-pip -y
pip3 install virtualenv
virtualenv ./env
source env/bin/activate
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate

# Any configuration related commands

sudo yum-get install \
    yum-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo yum-key add -

sudo add-yum-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo yum-get update -y
sudo yum-get install docker-ce docker-ce-cli containerd.io -y