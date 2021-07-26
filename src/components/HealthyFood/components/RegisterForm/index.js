import React, { useState, useEffect } from 'react';
import { Form, ButtonSubmit, Success } from './styled';

import { isValidCPF, cpfMask } from '../../../../utils/isValidCPF';
import { cepMask } from '../../../../utils/isValidCEP';

import useErrors from '../../../../hooks/useErrors'

import FormGroup from './components/FormGroup';
import Input from './components/Input';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [success, setSuccess] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = (name && date && cpf && cep && errors.length === 0)

  useEffect(() => {
    if (localStorage.getItem('@healthyfood/form')) {
      const {
        name,
        date,
        cpf,
        cep,
        street,
        neighborhood,
        city,
        uf,
      } = JSON.parse(localStorage.getItem('@healthyfood/form'))
      setName(name);
      setDate(date);
      setCpf(cpf);
      setCep(cep);
      setStreet(street);
      setNeighborhood(neighborhood);
      setCity(city);
      setUf(uf);
    }
  }, [])


  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Name is a invalid format' })
    } else {
      removeError('name')
    }
  }

  function handleDateChange(event) {
    setDate(event.target.value);

    if (!event.target.value) {
      setError({ field: 'date', message: 'Date is a invalid format' })
    } else {
      removeError('date')
    }
  }

  function handleCpfChange(event) {
    setCpf(event.target.value);

    if (event.target.value && !isValidCPF(event.target.value)) {
      setError({ field: 'cpf', message: 'CPF is a invalid format' })
    } else {
      removeError('cpf')
    }
  }

  function handleCepBlur(event) {
    const { value } = event.target;
    const cleanValue = value.replace('-', '')
    setCep(cleanValue);

    if (cep?.length !== 8) {
      setError({ field: 'cep', message: 'CEP is a invalid format' })
    } else {
      removeError('cep')

      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setStreet(data.logradouro);
          setNeighborhood(data.bairro);
          setCity(data.localidade);
          setUf(data.uf);
        })
        .catch(rejected => {
          setError({ field: 'cep', message: 'CEP is a invalid format' })
          console.clear()
        })
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true)

    localStorage.setItem('@healthyfood/form', JSON.stringify({
      'name': name,
      'date': date,
      'cpf': cpf,
      'cep': cep,
      'street': street,
      'neighborhood': neighborhood,
      'city': city,
      'uf': uf
    }))
  }

  if (success) {
    return (
      <Success>
        Data sent successfully, look for localStorage
        <ButtonSubmit onClick={() => setSuccess(false)}>
          Send form again
        </ButtonSubmit>
      </Success>
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type='text'
          label='Name *'
          onChange={handleNameChange}
          value={name}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('date')}>
        <Input
          type='date'
          label='Birthday *'
          onChange={handleDateChange}
          value={date}
          error={getErrorMessageByFieldName('date')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('cpf')}>
        <Input
          type='text'
          label='CPF *'
          onChange={handleCpfChange}
          value={cpfMask(cpf)}
          error={getErrorMessageByFieldName('cpf')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('cep')}>
        <Input
          type='text'
          label='CEP *'
          onChange={(event) => setCep(event.target.value)}
          value={cepMask(cep)}
          onBlur={handleCepBlur}
          error={getErrorMessageByFieldName('cep')}
          maxLength={8}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type='text'
          label='Street *'
          onChange={(event) => setStreet(event.target.value)}
          value={street}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type='text'
          label='Neighborhood *'
          onChange={(event) => setNeighborhood(event.target.value)}
          value={neighborhood}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type='text'
          label='City *'
          onChange={(event) => setCity(event.target.value)}
          value={city}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type='text'
          label='UF *'
          onChange={(event) => setUf(event.target.value)}
          value={uf}
        />
      </FormGroup>

      <ButtonSubmit type='submit' disabled={!isFormValid}>Register</ButtonSubmit>
    </Form>
  );
}
