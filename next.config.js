/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
	swcMinify: true,
	i18n,
	env:{
		SITE_WEB_KEY: "6Leh0JYlAAAAAGOGtVJsQ0cFjgHdN-IfjuTyY483"
	}

}
module.exports = nextConfig
