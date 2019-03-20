ORIGIN=$(dirname $(readlink -f $0))
echo $ORIGIN
gcloud auth activate-service-account --key-file=$ORIGIN/virtualbytes.json
gcloud config set project virtual-bytes
mkdir -p $ORIGIN/story
gsutil -m cp -r gs://story.puneetghodasara.com/* $ORIGIN/story
