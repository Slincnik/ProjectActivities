export enum AppLayoutsEnum {
  default = 'default'
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: 'AppLayoutDefault.vue'
}

export enum RouteNames {
  HOME = 'Home',
  LOGIN = 'Login',
  REGISTER = 'Register',
  PROFILE = 'Profile',
  EVENTS = 'Events',
  TRACKED = 'Tracked'
}
