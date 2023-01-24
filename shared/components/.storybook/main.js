module.exports = {
  stories: ["../src/*/*.stories.mdx", "../src/*/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  previewHead: (head) => `
    ${head}
    <style>
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        --color-primary-darker: hsl(26, 100%, 55%);
        --color-primary-hovered: hsla(26, 100%, 55%, 0.75);
        --color-primary-lighter: hsl(25, 100%, 94%);

        --dark-blue: hsl(220, 13%, 13%);
        --blue: hsl(220, 14%, 75%);
        --grayish-blue: hsl(219, 9%, 45%, .1);
        --grayish-blue-lighter: hsla(230, 60%, 98%, 0.2);
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);

        --default-font-size: 1.6rem;

        --grid-width: 140rem;
        --gutter-vertical: 8rem;
        --gutter-horizontal: 20rem;

        --image-size-large: 63rem;
        --image-size-medium: 8rem;
      }

      html {
        font-size: 62.5%;
      }


      body {
        background-color: var(--white);
        font-family: 'Kumbh Sans', sans-serif;
        overflow-x: hidden;
        margin: 0 2rem;
      }
    </style>
  `,
}
