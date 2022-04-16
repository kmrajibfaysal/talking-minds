/* eslint-disable global-require */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
    theme: {
        colors: {
            root: '#26ABA3',
            btn: '#1f8d86',
            link: '#F7AB1E',
        },
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
};
