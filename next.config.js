const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    commonConfig = {
        ...defaultConfig,
        env: {
            logoImg: 'https://raw.githubusercontent.com/hexoul/prepare-interview-data/master/logo.png',
            appstoreUrl: 'https://apps.apple.com/kr/app/id1526993862',
            appstoreImg: 'https://apple-resources.s3.amazonaws.com/media-badges/download-on-the-app-store/black/ko-kr.svg',
            playstoreUrl: 'https://play.google.com/store/apps/details?id=com.whatseries.prepareinterview',
            playstoreImg: 'https://play.google.com/intl/en_us/badges/static/images/badges/ko_badge_web_generic.png',
            termsUrl: 'https://github.com/hexoul/privacy-policy/wiki/Terms-&-Conditions-for-%EC%98%A4%EB%8A%98%EB%B6%80%ED%84%B0-%EC%A0%84%EA%B3%B5%EB%A9%B4%EC%A0%91',
            privacyUrl: 'https://github.com/hexoul/privacy-policy/wiki/Privacy-Policy-for-%EC%98%A4%EB%8A%98%EB%B6%80%ED%84%B0-%EC%A0%84%EA%B3%B5%EB%A9%B4%EC%A0%91',
        },
    }
    // console.log(commonConfig)

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...commonConfig,
            /* development only config options here */
            env: {
                ...commonConfig.env,
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
        },
    }
}
