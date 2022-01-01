export const state = () => ({
  configuration: {}
})

export const getters = {
  image: ({ configuration }) => (path) => {
    const { secure_base_url, backdrop_sizes } = configuration.images

    return `${secure_base_url}${backdrop_sizes[2]}${path}`
  }
}

export const mutations = {
  setConfiguration(state, configuration) {
    state.configuration = configuration
  }
}
