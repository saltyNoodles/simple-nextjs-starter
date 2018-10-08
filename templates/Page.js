import styled, { injectGlobal } from 'styled-components';

import { Navigation } from '../components/Navigation';
import navItems from '../config/navigation';

const Page = ({ children }) => {
  return (
    <div>
      <Navigation items={navItems} brand={'Example App'} />
      <ContentArea>{children}</ContentArea>
    </div>
  );
};

export { Page };

const ContentArea = styled.div`
  padding: 20px;
  line-height: 1.4em;
  font-size: 14pt;
  max-width: 1000px;
  margin: auto;
`;
