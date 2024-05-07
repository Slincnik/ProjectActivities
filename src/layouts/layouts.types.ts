export enum AppLayoutsEnum {
  default = 'default',
  auth = 'auth'
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'AppLayoutDefault.vue',
  auth: 'AppLayoutAuth.vue'
}

export enum RouteNames {
  HOME = 'Home',
  LOGIN = 'Login',
  REGISTER = 'Register',
  PROFILE = 'Profile',
  EVENTS = 'Events',
  TRACKED = 'Tracked'
}
