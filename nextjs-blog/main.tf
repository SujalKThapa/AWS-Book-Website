module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = "./out"
}

resource "aws_s3_bucket" "articuano2005-awsnotes-bucketman987" {
  bucket = "articuano2005-awsnotes-bucketman987"
}

resource "aws_s3_bucket_acl" "bucket_acl" {
  bucket = aws_s3_bucket.articuano2005-awsnotes-bucketman987.id
  acl    = "private"
}

resource "aws_s3_object" "objects" {
  for_each     = module.template_files.files
  bucket       = aws_s3_bucket.articuano2005-awsnotes-bucketman987.bucket
  key          = each.key
  content_type = each.value.content_type
  source       = each.value.source_path
  content      = each.value.content
  etag         = each.value.digests.md5
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "Access identity for S3 bucket"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.articuano2005-awsnotes-bucketman987.bucket_regional_domain_name
    origin_id   = "S3-articuano2005-awsnotes-bucketman987"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-articuano2005-awsnotes-bucketman987"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_s3_bucket_policy" "s3_bucket_policy" {
  bucket = aws_s3_bucket.articuano2005-awsnotes-bucketman987.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          AWS = "arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity ${aws_cloudfront_origin_access_identity.origin_access_identity.id}"
        },
        Action = "s3:GetObject",
        Resource = "${aws_s3_bucket.articuano2005-awsnotes-bucketman987.arn}/*"
      }
    ]
  })
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.s3_distribution.domain_name
}
