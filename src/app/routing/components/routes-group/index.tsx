import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'app/hooks';
import { UserRole } from 'shared/types/common.types';

interface OnlyUnauthorizedRouteProps {
  onlyUnauthorized: boolean;
  allowed?: never;
  isRoot?: never;
}

interface RoledRouteProps {
  allowed: {
    [key in UserRole]?: boolean;
  };
  onlyUnauthorized?: never;
  isRoot?: boolean;
}

type RoutesGroupProps = OnlyUnauthorizedRouteProps | RoledRouteProps;

export const RoutesGroup = ({
  onlyUnauthorized,
  allowed,
  isRoot,
}: RoutesGroupProps) => {
  const { isLoading, role } = useAppSelector(state => state.user);

  if (isLoading) {
    return null;
  }

  if (isRoot) {
    return <Outlet />;
  }

  if (onlyUnauthorized) {
    if (!role) {
      return <Outlet />;
    } else {
      return (
        <Navigate
          to="/"
          replace
        />
      );
    }
  }

  if (allowed === undefined) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return <Outlet />;
};
