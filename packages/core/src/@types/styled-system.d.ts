import {
  ObjectOrArray,
  SpaceProps,
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  FontFamilyProps,
  LineHeightProps,
  LetterSpacingProps,
  SizeProps,
  BorderProps,
  BorderWidthProps,
  BorderStyleProps,
  BorderRadiusProps,
  ZIndexProps,
  ShadowProps,
} from "styled-system";

declare module "styled-system" {
  export interface VariantArgs {
    key?: string;
    /** Component prop, defaults to "variant" */
    prop?: string;
    /** theme key for variant definitions */
    scale?: string;

    variants: ObjectOrArray<
      ColorProps &
        SpaceProps &
        FontFamilyProps &
        FontSizeProps &
        FontWeightProps &
        LineHeightProps &
        LetterSpacingProps &
        SizeProps &
        BorderProps &
        BorderWidthProps &
        BorderStyleProps &
        BorderRadiusProps &
        ZIndexProps &
        ShadowProps
    >;
  }
}
