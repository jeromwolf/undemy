/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: [
      "yt3.ggpht.com", 
      "help.twitter.com", 
      "imagedelivery.net", 
      "videodelivery.net",
      "www.koit.co.kr",
      "cdn.worldvectorlogo.com",
      "m.economictimes.com",
      "encrypted-tbn0.gstatic.com",
      "economictimes.indiatimes.com",
      "ichef.bbci.co.uk",
      "nomadcoders.co",
      "i.ytimg.com",
      "cdn.logo.com",
      "firebasestorage.googleapis.com",  
      "i1.daumcdn.net",
      "www.akamai.com", 
    ],
  }
}

module.exports = nextConfig
