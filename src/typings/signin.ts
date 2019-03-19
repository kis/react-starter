export interface SigninProps {
  actions: any;
  auth: any;
  onboarding: any;
}

export interface SigninState {
  errors?: Errors;
}

export interface Errors {
  username?: any;
  password?: any;
}
