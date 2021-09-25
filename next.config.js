const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    commonConfig = {
        ...defaultConfig,
        basePath: '/prepare-interview-data',
    }
    // console.log(commonConfig)

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...commonConfig,
            /* development only config options here */
        }
    }

    return {
        ...commonConfig,
        /* config options for all phases except development here */
    }
}
