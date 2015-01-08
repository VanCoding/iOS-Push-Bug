iOS Push Bug
------------

An example app to demonstrate a titanium bug with push notifications on iOS

###set up

1) register your iPhone, create developer certificate, app identifier and provisioning profile for building the app

2) create an APN key & certificate and convert it to a single PFX file and put it into the root directory of this app with the name "certificate.pfx"

###run

1) build the app to your iPhone that's connected over USB using the `ti build` command

2) start the app on the iPhone (you should get a green screen when it's ready), then turn off the screen

3) Copy the deviceToken from the console (the id that comes right after 'SUCCESS')

4) run 'node ./ [deviceToken you copied before]'

5) In the app log, you should now get 1 log every second, since the server sends a push notifications every second. But for some reason, the app stops receiving push notifications after a while. Press Ctrl-C to stop the server when this happens

6) Turn on your iPhone screen to show the app. You should now see the following error message in the console:
```
[ERROR] The application has crashed with an uncaught exception 'NSGenericException'.
[ERROR] Reason:
[ERROR] *** Collection <__NSDictionaryM: 0x14da2aa0> was mutated while being enumerated.
[ERROR] Stack trace:
[ERROR]
[ERROR] 0   CoreFoundation                      0x2cd9349f <redacted> + 126
[ERROR] 1   libobjc.A.dylib                     0x3a57ac8b objc_exception_throw + 38
[ERROR] 2   CoreFoundation                      0x2cd92f21 <redacted> + 0
[ERROR] 3   iOS Push Bug                        0x0017499f iOS Push Bug + 887199
[ERROR] 4   iOS Push Bug                        0x00176d09 iOS Push Bug + 896265
[ERROR] 5   UIKit                               0x3049eaaf <redacted> + 94
[ERROR] 6   UIKit                               0x304c1f6b <redacted> + 1634
[ERROR] 7   UIKit                               0x304c16db <redacted> + 118
[ERROR] 8   UIKit                               0x304c165d <redacted> + 360
[ERROR] 9   UIKit                               0x304b6943 <redacted> + 478
[ERROR] 10  FrontBoardServices                  0x334d51e1 <redacted> + 40
[ERROR] 11  FrontBoardServices                  0x334e40d1 <redacted> + 12
[ERROR] 12  CoreFoundation                      0x2cd59d7d <redacted> + 12
[ERROR] 13  CoreFoundation                      0x2cd59041 <redacted> + 216
[ERROR] 14  CoreFoundation                      0x2cd57b7b <redacted> + 1714
[ERROR] 15  CoreFoundation                      0x2cca53c1 CFRunLoopRunSpecific + 476
[ERROR] 16  CoreFoundation                      0x2cca51d3 CFRunLoopRunInMode + 106
[ERROR] 17  GraphicsServices                    0x340630a9 GSEventRunModal + 136
[ERROR] 18  UIKit                               0x302b4fa1 UIApplicationMain + 1440
[ERROR] 19  iOS Push Bug                        0x000a38df iOS Push Bug + 30943
[ERROR] 20  libdyld.dylib                       0x3aafaaaf <redacted> + 2
[ERROR] *** Terminating app due to uncaught exception 'NSGenericException', reason: '*** Collection <__NSDictionaryM: 0x14da2aa0> was mutated while being enumerated.'
[ERROR] *** First throw call stack:
[ERROR] (0x2cd9349f 0x3a57ac8b 0x2cd92f21 0x17499f 0x176d09 0x3049eaaf 0x304c1f6b 0x304c16db 0x304c165d 0x304b6943 0x334d51e1 0x334e40d1 0x2cd59d7d 0x2cd59041 0x2cd57b7b 0x2cca53c1 0x2cca51d3 0x340630a9 0x302b4fa1 0xa38df 0x3aafaaaf)
```
