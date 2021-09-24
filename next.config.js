const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    commonConfig = defaultConfig
    commonConfig.basePath = '/prepare-interview-data'
    // console.log(commonConfig)

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            ...commonConfig
        }
    }

    return {
        /* config options for all phases except development here */
        ...commonConfig
    }
}
