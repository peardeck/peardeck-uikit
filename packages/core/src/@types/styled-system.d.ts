import { Theme } from "../theme/theme";

// and extend them!
declare module "styled-components" {
  // export interface DefaultTheme {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

// import {
//   ObjectOrArray,
//   SpaceProps,
//   ColorProps,
//   FontSizeProps,
//   FontWeightProps,
//   FontFamilyProps,
//   LineHeightProps,
//   LetterSpacingProps,
//   SizeProps,
//   BorderProps,
//   BorderWidthProps,
//   BorderStyleProps,
//   BorderRadiusProps,
//   ZIndexProps,
//   ShadowProps,
// } from "styled-system";

// declare module "styled-system" {
//   export interface VariantArgs {
//     key?: string;
//     /** Component prop, defaults to "variant" */
//     prop?: string;
//     /** theme key for variant definitions */
//     scale?: string;

//     variants: ObjectOrArray<
//       ColorProps &
//         SpaceProps &
//         FontFamilyProps &
//         FontSizeProps &
//         FontWeightProps &
//         LineHeightProps &
//         LetterSpacingProps &
//         SizeProps &
//         BorderProps &
//         BorderWidthProps &
//         BorderStyleProps &
//         BorderRadiusProps &
//         ZIndexProps &
//         ShadowProps
//     >;
//   }
// }
