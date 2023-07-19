import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { CarProps } from "../carList/types";
import { GridColDef } from '@mui/x-data-grid';
import DefaultButton from "../../atoms/defaultButton";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { RowEnd, StyledDataGridSection, StyledMain, SyledDataGrid } from "./styled";
import CustomizedAlert from "../../atoms/alert";



const AdminPage = () => {
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState<CarProps[] | []>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [refId, setRefId] = useState(0);
  const [emitAlert, setEmitAlert] = useState<boolean>(false)
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [alertType, setAlertType] = useState<"success" | "error" | "warning" | "info">('success')
  const handleEmitAlert = (message: string, type: "success" | "error" | "warning" | "info") => {
    setAlertMessage(message)
    setAlertType(type)
    setEmitAlert(true)
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, params: { row: { id: number }}) => {
    setRefId(params.row.id)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = (id: number) => {
    navigate(`/admin/carro/edicao/${id}`)
  }
  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3000/car/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') as string}`
      }
    })
      .then(() => {
        handleEmitAlert('Carro excluído com sucesso', 'success')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const columns: GridColDef[] = [
    { field: 'action', headerName: '', width: 120, renderCell: (params: { row: { id: number }}) => {
      return <div>
        <DefaultButton
          color="primary"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e, params)}
        >
          Ações
        </DefaultButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => handleEdit(refId)}>Editar</MenuItem>
          <MenuItem onClick={() => handleDelete(refId)}>Excluir</MenuItem>
        </Menu>
      </div>
      },
      align: 'center', headerAlign: 'center'
    },
    { field: 'id', headerName: 'ID', width: 90, align: 'center', headerAlign: 'center'},
    { field: 'name', headerName: 'Nome', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'brand', headerName: 'Marca', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'model', headerName: 'Modelo', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'city', headerName: 'Cidade', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'state', headerName: 'Estado', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'year', headerName: 'Ano', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'modelYear', headerName: 'Ano Modelo', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'km', headerName: 'Km', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'transmission', headerName: 'Câmbio', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'fuel', headerName: 'Combustível', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'color', headerName: 'Cor', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'paidIpva', headerName: 'IPVA Pago', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'paidLicensing', headerName: 'Licens. Pago', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'price', headerName: 'Preço', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'oldPrice', headerName: 'Preço Antigo', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'motorPower', headerName: 'Motor', width: 130, align: 'center', headerAlign: 'center' },
    { field: 'ports', headerName: 'Portas', width: 130, align: 'center', headerAlign: 'center' },
  ];

  useEffect(() => {
    axios.post(`http://localhost:3000/cars/paginated`, {
      page,
      itemsPerPage,
    })
    .then((response: AxiosResponse<{ total: number, cars: CarProps[]}>) => {
      setCars(response.data.cars);
      setTotal(response.data.total);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [page, itemsPerPage, cars]);

  return <StyledMain>
    <RowEnd>
      <DefaultButton
        onClick={() => navigate('/admin/carro/cadastro')}
      >
        Criar novo carro
      </DefaultButton>
    </RowEnd>
    <StyledDataGridSection>
    <SyledDataGrid
      rows={cars}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}

      pageSizeOptions={[5, 10, 20, 30, 40, 50]}
      rowSelection={false}
    />
    </StyledDataGridSection>
    <CustomizedAlert
        open={emitAlert}
        setOpen={setEmitAlert}
        type={alertType}
        message={alertMessage}
      />
  </StyledMain>;
};

export default AdminPage;
