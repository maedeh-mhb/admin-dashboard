import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './PieChart.scss';

const data = [
  {
    month: 'Jan',
    orders: 100,
    sales: 20,
    
  },
  {
    month: 'Feb',
    orders: 30,
    sales: 10,
    
  },
  {
    month: 'Mar',
    orders: 40,
    sales: 0,
    
  },
  {
    month: 'Apr',
    orders: 50,
    sales: 4,
    
  },
  {
    month: 'May',
    orders: 70,
    sales: 6,
    
  },
  {
    month: 'Jun',
    orders: 14,
    sales: 8,
    
  },
  {
    month: 'Jul',
    orders: 58,
    sales: 24,
    
  },
  {
    month: 'Aug',
    orders: 32,
    sales: 10,
    
  },
  {
    month: 'Sep',
    orders: 45,
    sales: 8,
    
  },
  {
    month: 'Oct',
    orders: 20,
    sales: 9,
    
  },
  {
    month: 'Nov',
    orders: 68,
    sales: 12,
    
  },
  {
    month: 'Dec',
    orders: 43,
    sales: 3,
    
  },
];

function SimpleChart(props) {
    
    return (
        <ResponsiveContainer aspect={2} >
        <LineChart
        width={200}
        height={200}
        data={data}
        margin={{
          top: 30,
          right:40,
          
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.3}/>
        <XAxis dataKey="month" stroke="#9b9ba0" tick={{fontSize: '10rem'}} style={{
        fontSize: '1.6rem',
        fontWeight:'bold'
        
    }}/>
        <YAxis stroke="#9b9ba0" tick={{fontSize: '3rem'}} style={{
        fontSize: '1.6rem',
        fontWeight:'bold'
        
    }}/>
        <Tooltip/>
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="orders" stroke="rgb(114, 168, 151)" />
      </LineChart>
        </ResponsiveContainer>
      );
}

export default SimpleChart;