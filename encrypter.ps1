gcloud kms encrypt --plaintext-file=keys\cert.pem --ciphertext-file=keys\cert.pem.gcp.enc --location=global  --keyring=puneetghodasara  --key=website-key
gcloud kms encrypt --plaintext-file=keys\key.pem  --ciphertext-file=keys\key.pem.gcp.enc --location=global  --keyring=puneetghodasara  --key=website-key

aws kms encrypt --key-id 281f3cd3-9fbe-4ef7-87e5-8029999f81ab --plaintext fileb://keys/key.pem --output text --query CiphertextBlob > .\keys\key.pem.aws.enc.base64
rm keys\key.pem.aws.enc
certutil.exe -decode .\keys\key.pem.aws.enc.base64 .\keys\key.pem.aws.enc
rm keys\key.pem.aws.enc.base64

aws kms encrypt --key-id 281f3cd3-9fbe-4ef7-87e5-8029999f81ab --plaintext fileb://keys/cert.pem --output text --query CiphertextBlob > .\keys\cert.pem.aws.enc.base64
rm keys\cert.pem.aws.enc
certutil.exe -decode .\keys\cert.pem.aws.enc.base64 .\keys\cert.pem.aws.enc
rm keys\cert.pem.aws.enc.base64

