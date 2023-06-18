
import { Form } from "../../components/Forms/Form"
import { Input } from "../../components/Forms/Input"

export const AddUnitPage = () => {
  return (
    <div className="w-full min-h-full flex items-center justify-center">

      <Form title="Adicionar Unidade">
        <Input
          label='Nome da unidade'
        />
        <label className="flex gap-[3rem] mt-[1.5rem] w-full ">
          <Input
            label='Endereço'
            classNameLabel="flex-1"
          />


        </label>
        <label className='flex gap-[3rem] mt-[1.5rem]'>

          <Input
            label='Cidade - Estado'
            classNameLabel="w-1/2"
          />



          <Input
            label='Responsável'
            classNameLabel="w-1/2"
          />

        </label>

        <label className='flex gap-[3rem] w-full mt-[1.5rem]'>
          <Input
            label="Email do responsável"
            classNameLabel="flex-1"

          />

        </label>
        <label className='flex gap-[3rem] mt-[1.5rem]'>

          <Input
            label='Cor dos títulos'
            classNameLabel="w-1/2"
          />



          <Input
            label='Cor do corpo do texto'
            classNameLabel="w-1/2"
          />

        </label>

        <div className="flex justify-between mt-[3.6rem]">
          <button className={`
                        w-[6.8rem] h-[3.52rem] rounded bg-[#F8475E] p-[0.4rem]
                        text-[#F6F6E9] font-700 text-[1.12rem] leading-3 shadow-sm
                         
                        `
          }>
            LIMPAR
          </button>
          <button className={`
                        w-[6.8rem] h-[3.52rem] rounded bg-[#00C172] p-[0.4rem]
                        text-[#F6F6E9] font-700 text-[1.12rem] leading-3 shadow-sm
                         
                    `}>
            SALVAR
          </button>
        </div>

      </Form>
    </div>

  )
}