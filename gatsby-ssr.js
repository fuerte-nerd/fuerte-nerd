import store from "./src/redux/store"

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)
