import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid';
import './DataTable.scss';

const columns = [
    { field: 'id', headerName: 'Order Code', width: 130 },
    { field: 'product', headerName: 'Product', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    {
      field: 'email',
      headerName: 'User Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      cellClassName:(params) => `grid-${params.row.status}`

    },
  ];

  const rows = [
    { id: '#1123', product: 'Snow', date: '2020/11/03', email: 'dsdsdsdsd@yahoo.com',status: 'pending', userName: 'amin',phone:'434343434',paid:'30$',total:'67$' },
    { id: '#1123a', product: 'Lannister', date: '2022/09/13', email: 'wewdfg56@yahoo.com',status: 'paid', userName: 'maedeh',phone:'434343434',paid:'30$',total:'67$' },
    { id: '#1123b', product: 'Lannister', date: '2020/11/03', email: 'oioio87@yahoo.com',status: 'failed', userName: 'abbas',phone:'434343434',paid:'30$',total:'67$' },
    { id: '#1123c', product: 'Stark', date: '2020/02/03', email: 'tyjyuiuiu@yahoo.com',status: 'paid', userName: 'sara',phone:'434343434',paid:'30$',total:'67$'},
    { id: '#1123d', product: 'Targaryen', date: '2020/10/18', email: 'bvbf5@yahoo.com',status: 'paid' , userName: 'ali',phone:'434343434',paid:'30$',total:'67$'},
    { id: '#1123e', product: 'Melisandre', date: '2015/11/23', email: 'dwew2@yahoo.com',status: 'pending' , userName: 'hamid',phone:'434343434',paid:'30$',total:'67$'},
    { id: '#1123f', product: 'Clifford', date: '2018/01/12', email: 's45rtrtrtd@yahoo.com',status: 'paid', userName: 'maryam',phone:'434343434',paid:'30$',total:'67$' },
    { id: '#1123g', product: 'Frances', date: '2010/08/10', email: 'fdf656@yahoo.com',status: 'paid', userName: 'sina',phone:'434343434',paid:'30$',total:'67$' },
    { id: '#1123h', product: 'Roxie', date: '2020/07/08', email: 'jkoio98@yahoo.com',status: 'failed', userName: 'saeed',phone:'434343434',paid:'30$',total:'67$' },
  ];
  
  function CustomDataTable(props) {
    const {setOpen,setData,setDeleteOpen} = props;

    function handleClick(params,mode) {
      setOpen(true);
      setData({params:params,mode:mode})
   
    };

    function handleDeleteClick(params,mode) {
      setDeleteOpen(true);
      setData({params:params,mode:mode})
    }

    const actionColumns = [
      {
        field:'action', headerName : 'Actions', width: 130, renderCell : (params) =>{
          return (
            <div className='action-container'>
              <span onClick={()=>handleClick(params.row,'View')}><Tooltip title={<h1 style={{ fontSize: "1rem " }}>view</h1>}><RemoveRedEyeIcon/></Tooltip></span>
              <span onClick={()=>handleDeleteClick(params.row,'Delete')}><Tooltip title={<h1 style={{ fontSize: "1rem " }}>Delete</h1>}><DeleteIcon/></Tooltip></span>
            </div>
          )
        }
      }
    ];

    return (
      <div style={{ height: 380, width: '100%', padding :'3rem 2rem 1rem 2rem' }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumns)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
    );
}

export default CustomDataTable;