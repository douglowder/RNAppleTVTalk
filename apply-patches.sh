#!/bin/bash 

mv node_modules/react-native-tvos node_modules/react-native

patch -p0 -N < patches/react-native-sound.patch

exit 0
