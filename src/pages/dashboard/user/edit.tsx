import { Helmet } from 'react-helmet-async';

import { UserEditView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserEditPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: User Edit</title>
      </Helmet>

      <UserEditView />
    </>
  );
}
