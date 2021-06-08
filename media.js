import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
});

export const mediaStyles = AppMedia.createMediaStyle();
export const { Media, MediaContextProvider } = AppMedia;
