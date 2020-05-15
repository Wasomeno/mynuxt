export const mutations = {
    ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
        state.user.email = authUser.email
        
        const { email } = authUser
        state.user = { email }
      }
}
