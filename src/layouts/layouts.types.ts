export enum AppLayoutsEnum {
  default = 'default',
  auth = 'auth',
  authed = 'authed'
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'AppLayoutDefault.vue',
  auth: 'AppLayoutAuth.vue',
  authed: 'AppLayoutAuthed.vue'
}

export enum RouteNames {
  HOME = 'Home',
  LOGIN = 'Login',
  REGISTER = 'Register',
  PROFILE = 'Profile',
  EVENTS = 'Events',
  TRACKED = 'Tracked',
  NOT_FOUND = 'NotFound'
}
