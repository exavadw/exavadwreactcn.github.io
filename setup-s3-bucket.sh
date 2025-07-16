#!/bin/bash

# S3 bucket name - replace with your desired bucket name
BUCKET_NAME="henry-portfolio-website"

# Create the S3 bucket
echo "Creating S3 bucket: $BUCKET_NAME"
aws s3 mb s3://$BUCKET_NAME --region us-west-1

# Configure bucket for static website hosting
echo "Configuring static website hosting..."
aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document 404.html

# Set bucket policy for public read access
echo "Setting bucket policy for public access..."
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

# Disable block public access (required for website hosting)
echo "Disabling block public access..."
aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

echo "S3 bucket setup complete!"
echo "Bucket name: $BUCKET_NAME"
echo "Website URL: http://$BUCKET_NAME.s3-website-us-west-1.amazonaws.com"
echo ""
echo "Now update deploy-s3.sh with your bucket name and run: ./deploy-s3.sh" 