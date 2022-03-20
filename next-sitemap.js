let siteUrl = 'https://hexoul.github.io/prepare-interview-data'
if (process.env.NODE_ENV === 'vercel') {
  siteUrl = 'https://it-interview.vercel.app'
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
}
