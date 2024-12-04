import type { Theme } from './types/Theme'

/**
 *
 * 1. Since setThemeStyle writes to an HTML element's style attribute, how do we implement a clear source of truth for the theme styles?
 *
 * 2. How do we scope the theme as to only target elements within a certain provider? (In order to only target the preview with changes or maybe compare two themes side by side)
 *
 * 3. At some point we may want to update multiple styles at once. Would this be part of request throttle/batch or a separate method?
 *
 */

export const setThemeStyle = <T extends keyof Theme>(
    property: T,
    value: Theme[T]
) => {
    document.documentElement.style.setProperty(`--${property}`, value)
}
