import axios from 'axios';
import { useMemo, useEffect, useReducer, useCallback } from 'react';

import { endpoints } from 'src/utils/axios';

import { AuthContext } from './auth-context';
import { AuthUserType, ActionMapType, AuthStateType } from '../../types';

// ----------------------------------------------------------------------
/**
 * NOTE:
 * We only build demo at basic level.
 * Customer will need to do some extra handling yourself if you want to extend the logic and other features...
 */
// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const res = await axios.get(endpoints.auth.me);

      dispatch({
        type: Types.INITIAL,
        payload: {
          user: {
            ...res.data,
          },
        },
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (email: string, password: string) => {
    const res = await axios.post(endpoints.auth.login, {
      username: email,
      password,
    });
    dispatch({
      type: Types.LOGIN,
      payload: {
        user: {
          ...res.data,
        },
      },
    });
  }, []);

  // REGISTER
  const register = useCallback(
    async (
      email: string,
      password: string,
      firstName: string,
      lastName: string,
      phoneNumber: string,
      churchGroup: string
    ) => {
      const res = await axios.post(endpoints.auth.register, {
        firstName,
        lastName,
        email,
        password,
        rememberMe: true,
        phoneNumber,
        churchGroup,
      });

      dispatch({
        type: Types.REGISTER,
        payload: {
          user: {
            ...res.data,
          },
        },
      });
    },
    []
  );

  // LOGOUT
  const logout = useCallback(async () => {
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  // FORGOT PASSWORD
  const forgotPassword = useCallback(async (email: string) => {
    // const { error } = await supabase.auth.resetPasswordForEmail(email, {
    //   redirectTo: `${window.location.origin}${paths.auth.supabase.newPassword}`,
    // });
    // if (error) {
    //   console.error(error);
    //   throw error;
    // }
  }, []);

  // NEW PASSWORD
  const updatePassword = useCallback(async (password: string) => {
    // const { error } = await supabase.auth.updateUser({ password });
    // if (error) {
    //   console.error(error);
    //   throw error;
    // }
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: {
        ...state.user,
      },
      method: 'supabase',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      register,
      logout,
      forgotPassword,
      updatePassword,
    }),
    [forgotPassword, login, logout, updatePassword, register, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue as any}>{children}</AuthContext.Provider>;
}
