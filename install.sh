# Any installation related commands


sudo apt-get update -y
sudo apt install build-essential checkinstall -y
sudo apt install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev -y
sudo apt-get install python3-pip -y
pip3 install virtualenv
virtualenv ./env
source env/bin/activate
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate

# Any configuration related commands

sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io -y