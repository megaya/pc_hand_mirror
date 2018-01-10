## 概要

Electronで作った鏡アプリです
ただWebRTCでカメラを起動させているだけです

## 起動

```
$ git clone https://github.com/megaya/pc_hand_mirror.git
$ cd pc_hand_mirror
$ pc_hand_mirror
$ npm install && npm start
```
## パッケージ化

#### Windows

```
electron-packager app/ app_name --platform=win32 --arch=all --version=1.7.10
```

#### mac

```
electron-packager app/ app_name --platform=drawin --arch=all --version=1.7.10
```
