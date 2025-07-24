import axiosInstance from './axios';

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  role: string;
  provider: string;
  avatar: string;
  isEmailVerified: boolean;
}

interface Tokens {
  access: {
    token: string;
    expires: string;
  };
  refresh: {
    token: string;
    expires: string;
  };
}

interface AuthResponse {
  user: User;
  tokens: Tokens;
}

const authApi = {
  login: (payload: LoginPayload) => {
    return axiosInstance.post<AuthResponse>('/v1/auth/login', payload);
  },

  register: (payload: RegisterPayload) => {
    return axiosInstance.post<AuthResponse>('/v1/auth/register', payload);
  },

  logout: () => {
    return axiosInstance.post('/v1/auth/logout');
  },

  getProfile: () => {
    return axiosInstance.get<User>('/v1/auth/profile');
  }
};

export default authApi; 