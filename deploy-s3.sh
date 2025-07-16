#!/bin/bash

# S3 bucket name - replace with your bucket name
BUCKET_NAME="henry-portfolio-website"

# Build the static site
echo "Building static site..."
npm run build

# Sync the out directory to S3
echo "Uploading to S3..."
aws s3 sync out/ s3://$BUCKET_NAME --delete

# Set cache headers for better performance
echo "Setting cache headers..."
aws s3 cp s3://$BUCKET_NAME/index.html s3://$BUCKET_NAME/index.html --cache-control "no-cache, no-store, must-revalidate" --content-type "text/html"
aws s3 cp s3://$BUCKET_NAME/style.css s3://$BUCKET_NAME/style.css --cache-control "public, max-age=31536000" --content-type "text/css"

# Make the bucket publicly readable
echo "Setting bucket policy..."
aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy '{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::'$BUCKET_NAME'/*"
        }
    ]
}'

# Configure for static website hosting
echo "Configuring static website hosting..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document 404.html

echo "Deployment complete!"
echo "Your site is available at: http://$BUCKET_NAME.s3-website-us-west-1.amazonaws.com" 