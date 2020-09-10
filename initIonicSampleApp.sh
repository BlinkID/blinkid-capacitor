#!/bin/bash

blink_id_plugin_path=`pwd`/BlinkID

pushd $blink_id_plugin_path
npm install
npm run build
popd

appName=BlinkIDSampleApp

# remove any existing code
rm -rf $appName

# create a sample application with capacitor enabled without ionic free account 
printf "%s\n" n | ionic start $appName blank --capacitor --type=angular

# enter into sample project folder
pushd $appName

if false; then
  echo "Downloading @microblink/blinkid-capacitor module"
  npm install --save @microblink/blinkid-capacitor
else
  echo "Using @microblink/blinkid-capacitor from this repo instead from NPM"
  # use directly source code from this repo instead of npm package
  npm i $blink_id_plugin_path
fi

# First we need to build ionic project
ionic build

# We neeed to add capacitor platforms
npx cap add ios
npx cap add android

npx cap sync

# enter into android project folder
pushd android

file_MainActivity=app/src/main/java/io/ionic/starter/MainActivity.java
perl -i~ -pe "BEGIN{$/ = undef;} s/\/\/ Ex: add\(TotallyAwesomePlugin.class\);/\/\/ Ex: add\(TotallyAwesomePlugin.class\);\n      add\(com.microblink.capacitor.MicroblinkPlugin.class\);/" $file_MainActivity

popd

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
echo "To run on Android: go to $appName and run npx cap open android in terminal and press run"
echo "To run on iOS: go to $appName and run npx cap open ios in terminal; set your development team and press run"
