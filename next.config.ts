import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
  turbopack: {},
  images: {
    qualities: [75, 90],
  },
}

export default withVanillaExtract(nextConfig)
