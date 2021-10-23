import { checkBrowser } from 'helpers/functions/browser';
import { Browser } from 'helpers/types/browser.type';
import { useEffect, useState } from 'react';

const useBrowser = (): string => {
  const [browser, setBrowser] = useState<Browser>('NaB');

  useEffect(() => {
    if (window) {
      setBrowser(checkBrowser(window.navigator));
    }
  }, []);

  return browser;
};

export default useBrowser;
