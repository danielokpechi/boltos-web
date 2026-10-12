import Redirect from '@/components/Redirect';
import { routes } from '@/data/nav.js';

// Old URL, kept working: the Immersive Platform is now Connect.
export default function Page() {
  return <Redirect to={routes.connect} />;
}
