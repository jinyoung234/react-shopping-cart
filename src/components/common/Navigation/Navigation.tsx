<<<<<<< HEAD
=======
import { isValidPathName } from '@components/common/Navigation/Navigation.util';
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
import { ROUTE_PATHS } from '@routes/route.constant';
import { useLocation, useNavigate } from 'react-router-dom';

import BackButton from '../BackButton/BackButton';

import * as Styled from './Navigation.styled';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

<<<<<<< HEAD
  return (
    <Styled.Navigation>
      {location.pathname === ROUTE_PATHS.root ? (
        <button onClick={() => navigate(ROUTE_PATHS.root)}>SHOP</button>
      ) : (
        <BackButton onClick={() => navigate(-1)} />
      )}
    </Styled.Navigation>
  );
=======
  const NAVIGATION_HEADER_MAP = {
    [ROUTE_PATHS.root]: <button onClick={() => navigate(ROUTE_PATHS.root)}>SHOP</button>,
    [ROUTE_PATHS.orderConfirm]: <BackButton onClick={() => navigate(-1)} />,
    [ROUTE_PATHS.paymentConfirm]: null,
  } as const;

  const NavigationHeader = isValidPathName(location.pathname) ? NAVIGATION_HEADER_MAP[location.pathname] : null;

  return <Styled.Navigation>{NavigationHeader}</Styled.Navigation>;
>>>>>>> 3d22656cc143f32ed4134e5211b3c83a6f84b320
};

export default Navigation;
