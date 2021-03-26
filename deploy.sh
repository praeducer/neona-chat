# Stop-gap deployment schema by Ian. 

# html
az storage blob upload-batch --source . --pattern "*.html" --account-name neonav2webchat --destination '$web' --destination-path .
# assets
az storage blob upload-batch --source ./assets --account-name neonav2webchat --destination '$web' --destination-path ./assets
# libs
az storage blob upload-batch --source ./libs --account-name neonav2webchat --destination '$web' --destination-path ./libs
# favicons
az storage blob upload-batch --source . --pattern "*.ico" --account-name neonav2webchat --destination '$web' --destination-path .