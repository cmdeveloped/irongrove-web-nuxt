#!/usr/local/bin/bash

# finds all files in images directories and does 1 things
# 1. renames file to directory name with incremented number appended

# find . -type d -mindepth 2 | sort -V | while read dname
# do
#   dir=$(basename $dname)
#   index=1
#
#   find $dname -type f -iname "*.jpg" | while read fname;
#   do
#     new=${dname}/${dir}_${index}.jpg
#     echo "$fname" $new
#     ((index++))
#   done
# done


# correct file naming convention in architecture directory

index=1
find ./architecture -type f -name "*.jpg" | sort -V | while read fname
do
  dir=$(dirname $fname)
  dname=$(basename $dir)
  new=${dir}/${dname}_${index}.jpg
  echo "$fname" $new
  ((index++))
done
