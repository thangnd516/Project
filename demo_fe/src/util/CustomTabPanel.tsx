import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{border:" 1px solid #eeeeee",margin: "0px 326px"}}
    >
      {value === index && (
        <Box sx={{ p: 3, maxWidth: '900px', mx: 'auto' }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsPolicy() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, paddingBottom: "0",margin: "0px 326px", borderColor: 'divider', display: 'flex', justifyContent: 'center' , padding: "20px", border : "1px solid #eeeeee" }}>
        <Tabs value={value} onChange={handleChange} aria-label="policy tabs" centered>
          <Tab label="Shipping Policy" {...a11yProps(0)} />
          <Tab label="Returns Policy" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <Typography variant="body1" gutterBottom>
          At our Company, we understand the importance of timely delivery. We offer a variety of shipping options to suit your needs, including standard, expedited, and express shipping.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our dedicated team works diligently to process and dispatch your orders promptly, aiming to deliver them to your doorstep within the estimated timeframe.
        </Typography>
        <ul style={{ paddingLeft: 20, listStyle: 'disc' }}>
          <li>Dispatch: Within 24 Hours</li>
          <li>Free shipping across all products on a minimum purchase of $99.</li>
          <li>International delivery time: 5 to 7 business days</li>
          <li>Cash on delivery might be available</li>
          <li>Easy 30 days returns and exchanges</li>
        </ul>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Please note that delivery times are estimates and may vary depending on factors such as product availability, destination, and carrier delay.
        </Typography>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Typography variant="body1" gutterBottom>
          We want you to be completely satisfied with your purchase from our website. If for any reason you are not entirely happy with your order, we're here to help.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Certain exclusions and conditions may apply, so we encourage you to review our detailed return policy for more information.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Rest assured, our goal is to ensure your complete satisfaction with every purchase you make from our website.
        </Typography>
        <ul style={{ paddingLeft: 20, listStyle: 'disc' }}>
          <li>Returned items must be unused, undamaged, and in the same condition as received.</li>
          <li>Original tags, labels, and packaging must be intact and included with the returned item.</li>
          <li>Proof of purchase (order confirmation or receipt) is required for all returns.</li>
        </ul>
      </CustomTabPanel>
    </Box>
  );
}
