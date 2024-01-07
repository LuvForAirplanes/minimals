import { useState } from 'react';
import { useQuery } from '@apollo/client';

import Box from '@mui/material/Box';
import { Select, MenuItem, Pagination, Typography } from '@mui/material';

import { getSocialUsersQuery } from 'src/graphql/queries/socialUsers';
import {
  SocialUsersQuery,
  SocialUserFragment,
  SocialUsersQueryVariables,
} from 'src/graphql/types/graphql';

import UserCard from './user-card';

export default function UserCardList() {
  const [page, setPage] = useState(1);
  const options = [21, 42, 84];
  const [pageSize, setPageSize] = useState<number>(21);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data } = useQuery<SocialUsersQuery, SocialUsersQueryVariables>(getSocialUsersQuery);

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {data?.offsetUsers?.items?.map((user) => (
          <UserCard key={(user as SocialUserFragment).id} user={user as SocialUserFragment} />
        ))}
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 25,
        }}
      >
        <Typography>{data?.totalUsers} Users</Typography>
        <Box style={{ display: 'flex' }}>
          <Select
            value={pageSize}
            size="small"
            onChange={(e) => setPageSize(e.target.value as number)}
          >
            {options.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
          <Pagination
            sx={{ marginTop: '4px', marginLeft: 2 }}
            count={10}
            page={page}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </>
  );
}
