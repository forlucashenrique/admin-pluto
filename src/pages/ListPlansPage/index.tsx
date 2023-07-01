
import { TablePlans } from "../../components/TablePlans"
import { TitlePageDefault } from "../../components/shared/TitlePageDefault"
import { getPlans, deletePlan, updatePlan, getPlan } from "../../services/planServices"
import { useEffect, useState } from "react"
import { IPlan } from "../../types/IPlan"
import { AddPlansPage } from ".."

export const ListPlansPage = () => {


  const [data, setData] = useState<IPlan[]>([]);
  const [plan, setPlan] = useState<IPlan | undefined>(undefined);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleOnDelete = async (id: number) => {
    await deletePlan(id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }

  

  const handleOnEdit = async (id: number) => {
    const response = await getPlan(id);
    setPlan(response);
    setIsEdit(!isEdit)

  }

  useEffect(() => {

    const getData = async () => {
      const response = await getPlans();

      setData(response);
    }

    getData();

  }, [])



  return (
    <>

      {
        isEdit ? (
          <AddPlansPage
            plan={plan}
          />
        ) : (
          <>
            <TitlePageDefault
              title='Listagem dos planos'
              description='Aqui temos a visualização tabelas dos componentes de planos de doação a serem aplicados no site.'
            />
            <TablePlans
              
              plans={data.length > 0 ? data : []}
              handleOnDelete={handleOnDelete}
              handleOnEdit={handleOnEdit}
            />
          </>

        )
      }


    </>
  )
}
