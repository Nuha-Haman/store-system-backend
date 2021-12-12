import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';

export default function createEmotionCache() {

  // Create rtl cache
  return createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });
}
