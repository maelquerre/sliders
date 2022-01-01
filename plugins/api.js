export default function ({ $axios, $config }, inject) {
  const api = $axios.create({
    baseURL: $config.tmdbBaseUrl,
    params: {
      'api_key': $config.tmdbApiKey
    }
  })

  inject('api', api)
}