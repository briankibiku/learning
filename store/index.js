export const state = () => ({
  counter: 0,
  visitor_info: {
    id: 1,
    username: "",
    phone: "",
  },
  userProfile: null,
  userProfilePersistence: false,
});
export const actions = {
  startPersistance({ commit }, payload) {
    commit("updateUserProfile", payload);
    commit("updateUserProfilePersistence", true);
  },
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
  // update mountains state
  updateUserProfile(state, payload) {
    state.userProfile = payload;
  },
  updateUserProfilePersistence(state, payload) {
    state.userProfilePersistence = payload;
  },

  updateUserName(state, payLoad) {
    state.visitor_info.username = payLoad;
  },
};
