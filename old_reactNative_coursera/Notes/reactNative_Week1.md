# React Native Week 1

## What is Full Stack Web Development

*Front End*
Typically, in a browser where the user accesses the information, and this is where we use technologies like HTML, CSS and JavaScript to render the content for the user.

*Backend*

This information delivery is supported behind the scenes by a back end support which is typically implemented these days using technologies like PHP, Java, ASP.NET, Ruby, Python or NodeJS

**3 Tier architecture**

We often hear people talking about the three tier architecture for web development. In this approach, the entire web application is organized into three different layers. 

1. The *presentation layer* which is concerned with delivering the information to the user. So, those are usually the UI related concerns that are dealt with at the presentation layer. Here we usually have HTML, CSS, and JavaScript.
2. The *business logic layer* on the other hand is concerned more about the data, the data validation, the dynamic content processing, and generating the content to be delivered to the user. Here we usually have Ruby, Python, Java, C++ or PHP.
3. This is backed up behind the scenes with the data persistence layer or the *data access layer*. So, this is concerned with how we store and interact with the data, typically in the form of a database and access this data through an API. So business logic layer interacts with the database like mySQL or Postgress.

There needs to be specialist in on one or the other layers. So you can specialize in one or the other layer.

![1](https://user-images.githubusercontent.com/15071636/82156217-93e76b00-983f-11ea-9ed2-efcb1b31db65.png)

There's a trend in using **one language** for all three tier. This is what Javascript try to do by implementing for example React presentation, NodeJS business logic and MongoDB for data access.

![2](https://user-images.githubusercontent.com/15071636/82156410-8b436480-9840-11ea-97ce-92bbe22307a7.png)

So, you could have the front end implemented for example, as a single page application using frameworks like Angular or React. You have the server side or the business logic layer being implemented using technologies like NodeJS, which is also dependent on JavaScript, and then you have the data storage itself being implemented using technologies like Mongo DB, which stores data in the form of JSON documents. The information exchange between the server-side and the client-side is usually done using JSON as the format, and the server-side supports a REST API endpoint.


### Resources
- React Native: https://facebook.github.io/react-native/

## Using Node and NPM

JavaScript	runtime	built on Chrome	V8 JavaScript Engine:
- Uses	an	event-driven, non-blocking I/O model
– Makes	it	lightweight	and	efficient
– More	on	server-side	use	in a later course

*Package.json*

Your library with info about your application. . Also it makes your builds reproducible, which means that when you share your code with others, then they can also do installation of all the Node modules, as we will see later in this exercise, on their own.

To start a node project just type `npm init`. The entry point can be an `index.html` or `index.js`.

*Setting up a simple server*

We can setup a simple server called *lite-server*. You can install it as `npm i lite-server --save-dev`. This will install it on your package.json `devDependencies`.

You can start lite-server as `npm run lite`. You also can add the following script to package.json so that lite-server starts, and other common dev commands response:

```js
"scripts": {
    "start": "npm run lite",
    "lite": "lite-server",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

With lite-server, the modified code is initially seen on the browser.

## Mobile App Development
*Native Apps* (like Swift for iOS or Java for Android):

- Platform specific skills
- Highest performance
- Full access to device capabilities

However you'll need *two separate code bases*. So can we do mobile app and use a single code base? One option

*Mobile Web Apps*

- Fully hosted in the mobile broswer
- Slowest
- No access to device capabilities. However it is improving but still lots of limitations

*Hybrid with WebView*

- Embedded web view based with partial implementation in native code 
- Slow, but comparable to native apps based on functionality. Still some limitations.
- Some access to device capabilities
- Example: Ionic framework.

*Compiled/Interpreted/VM Hybrid*

- Makes use of Native UIs with the native platform’s rendering engine, not WebViews
– Near-native performance 
– Access to most device capabilities 
- Built in JS engine that both Android/iOS use
- Example: React Native

## Hybrid App Development Approaches

*WebView App*
- The HTML, CSS and JavaScript code base runs in an internal browser (called WebView) that is wrapped in a native app. Some native APIs are exposed to JavaScript through this wrapper
- This mobile app feels native.
– Examples: Ionic Framework + Cordova/Phonegap, Trigger.io

*Compiled/Interpreted/VM hybrid app*
- The code is written in one language (such as C# or JavaScript) and gets
compiled/interpreted to native code or run on VM for each supported platform. The result is a native app for each platform, but less freedom during development
- Examples: React Native, NativeScript, Appcelerator Titanium, Xamarin, Embarcadero, FireMonkey

*Different types of frameworks aimed to build hybrid apps*
- Frameworks targetting HTML5 content like Ionic + Cordova/Phonegap (both
via JS byte code)
- Frameworks like React Native, NativeScript and Appcelerator Titanium that render the UI using the platform’s native controls but still work via JS
- Free (or partially free) Frameworks aiming to produce real native code like Unity (C# or JS based, Games oriented), Kivy (Python Based) or libgdx (Java based, Game Oriented)
- Commercial Frameworks aiming to produce real native code like Xamarin
(using C#) or Embarcadero

*Advantages of Hybrid Approach*

- Developer can use existing skills
- One code base for multiple platforms
- Reduced development time and cost
- Easily design for various form factors (including tablets) using responsive web design
- Access to (some) device and operating system features
- Advanced offline capabilities. You get access to the native storage capabilities on the mobile devices. 
- Increased visibility because the app can be distributed natively (via app stores) and to mobile browsers (via search engines)

*Drawbacks of Hybrid Approach*

- Performance issues for certain types of apps (ones relying
on complex native functionality or heavy transitions, such
as 3D games)
- Increased time and effort required to mimic a native UI and
feel
- Not all device and native features (fully) supported
- Risk of being rejected by Apple if app does not feel native
enough (for example, a simple website)

*Where Hybrid Apps Work Best*

- Hybrid approach does not suit all kinds of apps
- Need to carefully evaluate your target users, their
platforms of choice and the app’s requirements.
- Mainly suitable for content-driven apps
  - Business and Productivity
  - Enterprise
  - Media

You will be surprised that many of the mobile applications that you use are actually hybrid mobile applications (using frameworks like React Native). Take Facebook app as an example, it is completely done using React Native!

Think about other apps. E.g. Spotify, do you think Spotify app is hybrid or fully native with separate code basis?

## Introduction to React Native (RN)

React Native (RN) is:

- Cross-platform, native iOS and Android apps without web views
- Mainly focused on the front-end • Uses React JavaScript
- 100% access to native APIs via JavaScript and reuse of packages from NPM
- Backed by Facebook

 *React Native Approach*

There are React native specific components such as `<View>` and `<Text>`. RN is a real mobile app. It also uses hot reloading.

It also gives you the options to go native and inject out Swift/Java should you need. Although most of the time you won't.

*How RN works*

![rn1](https://user-images.githubusercontent.com/15071636/82259138-b43b2680-9920-11ea-86be-545e6896e3fd.png)

Android has (V8 JS) and iOS (JS core), RN has the bridge that then implements its framework with JS. RN then spits out native code when we are ready to build with the `export SDK`.

*Using `create-react-native-app`*

This sets everything for you, including Babel just like when using the same create-react-app in React. With these method you don't need to use iOS nor Android specific sdk.

- Installing React Native Development Tools. `npm install g create-react-native-app`
- Scaffolding an App `npx create-react-native-app appName`
- Gives access to Expo SDK.

To start just do `yarn start`. This will start the RN packager. 

*Note using Yarn*
Preferred use yarn with RN. So use it.

*Using Expo (preferred)*
To get everything running you should install Expo at [expo.io](https://expo.io/learn). Expo will ensure you can test app on mobile straight.

To start directly with an expo app use `expo init projectName` then do `expoStart`.

You'll need to install the mobile app version of Expo for your particular device and create an account. Once there just scan from your app the generated QR code.

If all goes well you should should see text saying to open `App.js` and so you're ready to code on!

*RN Project Structure*

Similar convention with React but no `index.js`. `App.js` also is your entry point.

Also note the inline based styling different from react. `StyleSheet` is imported from RN like JS to apply styles that you can reuse. RN uses *flexbox* CSS.


### Read More

<ul><li><a href="https://www.logicroom.co/react-native-architecture-explained/" target="_blank" rel="noopener nofollow">React Native Architecture : Explained!</a></li><li><a href="https://medium.com/kuralabs-engineering/reactive-core-architecture-for-react-native-and-react-applications-d590daf4ef8a" target="_blank" rel="noopener nofollow">Reactive Core architecture for React Native and React applications</a></li><li><a href="http://www.discoversdk.com/blog/how-react-native-works" target="_blank" rel="noopener nofollow">How Does React Native Work?</a></li><li><a href="https://www.youtube.com/watch?v=7rDsRXj9-cU" target="_blank" rel="noopener nofollow">React.js Conf 2015 Keynote 2 - A Deep Dive into React Native</a></li></ul>

### Other Resources

<ul><li><a href="http://www.smashingmagazine.com/2014/10/providing-a-native-experience-with-web-technologies/" target="_blank" rel="noopener nofollow">Hybrid Mobile Apps: Providing A Native Experience With Web Technologies</a></li><li><a href="https://developer.salesforce.com/page/Native,_HTML5,_or_Hybrid:_Understanding_Your_Mobile_Application_Development_Options" target="_blank" rel="noopener nofollow">Native, HTML5, or Hybrid: Understanding Your Mobile Application Development Options</a></li><li><a href="http://mobile-frameworks-comparison-chart.com/" target="_blank" rel="noopener nofollow">Mobile Frameworks Comparison Chart</a></li><li><a href="http://www.riaxe.com/blog/top-cross-platform-mobile-development-tools/" target="_blank" rel="noopener nofollow">40+ CROSS PLATFORM DEVELOPMENT TOOLS FOR MOBILE APP AND GAMES</a></li></ul>

## React Native Components

These are just like React components! 

- All the features of React components: state, props, JSX, etc. 
- It uses native components instead of web components in building the view
- We also use an all-in-one *UI kit* for creating apps in react native!
- It provides several useful UI components
- Useful in designing the UI for your app

*React Native Elements*

Cross Platform React Native UI Toolkit.

Install it / add to package.json with `yarn add react-native-elements`.

Documentation can be found [here](https://react-native-elements.github.io/react-native-elements/).

**Implementing React Native Elemens**

The following example uses `FlatList` from 'react-native' and `ListItem` from 'react-native-elements'.

Example repository [here](https://github.com/fbohz/react-native-blogs-practice/tree/master/rnDemo1).

If you run the app on expo you should see this:

![IMG_8922](https://user-images.githubusercontent.com/15071636/82367427-67ffed00-99d9-11ea-8b64-6bb3c8b2b21e.PNG)

Some React Native Interactions:

- `onPress`

### Some Resources

<ul><li><a href="https://facebook.github.io/react-native/docs/components-and-apis.html" target="_blank" rel="noopener nofollow">Components and APIs</a></li><li><a href="https://facebook.github.io/react-native/docs/view.html" target="_blank" rel="noopener nofollow">View</a></li><li><a href="https://facebook.github.io/react-native/docs/text.html" target="_blank" rel="noopener nofollow">Text</a></li><li><a href="https://facebook.github.io/react-native/docs/flatlist.html" target="_blank" rel="noopener nofollow">Flatlist</a></li><li><a href="https://facebook.github.io/react-native/docs/stylesheet.html" target="_blank" rel="noopener nofollow">Stylesheet</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/getting_started.html" target="_blank" rel="noopener nofollow">React Native Elements</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/overview.html" target="_blank" rel="noopener nofollow">React Native Elements 1.0.0-beta5 Documentation</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/listitem.html" target="_blank" rel="noopener nofollow">RNE List Item</a></li><li><a href="https://react-native-training.github.io/react-native-elements/docs/card.html" target="_blank" rel="noopener nofollow">RNE Card</a></li></ul>

## RN Navigation

Extensible and easy-to-use navigation solution. Built-in navigators like Stack, Drawer, Tab.

React Native Navigation supports navigational features. We can have common views of a navigational menu, with *stack based* pages we commonly see on mobile apps.

You install it with: `npm install @react-navigation/native`. If you're running expo: 

`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view` OR `yarn add react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-vie`

You can also add `yarn add react-native-gesture-handle` or `npm install --save react-native-gesture-handler` should you get errors.

To install better read documentation [here](https://reactnavigation.org/docs/getting-started/). You might also notice the previous version of RN Navigation has different implementation.

**Stack Navigation**

![Screen Shot 11 56 01 AM](https://user-images.githubusercontent.com/15071636/82474695-0a2edc00-9a91-11ea-9dcb-ebd4ccb89357.png)


You might start out your mobile application with a root page, which if you view it as a stack of views, will be at the bottom of the stack, then maybe from this root page you navigate to a child page. From the root page by, for example, clicking on an item in a list of items, and then when that happens, the child page is pushed on to the top of the stack and will remain on the top on the stack. And similarly, you can navigate to end of the page from the child page, and that page is also pushed onto the top of the stack, so this is the typical stack-like navigation that you see in mobile applications.

### Features:

- It automatically adds back botton.
- Provides support for transition between screens
- Manages navigation history 
  - Similar to web browser 
- Provides the gestures and animations when navigating between routes in the stack
  - Enables you to go back, tied to Android back button

### Other Navigators:

- Drawer Navigation
  - Provides automatic construction of side drawer with navigation
options
  - Can customize the drawer
- Tab Navigation
  - Typical bottom tab navigation support
- A lot of additional features to support custom navigators,
custom routers and navigation views

**Implementing React Native Navigation**

