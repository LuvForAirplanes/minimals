import { Alert } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { IPaymentCard } from 'src/types/payment';
import { IAddressItem } from 'src/types/address';
import { IUserAccountBillingHistory } from 'src/types/user';

import AccountBillingPayment from './account-billing-payment';
import AccountBillingHistory from './account-billing-history';
import AccountBillingAddress from './account-billing-address';

// ----------------------------------------------------------------------

type Props = {
  plans: {
    subscription: string;
    price: number;
    primary: boolean;
  }[];
  cards: IPaymentCard[];
  invoices: IUserAccountBillingHistory[];
  addressBook: IAddressItem[];
};

export default function AccountBilling({ cards, plans, invoices, addressBook }: Props) {
  return (
    <>
      <Alert variant="outlined" severity="warning">
        These features will potentially be added in the future. Hang tight!
      </Alert>
      <Grid container spacing={5} disableEqualOverflow sx={{ pointerEvents: 'none', opacity: 0.4 }}>
        <Grid xs={12} md={8}>
          {/* <AccountBillingPlan plans={plans} cardList={cards} addressBook={addressBook} /> */}

          <AccountBillingPayment cards={cards} />

          <AccountBillingAddress addressBook={addressBook} />
        </Grid>

        <Grid xs={12} md={4}>
          <AccountBillingHistory invoices={invoices} />
        </Grid>
      </Grid>
    </>
  );
}
