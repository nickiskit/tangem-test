export const hideBanner = () => {
  sessionStorage.setItem('bannerIsHidden', 'true');
}

export const isBannerHidden = () => (
    sessionStorage.getItem('bannerIsHidden') === 'true'
)

export const getPosition = (height: number) => {
  return height - 108 <= 349 + 34 ? {top: 88} : {bottom: 34};
}
