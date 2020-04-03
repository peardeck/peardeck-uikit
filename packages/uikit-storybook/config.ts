import { addDecorator, addParameters, configure } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { create } from "@storybook/theming";
import { StoryContext } from "@storybook/addons";
import withThemeProvider from "./withThemeProvider";

// The order in which to sort the root level stories.
// These should always be lower-cased.
const STORY_ROOT_SORT_ORDER = ["guide", "core", "icons"];

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withThemeProvider);
addParameters({
  options: {
    storySort: (
      [_aId, a]: [string, StoryContext],
      [_bId, b]: [string, StoryContext]
    ): number | undefined => {
      const aRoot = a.kind.split("|", 1)[0].toLowerCase();
      const bRoot = b.kind.split("|", 1)[0].toLowerCase();

      if (aRoot !== bRoot) {
        // Different "Root" categories, so make sure those are
        // in the correct order based on `STORY_ROOT_SORT_ORDER` preference
        const aRootOrder = STORY_ROOT_SORT_ORDER.indexOf(aRoot);
        const bRootOrder = STORY_ROOT_SORT_ORDER.indexOf(bRoot);

        if (aRootOrder === -1 && bRootOrder !== -1) {
          return 1;
        }

        if (aRootOrder !== -1 && bRootOrder === -1) {
          return -1;
        }

        if (aRootOrder !== -1 && bRootOrder !== -1) {
          return aRootOrder - bRootOrder;
        }
      }

      // Individual stories can set a `sortOrder` parameter to force a sort order, i.e.:
      // <Meta parameters={{ sortOrder: 0 }} title="My Story" />
      const aSortOrder = a.parameters && a.parameters.sortOrder;
      const bSortOrder = b.parameters && b.parameters.sortOrder;

      if (typeof aSortOrder === "number" || typeof bSortOrder === "number") {
        return aSortOrder - bSortOrder;
      }

      // No special cases left, just use the default sort order
      // (the order in which they were imported)
      return 0;
    },
    theme: create({
      base: "light",
      brandTitle: "Peardeck UI Kit",
      brandUrl: "https://peardeck.github.io/peardeck-uikit/",
      // brandImage: 'TODO: create a cool icon!',
    }),
  },
});

configure(() => {
  const guides = require.context("./guide/", true, /\.stories\.(js|mdx|tsx)$/);
  const guideStories = guides.keys().map((fname) => guides(fname));

  const components = require.context(
    "../",
    true,
    /.*\/dist\/(.*\.)?stories\.(js|mdx|tsx)$/
  );

  return [
    ...guideStories,
    ...components
      .keys()
      .map((fname) => components(fname))
      // Ignore stories with no default export, because these are still using
      // the old "storiesOf" definitions
      .filter((exp) => !!exp.default),
  ];
}, module);
