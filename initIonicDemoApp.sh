#!/bin/bash

blink_id_plugin_path=`pwd`/BlinkID

appName=Sample

# remove any existing code
rm -rf $appName

# create a sample application with capacitor enabled
ionic start SampleIonic --capacitor

# enter into demo project folder
pushd $appName

if true; then
  # download npm package
  echo "Downloading blinkid-capacitor module"
  npm install --save blinkid-capacitor
else
  echo "Using blinkid-react-native from this repo instead from NPM"
  # use directly source code from this repo instead of npm package
  # from RN 0.57 symlink does not work any more
  npm pack $blink_id_plugin_path
  npm install --save blinkid-capacitor-5.7.1.tgz
fi

# enter into android project folder
pushd android

# patch the build.gradle to add "maven { url https://maven.microblink.com }"" repository
# perl -i~ -pe "BEGIN{$/ = undef;} s/maven \{/maven \{ url 'https:\\/\\/maven.microblink.com' }\n        maven {/" build.gradle

popd

# enter into ios project folder
pushd ios

# install pod
pod install

if false; then
  echo "Replace pod with custom dev version of BlinkID framework"
  # replace pod with custom dev version of BlinkID framework
  pushd Pods/PPBlinkID
  rm -rf Microblink.framework

  cp -r ~/Downloads/blinkid-ios/Microblink.framework ./
  #popd
fi

# go to react native root project
popd

# # remove index.js
# rm -f index.js

# # remove index.ios.js
# rm -f index.ios.js

# # remove index.android.js
# rm -f index.android.js

# cp ../demoApp/index.js ./

# # use the same index.js file for Android and iOS
# cp index.js index.ios.js
# cp index.js index.android.js

echo "Go to Ionic project folder: cd SampleIonic"
# echo "To run on Android execute: react-native run-android"
# echo "To run on iOS: go to BlinkIDReactNative/ios and open BlinkIDReactNative.xcworkspace; set your development team and add Privacy - Camera Usage Description key to Your info.plist file and press run"
