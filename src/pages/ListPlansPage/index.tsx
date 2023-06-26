import { useQuery } from "@tanstack/react-query"
import { TableSystem } from "../../components/Table"
import { TitlePageDefault } from "../../components/shared/TitlePageDefault"
import { getPlans } from "../../services/planServices"

export const ListPlansPage = () => {


  const { data, isPending, error } = useQuery({
    queryKey: ['plans'],
    queryFn: getPlans,
    staleTime: 1000 * 60 * 5 // 5 minutos
  })


  if (isPending) return <p>Loading...</p>

  return (
    <>
      <TitlePageDefault 
        title='Listagem dos planos'
        description='Aqui temos a visualização tabelas dos componentes de planos de doação a serem aplicados no site.'
      />

      <TableSystem 
        plans={data}
      />      
    </>
  )
}
