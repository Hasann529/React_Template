import Cookies from 'js-cookie';


export const isAuthenticated = (): boolean => {
  const token = Cookies.get('token');
  return !!token;
};
