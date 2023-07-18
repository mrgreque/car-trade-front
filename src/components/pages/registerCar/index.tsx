/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react"
import DefaultInput from "../../atoms/defaultInput"
import InternalContainer from "../../organism/container"
import FormInColumn from "../../organism/formInColumn"
import { Column, Row, SpacedRow, Spacer } from "../../global/styled"
import CarCard from '../../molecules/card';
import CardTitle from "../../atoms/cardTitle"
import DefaultSelect from "../../atoms/defautSelect"
import { StyledArticlePreview, StyledCardPreview } from "./styled"
import axios from "axios"
import { CarProps } from "../carList/types"

const brazilStates = [
  { value: 'AC', label: 'Acre' },
  { value: 'AL', label: 'Alagoas' },
  { value: 'AP', label: 'Amapá' },
  { value: 'AM', label: 'Amazonas' },
  { value: 'BA', label: 'Bahia' },
  { value: 'CE', label: 'Ceará' },
  { value: 'DF', label: 'Distrito Federal' },
  { value: 'ES', label: 'Espírito Santo' },
  { value: 'GO', label: 'Goiás' },
  { value: 'MA', label: 'Maranhão' },
  { value: 'MT', label: 'Mato Grosso' },
  { value: 'MS', label: 'Mato Grosso do Sul' },
  { value: 'MG', label: 'Minas Gerais' },
  { value: 'PA', label: 'Pará' },
  { value: 'PB', label: 'Paraíba' },
  { value: 'PR', label: 'Paraná' },
  { value: 'PE', label: 'Pernambuco' },
  { value: 'PI', label: 'Piauí' },
  { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'RN', label: 'Rio Grande do Norte' },
  { value: 'RS', label: 'Rio Grande do Sul' },
  { value: 'RO', label: 'Rondônia' },
  { value: 'RR', label: 'Roraima' },
  { value: 'SC', label: 'Santa Catarina' },
  { value: 'SP', label: 'São Paulo' },
  { value: 'SE', label: 'Sergipe' },
  { value: 'TO', label: 'Tocantins' },
];

const motorPowers = [
  { value: '1.0', label: '1.0' },
  { value: '1.4', label: '1.4' },
  { value: '1.6', label: '1.6' },
  { value: '1.8', label: '1.8' },
  { value: '2.0', label: '2.0' },
  { value: '2.2', label: '2.2' },
  { value: '2.4', label: '2.4' },
  { value: '2.6', label: '2.6' },
  { value: '2.8', label: '2.8' },
  { value: '3.0', label: '3.0' },
  { value: '3.2', label: '3.2' },
  { value: '3.4', label: '3.4' },
  { value: '3.6', label: '3.6' },
  { value: '3.8', label: '3.8' },
  { value: '4.0', label: '4.0' },
  { value: '4.2', label: '4.2' },
  { value: '4.4', label: '4.4' },
  { value: '4.6', label: '4.6' },
  { value: '4.8', label: '4.8' },
  { value: '5.0', label: '5.0' },
  { value: 'SuperCar', label: 'Super Carro' },
];

const transmissions = [
  { value: 'Manual', label: 'Manual' },
  { value: 'Automático', label: 'Automático' },
  { value: 'Semi-Automático', label: 'Semi-Automático' },
];

const fuels = [
  { value: 'Gasolina', label: 'Gasolina' },
  { value: 'Álcool', label: 'Álcool' },
  { value: 'Flex', label: 'Flex' },
  { value: 'Diesel', label: 'Diesel' },
  { value: 'Elétrico', label: 'Elétrico' },
  { value: 'Híbrido', label: 'Híbrido' },
];

const yesOrNo = [
  { value: true, label: 'Sim' },
  { value: false, label: 'Não' },
];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      // resolve(base64String.split(',')[1]);
      resolve(base64String);
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file as base64'));
    };
    reader.readAsDataURL(file);
  });
}

