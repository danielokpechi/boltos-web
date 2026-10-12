import Redirect from '@/components/Redirect';
import { routes } from '@/data/nav.js';

// Old URL, kept working: Custom Bolt is now Bolt One.
export default function Page() {
  return <Redirect to={routes.boltOne} />;
}
