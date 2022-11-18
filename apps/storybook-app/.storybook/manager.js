import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
    base: 'dark',
    appContentBg: 'white',
    brandTitle: 'mono-repo-tools',
})

addons.setConfig({
  theme
});