const RegisterCar = () => {
  const [name, setName] = useState('')
  const [model, setModel] = useState('')
  const [brand, setBrand] = useState('')
  const [year, setYear] = useState(0)
  const [km, setKm] = useState(0)
  const [price, setPrice] = useState(0)
  const [city, setCity] = useState('')
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const [ports, setPorts] = useState(0)
  const [transmission, setTransmission] = useState('')
  const [fuel, setFuel] = useState('')
  const [modelYear, setModelYear] = useState(0)
  const [motorPower, setMotorPower] = useState('')
  const [paidIpva, setPaidIpva] = useState(false)
  const [paidLicensing, setPaidLicensing] = useState(false)
  const [state, setState] = useState('')
  const [principalImage, setPrincipalImage] = useState('/not_image_2.jpg')
  const [oldPrice, setOldPrice] = useState(0)

  const requiredFields: string[] = [
    'name',
    'brand',
    'model',
    'city',
    'state',
    'year',
    'modelYear',
    'km',
    'transmission',
    'fuel',
    'color',
    'paidIpva',
    'paidLicensing',
    'price',
    'principalImage',
    'motorPower',
    'ports',
    'description',
  ]

  const handleSaveImage = async (e: any) => {
    e.preventDefault();
    const file = e.target.files[0] as File;
    if (file && file.size <= 10 * 1024 * 1024) {
      const base64String = await fileToBase64(file);
      setPrincipalImage(base64String)
    } else {
      alert('File size must be less than or equal to 10MB');
    }
  }

  const validateRequiredFields = async (car: CarProps) => {
    for await (const field of requiredFields) {
      if (car[field] === '' || car[field] === 0 || car[field] === undefined || car[field] === '/not_image_2.jpg') {
        return false
      }
    }
    return true
  }

  const resetForm = () => {
    setName('')
    setModel('')
    setBrand('')
    setYear(0)
    setKm(0)
    setPrice(0)
    setCity('')
    setColor('')
    setDescription('')
    setPorts(0)
    setTransmission('')
    setFuel('')
    setModelYear(0)
    setMotorPower('')
    setPaidIpva(false)
    setPaidLicensing(false)
    setState('')
    setPrincipalImage('/not_image_2.jpg')
    setOldPrice(0)
    const inpFile = document.getElementById('inpFile') as HTMLInputElement;
    inpFile.value = ''
  }


  const handleSaveCar = async (e: any) => {
    e.preventDefault();
    const car = {
      name,
      model,
      brand,
      year,
      km,
      price,
      city,
      color,
      description,
      ports,
      transmission,
      fuel,
      modelYear,
      motorPower,
      paidIpva,
      paidLicensing,
      state,
      principalImage,
      oldPrice,
    }
    console.log(car)
    const requiredFieldsValidated = await validateRequiredFields(car as CarProps)
    if (!requiredFieldsValidated) {
      alert('Preencha todos os campos obrigatórios corretamente!')
      return
    }
    // axios.post('http://localhost:3000/car', car, { headers: {Authorization: `Bearer ${localStorage.getItem('token') as string}`}})
    axios.post('http://localhost:3000/car', car, { headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIyIiwiaWF0IjoxNjg5NzE4NDY1LCJleHAiOjE2ODk3MTk2NjV9.Qw0qPMuFOLjPtaeY2ftyHJ0TVswbwtpN3WitMUX1c6o`}})
      .then((response) => {
        console.log(response.data)
        alert('Carro cadastrado com sucesso!')
        resetForm()
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao cadastrar carro!')
      })
  }

  useEffect(() => {
    axios.get('http://localhost:3000/car/1', { params: { id: 1 }})
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <main>
      <InternalContainer>
        <Column>
          <Row
            width="100%"
          >
            <CardTitle text="Cadastro de Carro" />
          </Row>
          <Row
            width="100%"
          >
            <StyledCardPreview>
              <StyledArticlePreview>
                <CardTitle text="Preview do Anúncio" />
                <CarCard
                  car={{
                    name,
                    brand,
                    model,
                    year,
                    modelYear,
                    km,
                    price,
                    color,
                    description,
                    ports,
                    transmission,
                    fuel,
                    motorPower,
                    paidIpva,
                    paidLicensing,
                    state,
                    principalImage,
                    oldPrice,
                    city,
                    id: '',
                  }}
                />
              </StyledArticlePreview>
            </StyledCardPreview>
          </Row>
          <FormInColumn width="100%">
            <SpacedRow>
              <DefaultInput label="Nome" inputValue={name} setDefaultInput={setName} size="small" variant="outlined" flex={2} />
              <Spacer width="10px" height="1px" />
              <DefaultInput label="Ano" inputValue={year} setDefaultInput={setYear} size="small" variant="outlined" flex={0.95} type="number" />
              <Spacer width="10px" height="1px" />
              <DefaultInput label="Modelo Ano" inputValue={modelYear} setDefaultInput={setModelYear} size="small" variant="outlined" type="number" />
            </SpacedRow>
            <Spacer width="0px" height="5px" />
            <SpacedRow>
              <DefaultInput label="Marca" inputValue={brand} setDefaultInput={setBrand} size="small" variant="outlined" />
              <Spacer width="10px" height="1px" />
              <DefaultInput label="Modelo" inputValue={model} setDefaultInput={setModel} size="small" variant="outlined" />
            </SpacedRow>
            <Spacer width="0px" height="5px" />
            <SpacedRow>
              <DefaultInput label="Quilometragem" inputValue={km} setDefaultInput={setKm} size="small" variant="outlined" type="number" />
              <Spacer width="10px" height="1px" />
              <DefaultInput label="Cor" inputValue={color} setDefaultInput={setColor} size="small" variant="outlined" />
            </SpacedRow>
            <Spacer width="0px" height="5px" />
            <SpacedRow>
              <DefaultSelect valueOptions={transmissions} label="Transmissão" inputValue={transmission} setDefaultInput={setTransmission} size="small" variant="outlined" width="50%" />
              <Spacer width="10px" height="1px" />
              <DefaultSelect valueOptions={fuels} label="Combustível" inputValue={fuel} setDefaultInput={setFuel} size="small" variant="outlined" width="50%" />
            </SpacedRow>
            <SpacedRow>
              <DefaultInput label="Portas" inputValue={ports} setDefaultInput={setPorts} size="small" variant="outlined" type="number" />
              <Spacer width="10px" height="1px" />
              <DefaultSelect valueOptions={motorPowers} label="Potência do Motor" inputValue={motorPower} setDefaultInput={setMotorPower} size="small" variant="outlined" width="49.6%" />
            </SpacedRow>
            <SpacedRow>
              <DefaultInput label="Preço" inputValue={price} setDefaultInput={setPrice} size="small" variant="outlined" type="number" />
              <Spacer width="10px" height="1px" />
              <DefaultInput label="Preço de Desconto" inputValue={oldPrice} setDefaultInput={setOldPrice} size="small" variant="outlined" type="number" />
            </SpacedRow>
            <SpacedRow>
              <DefaultSelect valueOptions={yesOrNo} label="IPVA pago" inputValue={paidIpva} setDefaultInput={setPaidIpva} size="small" variant="outlined" width="50%" />
              <Spacer width="10px" height="1px" />
              <DefaultSelect valueOptions={yesOrNo} label="Licenciamento pago" inputValue={paidLicensing} setDefaultInput={setPaidLicensing} size="small" variant="outlined" width="50%" />
            </SpacedRow>
            <SpacedRow>
              <DefaultInput label="Cidade" inputValue={city} setDefaultInput={setCity} size="small" variant="outlined" />
              <Spacer width="10px" height="1px" />
              <DefaultSelect valueOptions={brazilStates} label="Estado" inputValue={state} setDefaultInput={setState} size="small" variant="outlined" width="49.6%" />
            </SpacedRow>
            <SpacedRow>
              <DefaultInput label="Descrição" inputValue={description} setDefaultInput={setDescription} size="small" variant="outlined" multiline rows={4} />
            </SpacedRow>
            <SpacedRow>
              <input type="file" id="inpFile" onChange={handleSaveImage}/>
            </SpacedRow>
            <button onClick={handleSaveCar}>Cadastrar</button>
          </FormInColumn>
        </Column>

      </InternalContainer>
    </main>
  )
}

export default RegisterCar