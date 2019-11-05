import React from "react";
import { boolean, number, text } from "@storybook/addon-knobs";
import { Box } from "../Box/Box";
import { Card } from "../Card/Card";
import { FlippableBox } from "./FlippableBox";
import { colorKnobs, spaceKnobs, themeColorKnob } from "../../theme/knobs";

export default {
  component: FlippableBox,
  title: "core|FlippableBox",
};

export const Default = () => {
  const height = number("Container Height", 300);
  const width = number("Container Width", 300);
  const slideAnimation = boolean("Use Slide Animation", false);

  return (
    <Box {...colorKnobs()} {...spaceKnobs()}>
      <FlippableBox
        height={height}
        width={width}
        slideAnimation={slideAnimation}
        front={
          <Card bg={themeColorKnob("Front Face Background Color", "yellow")}>
            {text(
              "Front Face Content",
              "You are looking at the front of the card right now."
            )}
          </Card>
        }
        back={
          <Card bg={themeColorKnob("Back Face Background Color", "blue")}>
            {text("Back Face Content", "This is the back!")}
          </Card>
        }
        flipped={boolean("Flipped", false)}
        flipSpeed={`${number("Flip Speed", 0.5)}s`}
      />
    </Box>
  );
};
// const FlashcardComponent = ({ cardHeight }: { cardHeight: number }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <Box margin={4} width={[500, 700]}>
//       <FlippableBox
//         front={
//           <Card
//             height={cardHeight}
//             bg="pear"
//             display="flex"
//             p={3}
//             alignItems="stretch"
//           >
//             <Box
//               display="flex"
//               flex={1}
//               mx={2}
//               border="1px solid #698600"
//               justifyContent="center"
//               alignItems="center"
//             >
//               <IconImage height="3em" width="3em" />
//             </Box>
//             <Box mx={2} flex={2} p={2} overflow="auto">
//               <Heading1>Definition</Heading1>
//               <Text>
//                 {text(
//                   "Definition",
//                   "You are looking at the front of the card right now."
//                 )}
//               </Text>
//               <Heading1 pt={3}>Example</Heading1>
//               <Text>{text("Example", "This is some example text. Blah")}</Text>
//             </Box>
//           </Card>
//         }
//         back={
//           <Card
//             height={cardHeight}
//             bg="#eee"
//             p={3}
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Heading1>{text("Term", "XXXXXXXXXXXXX")}</Heading1>
//           </Card>
//         }
//         flipped={flipped}
//         flipSpeed={number("Flip Speed", 0.5)}
//       />
//       <Box display="flex" justifyContent="center">
//         <Button my={2} px={4} onClick={() => setFlipped(!flipped)}>
//           Flip
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export const Flashcard = () => {
//   const cardHeight = number("Card Height", 300);

//   return <FlashcardComponent cardHeight={cardHeight} />;
// };
