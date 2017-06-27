/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios"
                                                                  fallbackResource:nil];
#if TARGET_OS_SIMULATOR
  if (getenv("CI_USE_PACKAGER")) {
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios"
                                                                    fallbackResource:nil];
    if(jsCodeLocation == nil) {
      NSLog(@"The React Native packager is not running.  Please run 'npm start' from the RN directory.");
      return nil;
    }
  } else
#endif
  {
    NSString *jsCodePath = [[NSBundle mainBundle] pathForResource:@"RNAppleTVTalk.bundle" ofType:@"js"];
    jsCodeLocation = [NSURL fileURLWithPath:jsCodePath];
    if(jsCodeLocation == nil) {
      NSLog(@"The Insights JS bundle doesn't exist.  Please generate it and add it to the top level of the Salesforce1 project.");
      return nil;
    }
  }
  


  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNAppleTVTalk"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
