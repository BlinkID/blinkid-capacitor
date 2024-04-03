#!/bin/bash

blink_id_plugin_path=`pwd`/BlinkID

pushd $blink_id_plugin_path
npm install
npm run build
popd

appName=sample
appId=com.microblink.sample

# remove any existing code
rm -rf $appName

# create a sample application with capacitor enabled without ionic free account 
printf "%s\n" n | ionic start $appName blank --package-id=$appId --capacitor --type=angular

# enter into sample project folder
pushd $appName

IS_LOCAL_BUILD=true || exit 1
if [ "$IS_LOCAL_BUILD" = true ]; then
  echo "Using @microblink/blinkid-capacitor from this repo instead from NPM"
  # use directly source code from this repo instead of npm package
  npm i $blink_id_plugin_path
else
  echo "Downloading @microblink/blinkid-capacitor module"
  npm install --save @microblink/blinkid-capacitor
fi

# @capacitor/camera plugin needed only for sample application with DirectAPI to get the document images
npm install @capacitor/camera

# copy files before ionic build
pushd src/app/home
cp ../../../../sample_files/home.page.html ./
cp ../../../../sample_files/home.page.scss ./
cp ../../../../sample_files/home.page.ts ./
popd

# First we need to build ionic project
ionic build

npm install @capacitor/android@latest
npm install @capacitor/ios@latest

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
  popd
fi

# return from ios project folder
popd

npm i @ionic/angular@latest --save

pushd $appName

# Ensure that all pages are available for iOS and Android
ionic capacitor copy ios
ionic capacitor copy android

#update compile and target sdk versions to 31, add android:exported="true" to manifest
sed -i '' 's#compileSdkVersion = 30#compileSdkVersion = 31#g' ./android/variables.gradle
sed -i '' 's#targetSdkVersion = 30#targetSdkVersion = 31#g' ./android/variables.gradle
sed -i '' 's#android:name="com.microblink.sample.MainActivity"#android:name="com.microblink.sample.MainActivity" android:exported="true"#g' ./android/app/src/main/AndroidManifest.xml

# Add permissions to AndroidManifest.xml
sed -i '' '/<\/manifest>/i \
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> \
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" /> \
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" /> \' ./android/app/src/main/AndroidManifest.xml

# return to root folder
popd

echo "Go to Ionic project folder: cd $appName"
echo "To run on Android: go to $appName and run > npx cap run android < in terminal"
echo "To run on iOS: go to $appName and run > npx cap run ios < in terminal; set your development team; set NSPhotoLibraryAddUsageDescription, NSPhotoLibraryUsageDescription & NSCameraUsageDescription keys in the Info.plist file and press run"
