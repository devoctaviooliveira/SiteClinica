const size = {
  mobile_only: '599px',
  mobile_up: '600px',
  tablet_only: '699px',
  tablet_up: '700px',
  desktop_only: '1199px',
  desktop_up: '1200px'
}

const breakpoints = {
  mobile_only: `(max-width: ${size.mobile_only})`,
  mobile_up: `(min-width: ${size.mobile_up})`,
  tablet_only: `(max-width: ${size.tablet_only})`,
  tablet_up: `(min-width: ${size.tablet_up})`,
  desktop_only: `(max-width: ${size.desktop_only})`,
  desktop_up: `(min-width: ${size.desktop_up})`
}

export default breakpoints


