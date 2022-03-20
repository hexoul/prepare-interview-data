const title = '오늘부터 전공면접 IT'
const description = '면접준비 하루 한 문제'

let url = 'https://hexoul.github.io/prepare-interview-data'
if (process.env.NODE_ENV === 'vercel') {
  url = 'https://it-interview.vercel.app'
}

export default {
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
};
