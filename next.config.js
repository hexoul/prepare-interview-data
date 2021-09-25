const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    commonConfig = {
        ...defaultConfig,
        env: {
            logoImg: 'https://raw.githubusercontent.com/hexoul/prepare-interview-data/master/logo.png',
            appstoreUrl: 'https://apps.apple.com/kr/app/id1526993862',
            appstoreImg: 'https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/en-us.svg',
            playstoreUrl: 'https://play.google.com/store/apps/details?id=com.whatseries.prepareinterview',
            playstoreImg: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
        },
    }
    // console.log(commonConfig)

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...commonConfig,
            /* development only config options here */
            env: {
                ...commonConfig.env,
                basePath: '/',
            },
        }
    }

    const basePath = '/prepare-interview-data'
    return {
        ...commonConfig,
        /* config options for all phases except development here */
        basePath,
        env: {
            ...commonConfig.env,
            basePath,
        },
    }
}
