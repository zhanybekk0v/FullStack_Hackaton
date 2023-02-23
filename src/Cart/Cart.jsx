import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContextProvider';
import '../Cart/Cart.css'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { getCart, cart, deleteProductInCart, changeProductCount } = useCart()
  const navigate = useNavigate()

  React.useEffect(() => {
    getCart()
  }, [])



  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%', marginTop: '5rem' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'orange', fontSize: '24px' }} className="Table-Cell" >Picture</TableCell>
            <TableCell sx={{ color: 'orange', fontSize: '24px' }} className="Table-Cell" align="center">Name</TableCell>
            <TableCell sx={{ color: 'orange', fontSize: '24px' }} className="Table-Cell" align="center">Genre</TableCell>
            <TableCell sx={{ color: 'orange', fontSize: '24px' }} className="Table-Cell" align="center">Price</TableCell>
            <TableCell sx={{ color: 'orange', fontSize: '24px' }} className="Table-Cell" align="center">Что-то</TableCell>
            <TableCell sx={{ color: 'orange', fontSize: '24px' }} className="Table-Cell" align="center">-+</TableCell>
            <TableCell sx={{ color: 'orange', fontSize: '24px' }} className="Table-Cell" align="center">SubPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ fontSize:'20px', '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.item.preview} alt="" style={{ width: 200, height: 140 }} />
              </TableCell>
              <TableCell align="center" className='Table-user'>{row.item.title}</TableCell>
              <TableCell align="center" className='Table-user'>{row.item.brand}</TableCell>
              <TableCell align="center" className='Table-user'>{row.item.price}</TableCell>
              <TableCell align="center" className='Table-user'>{row.item.description}</TableCell>
              <TableCell align="center" className='Table-user'>
                <input
                  min={1}
                  max={20}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  type="number"
                  value={row.count}
                />
              </TableCell>
              <TableCell align="center" className='Table-user'>
                {row.subPrice}
              </TableCell>
              <TableCell align="center" color='primary'>
                <button onClick={() => deleteProductInCart(row.item.id)} style={{ padding: '5px 20px', borderRadius: 10, border: 'none', color: 'white', backgroundColor: 'red' }} >X</button>
              </TableCell>

            </TableRow>
          ))}
          <div style={{fontWeight:'200', margin: 20, marginRight: 20}}>
            <Button onClick={() => navigate('/orderForm')} align="center"  sx={{  fontFamily:'cursive', fontSize:'20px',backgroundColor: 'orange', color: 'rgb(219, 212, 201)' }} >BUY FOR {cart?.totalPrice} $</Button>
          </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
}