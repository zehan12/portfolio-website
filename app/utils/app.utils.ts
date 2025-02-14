/**
 * Checks if the current execution environment is the server.
 * @returns {boolean} True if running on the server, false otherwise.
 */
export const is_server = (): boolean => {
    return !(typeof window !== "undefined" && window.document);
};

/**
 * Checks if the current execution environment is the browser.
 * @returns {boolean} True if running in the browser, false otherwise.
 */
export const isBrowser = (): boolean => typeof window !== "undefined";
