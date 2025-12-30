import { useEffect } from 'react';

const SITE_NAME = 'SABAYSIS SPORTS & INFRA';

export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    if (pageTitle) {
      document.title = `${pageTitle} | ${SITE_NAME}`;
    } else {
      document.title = SITE_NAME;
    }
  }, [pageTitle]);
}


