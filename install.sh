# Any installation related commands


sudo yum update -y
sudo yum install build-essential checkinstall -y
sudo yum install libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev libffi-dev -y
sudo yum install python3-pip -y
pip3 install virtualenv
virtualenv ./env
source env/bin/activate
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate

# Any configuration related commands

sudo yum install \
    yum-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y



sudo yum update -y
sudo yum install docker-ce docker-ce-cli containerd.io -y