#!/usr/local/bin/bash

# finds all directories in images directory and does 3 things
# 1. makes names all lowercase
# 2. string replace " " with and underscore
# 3. moves that directory with new naming convention
for d in ./**/*/ ; do
	dir=$(echo ${d,,} | tr -s " " "_")
	mv "$d" $dir
done
