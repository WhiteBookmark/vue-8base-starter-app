/**
 * The state manager should manage communication
 * with the API for query and subscriptions.
 */
import Vue from "vue";
import Vuex from "vuex";

import todo from "./modules/todo";
import session from "./modules/session";

Vue.use(Vuex);

/**
 * Exports configured Vuex store
 */
export default new Vuex.Store({
  modules: {
    todo,
    session
  }
});
