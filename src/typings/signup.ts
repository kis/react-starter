export interface SignupProps {
  actions: any;
  auth: any;
  onboarding: any;
}

export interface SignupState {
  errors?: Errors;
}

export interface Errors {
  username?: any;
  email?: any;
  password?: any;
}
