#!/usr/bin/perl

use strict;
use warnings;

use Image::ExifTool;

my $exifTool = new Image::ExifTool;

my $file = shift or die "Usage: $0 file\n";

$exifTool->ExtractInfo($file);

my $info = $exifTool->GetInfo('CreateDate','VideoFrameRate','BitDepth','AvgBitrate','ImageHeight');

foreach my $key (sort keys %$info) {
    print "$key: $info->{$key}\n";
}  