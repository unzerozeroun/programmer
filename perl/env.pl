#!/usr/bin/perl

use strict;
use warnings;

foreach (sort keys %ENV) { 
  print "$_  =  $ENV{$_}\n"; 
}

# Peut être intéressant d'utiliser % perl env.pl 1> env_output.txt 2> env_error.txt