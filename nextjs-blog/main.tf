module "template_files" {
    source      = "hashicorp/dir/template"
    base_dir    = "./out"
}


resource "aws_s3_object" "objects" {
    for_each        = "${module.template_files.files}"
    bucket          = "articuano2005-awsnotes-bucketman987"
    key             = each.key
    content_type    = each.value.content_type
    source          = each.value.source_path
    content         = each.value.content
    etag            = each.value.digests.md5
}