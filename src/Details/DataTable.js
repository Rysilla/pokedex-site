import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  number: number,
) {
  return { name, number};
}



export default function BasicTable({hp, attack, defense, specialAttack, specialDefense, speed}) {

    const rows = [
        createData('HP', hp),
        createData('Attack', attack),
        createData('Defense', defense),
        createData('Special Attack', specialAttack),
        createData('Special Defense', specialDefense),
        createData('Speed', speed),
      ];
    return (
        <TableContainer >
        <Table sx={{ minWidth: "30vw" }} aria-label="simple table">
            {/* <TableHead>
            <TableRow>
                <TableCell>Stat</TableCell>
                <TableCell align="right">Number</TableCell>
            </TableRow>
            </TableHead> */}
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right" sx={{fontSize: "1rem"}}>{row.number}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
