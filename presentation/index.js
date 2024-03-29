// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

// Import Spectacle Code Slide tag
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  // [Reactive Programming] ::start
  dataStream: require("../assets/img/what-is-reactive-programming/data-stream.png"),
  // [Reactive Programming] ::end

  // [Promises vs Observables] ::start
  dataComparison: require("../assets/img/promises-vs-observables/reactive-chart.jpg"),
  benLesh: require("../assets/img/promises-vs-observables/ben-lesh-observables-promises.png"),
  // [Promises vs Observables] ::end

  // [GIFs] ::start
  dogWhat: require("../assets/img/giphy/dog-what.gif"),
  anotherOne: require("../assets/img/giphy/another-one.gif"),
  manWow: require("../assets/img/giphy/man-wow.gif"),
  mindBlown: require("../assets/img/giphy/mind-blown.gif")
  // [GIFs] ::end
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Reactive Programming using RxJS
          </Heading>

          <Text margin="10px 0 0" textColor="tertiary" size={6}>
            Exequiel Ceasar Navarrete
          </Text>
        </Slide>

        {/* [What is Reactive Programming?] ::start */}
        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Reactive Programming
          </Heading>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              What is Reactive Programming?
            </Heading>
          </Appear>

          <Appear fid="2">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              Reactive programming is programming with asynchronous data streams.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.dogWhat.replace("/", "")} bgDarken={0.25}>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            WTH is asynchronous data streams?
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Asynchronous data streams</Heading>

          <List>
            <Appear fid="3">
              <ListItem>Event Buses</ListItem>
            </Appear>

            <Appear fid="4">
              <ListItem>Click Events</ListItem>
            </Appear>

            <Appear fid="5">
              <ListItem>Mouse Events</ListItem>
            </Appear>

            <Appear fid="6">
              <ListItem>and many more...</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="7">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Data Streams
            </Heading>
          </Appear>

          <Appear fid="8">
            <Image src={images.dataStream.replace("/", "")} margin="30px auto 0" width="700px" />
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Text size={6}>
            A stream is a sequence of ongoing events ordered in time. It can emit:
          </Text>

          <List>
            <Appear fid="9">
              <ListItem>Value</ListItem>
            </Appear>

            <Appear fid="10">
              <ListItem>Error</ListItem>
            </Appear>

            <Appear fid="11">
              <ListItem>Completed Event</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Text size={6}>
            We capture these emitted events only asynchronously, by defining functions that will execute:
          </Text>

          <List>
            <Appear fid="12">
              <ListItem>when a value is emitted</ListItem>
            </Appear>

            <Appear fid="13">
              <ListItem>when an error is emitted</ListItem>
            </Appear>

            <Appear fid="14">
              <ListItem>when the stream is completed</ListItem>
            </Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/codes/what-is-reactive-programming/double-click-stream.js.example")}
          ranges={[
            { loc: [0, 18], title: "Double click stream" },
            { loc: [2, 4], note: "Get the reference on the button element" },
            { loc: [5, 7], note: "Create a stream of events based on the button clicks" },
            { loc: [8, 14], note: "Modify the stream to get only double clicks" },
            { loc: [15, 17], note: "Subscribe double click stream" }
          ]} />

        {/* [What is Reactive Programming?] ::end */}

        {/* [What is RxJS?] ::start */}
        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            RxJS
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.anotherOne.replace("/", "")} bgDarken={0.25}>
          <Appear fid="15">
            <Heading size={1} fit lineHeight={1} textColor="primary">
              Another JavaScript Library?
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="16">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              What is RxJS?
            </Heading>
          </Appear>

          <Appear fid="17">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              RxJS is a javascript library that brings the concept of "reactive programming" to the web.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Text textColor="primary" size={1}>
            In RxJS, you represent asynchronous data streams using observable sequences or also just called observables.
            Observables are very flexible and can be used using push or pull patterns.
          </Text>
        </Slide>

        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit lineHeight={1} textColor="primary">
            Definition of Terms
          </Heading>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="18">
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Observer
            </Heading>
          </Appear>

          <Appear fid="19">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              Observes something that can be observed
            </Text>
          </Appear>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="20">
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Observable
            </Heading>
          </Appear>

          <Appear fid="21">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              Observable is a function which accepts an observer and call handlers defined on the observer and returns a function.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="22">
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Subject
            </Heading>
          </Appear>

          <Appear fid="23">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              Simply both an Observer and Observable
            </Text>
          </Appear>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="24">
            <Heading size={1} caps lineHeight={1} textColor="primary">
              Operators
            </Heading>
          </Appear>

          <Appear fid="25">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              Are methods on the Observable type or class and does not modify the existing observable. Instead the return new instance of observable.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Text textColor="primary" size={6}>
            Enough talk! Let's hurry up and go deep dive with Observables, shall we?
          </Text>
        </Slide>
        {/* [What is RxJS?] ::end */}

        {/* [Observables deep dive] ::start */}
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Text textColor="primary" size={6}>
            Let's create Observables
          </Text>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Demo Time
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.manWow.replace("/", "")} bgDarken={0.25}>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Observables is awesome
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Text textColor="primary" size={6}>
            Now let's jump into the operators
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
          <Text size={6}>
            We will discuss these operators:
          </Text>

          <List>
            <ListItem>map</ListItem>
            <ListItem>filter</ListItem>
            <ListItem>take</ListItem>
            <ListItem>merge</ListItem>
            <ListItem>concat</ListItem>
            <ListItem>forkJoin</ListItem>
            <ListItem>combineLatest</ListItem>
            <ListItem>mergeMap / flatMap</ListItem>
            <ListItem>switchMap</ListItem>
          </List>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Demo Time
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.mindBlown.replace("/", "")} bgDarken={0.25}>
          <Heading size={1} fit lineHeight={1} textColor="primary">
            Now you're mind blown?
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Text textColor="primary" size={6}>
            Remember the demo last meetup? We'll convert that into promise and async/await - based code to Observables.
          </Text>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Demo Time
          </Heading>
        </Slide>
        {/* [Observables deep dive] ::end */}

        {/* [Promises vs Observables] ::start */}
        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Heading size={1} caps fit lineHeight={1} textColor="primary">
            Promise vs Observables
          </Heading>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Comparison Chart
          </Heading>

          <Image src={images.dataComparison.replace("/", "")} margin="30px auto 0" width="700px" />
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            When to use Observables over Promise?
          </Heading>

          <Appear fid="26">
            <Image src={images.benLesh.replace("/", "")} margin="30px auto 0" width="700px" />
          </Appear>
        </Slide>
        {/* [Promises vs Observables] ::end */}

        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank you!
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
