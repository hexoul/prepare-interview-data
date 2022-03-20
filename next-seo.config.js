const title = '오늘부터 전공면접 IT'
const description = '면접준비 하루 한 문제'

let url = 'https://hexoul.github.io/prepare-interview-data'
if (process.env.VERCEL) {
  url = 'https://it-interview.vercel.app'
}

const seoConfig = {
  title,
  description,
  canonical: url,
  openGraph: {
    site_name: title,
    description: description,
    type: 'website',
    locale: 'en_IE',
    url: url,
    images: [
      {
        url: `${url}/banner.png`,
        alt: title,
        width: 708,
        height: 136,
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'google-site-verification',
      content: 'oY8SmcLii0Fnha_NejoojF0aPb4oddbPM-LYYnP4wtU',
    },
  ],
};

export default seoConfig;
