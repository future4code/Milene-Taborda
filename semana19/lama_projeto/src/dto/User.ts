export interface SignupInputDTO {
  name: string,
  email: string,
  password: string,
  role: string,
  device: string   
};

export interface LoginInputDTO {
  email: string,
  password: string,
  device: string
};
