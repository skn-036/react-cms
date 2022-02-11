import React from 'react';
import LayoutHorizontal from './layouts/LayoutHorizontal';
import LayoutVertical from './layouts/LayoutVertical';
import { theme, layout } from './themeConfig';

const App: React.FC = () => {
  (theme === 'dark') && document.body.classList.add('dark-layout');
  return (
      (layout === 'horizontal') ? (
        <LayoutHorizontal />
      ) : (
        <LayoutVertical />
      )
  );
}

export default App;
