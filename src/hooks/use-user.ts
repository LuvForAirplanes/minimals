import { useAuthContext } from 'src/auth/hooks';

export function useUser() {
  const { user } = useAuthContext();
  return user;
}
