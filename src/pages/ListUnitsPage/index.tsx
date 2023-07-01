import { useEffect, useState } from "react";

import { TitlePageDefault } from "../../components/shared/TitlePageDefault"
import { IUnit } from "../../types/IUnit";
import { deleteUnit, getUnit, getUnits } from "../../services/unitServices";


import { TableUnits } from "../../components/TableUnits";
import { AddUnitPage } from "..";


export const ListUnitsPage = () => {



  const [data, setData] = useState<IUnit[]>([]);
  const [unit, setUnit] = useState<IUnit | undefined>(undefined);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleOnDelete = async (id: number) => {
    await deleteUnit(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }



  const handleOnEdit = async (id: number) => {
    const response = await getUnit(id);
    setUnit(response);
    setIsEdit(!isEdit)

  }

  useEffect(() => {

    const getData = async () => {
      const response = await getUnits();

      setData(response);
    }

    getData();

  }, [])

  return (
    <>

      {
        isEdit ? (
          <AddUnitPage
            unit={unit}

          />
        ) : (
          <>

            <TitlePageDefault
              title='Listagem dos Unidades'
              description='Aqui temos a visualização das unidades ativas do projeto a serem componentizadas no site.'
            />

            <TableUnits
              handleOnDelete={handleOnDelete}
              handleOnEdit={handleOnEdit}
              units={data}
            />
          </>
        )
      }

    </>
  )
}
