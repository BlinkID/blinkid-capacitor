#!/bin/bash

blink_id_plugin_path=`pwd`/BlinkID

appName=Sample

# remove any existing code
rm -rf $appName

# create a sample application with capacitor enabled
ionic start $appName blank --capacitor --type=angular

# enter into demo project folder
pushd $appName

if false; then
  # download npm package
  echo "Downloading blinkid-capacitor module"
  npm install --save blinkid-capacitor
else
  echo "Using blinkid-capacitor from this repo instead from NPM"
  # use directly source code from this repo instead of npm package
  # from RN 0.57 symlink does not work any more
  # npm pack $blink_id_plugin_path
  # npm install --save blinkid-capacitor-5.7.1.tgz

  npm i $blink_id_plugin_path
fi

# First we need to build ionic project
ionic build

# We neeed to add capacitor platforms
npx cap add ios
npx cap add android

npx cap sync

# enter into ios project folder
pushd ios/App

# install pod
pod update
pod install

if false; then
  echo "Replace pod with custom dev version of BlinkID framework"
  # replace pod with custom dev version of BlinkID framework
  pushd Pods/PPBlinkID
  rm -rf Microblink.framework

  cp -r ~/Downloads/blinkid-ios/Microblink.framework ./
  #popd
fi

# go to root
popd

pushd $appName

npm i @ionic/angular@latest --save

popd

pushd $appName/src/app/home

cp ../../../../SampleFiles/home.page.html ./
cp ../../../../SampleFiles/home.page.scss ./
cp ../../../../SampleFiles/home.page.ts ./

popd

pushd $appName

# Ensure that all pages are available for iOS and Android
ionic capacitor copy ios
ionic capacitor copy android

popd

echo "Go to Ionic project folder: cd $appName"
echo "To run on iOS: go to $appName/ios and open App.xcworkspace; set your development team and press run"
