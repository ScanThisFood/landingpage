/** @type {import('twind').Configuration} */
const config = {
    theme: {
        extend: {
            screens: {
                standalone: { raw: '(display-mode:standalone)' },
            },
            colors: {
                slate_blue: '#0C121C',
                green: '#005A2B',
                white: '#FFFFFF',
                light_cool_grey: '#F8F9F9',
                cool_light_grey: '#E4E8E8',
            },
        },
    },
}

export default config
