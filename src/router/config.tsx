
import { RouteObject } from 'react-router-dom';
import Home from '../pages/home/page';
import Nearby from '../pages/nearby/page';
import Community from '../pages/community/page';
import Profile from '../pages/profile/page';
import Friends from '../pages/friends/page';
import PopularPlaces from '../pages/popular-places/page';
import Surveys from '../pages/surveys/page';
import SurveyDetail from '../pages/survey-detail/page';
import Chat from '../pages/chat/page';
import Reviews from '../pages/reviews/page';
import Saved from '../pages/saved/page';
import Settings from '../pages/settings/page';
import FAQ from '../pages/faq/page';
import Privacy from '../pages/privacy/page';
import Terms from '../pages/terms/page';
import NotFound from '../pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/nearby',
    element: <Nearby />,
  },
  {
    path: '/community',
    element: <Community />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/friends',
    element: <Friends />,
  },
  {
    path: '/popular-places',
    element: <PopularPlaces />,
  },
  {
    path: '/surveys',
    element: <Surveys />,
  },
  {
    path: '/survey/:id',
    element: <SurveyDetail />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/reviews',
    element: <Reviews />
  },
  {
    path: '/saved',
    element: <Saved />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '/faq',
    element: <FAQ />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
