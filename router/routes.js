import { homeView } from "../views/home.js";
import { getData } from "../data/getData.js"

const router = new Navigo("/", false);

export const Routes = () => {
  try {
    router
      .on({
        "/": () => { homeView(getData) },
        "/users": () => { console.log('users')}
      })
      .resolve();
  } catch (e) {
    console.log('Error getting routes', e);
  }

}

