// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import Spectacle Code Slide tag
import CodeSlide from 'spectacle-code-slide';

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

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Asynchronous data streams?</Heading>

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

      </Deck>
    );
  }
}
