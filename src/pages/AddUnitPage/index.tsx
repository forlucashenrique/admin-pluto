
import { useForm, SubmitHandler } from "react-hook-form"
import { Form } from "../../components/Forms/Form"
import { Input } from "../../components/Forms/Input"
import { IUnit } from "../../types/IUnit"

import { createUnit, updateUnit } from "../../services/unitServices"

interface FormProps {
  unit?: IUnit;

}

export const AddUnitPage = ({ unit }: FormProps) => {

  const initialValues = unit || {
    name: '',
    address: '',
    cityState: '',
    owner: '',
    ownerEmail: '',
    titleColor: '',
    bodyTextColor: '',
  }

  const { register, handleSubmit, reset } = useForm<IUnit>({
    defaultValues: initialValues
  })

  const onSubmit: SubmitHandler<IUnit> = async (data) => {
    if (unit) {

      await updateUnit(data);
      window.location.reload();
    } else {
      await createUnit(data);
    }
  }


  return (
    <div className="w-full min-h-full flex items-center justify-center">

      <Form title="Adicionar Unidade" handleOnSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          register={register}
          label='Nome da unidade'
        />
        <label className="flex gap-[3rem] mt-[1.5rem] w-full ">
          <Input
            name="address"
            register={register}
            label='Endereço'
            classNameLabel="flex-1"
          />

        </label>
        <label className='flex gap-[3rem] mt-[1.5rem]'>

          <Input
            name='cityState'
            register={register}
            label='Cidade - Estado'
            classNameLabel="w-1/2"
          />

          <Input
            name='owner'
            register={register}
            label='Responsável'
            classNameLabel="w-1/2"
          />

        </label>

        <label className='flex gap-[3rem] w-full mt-[1.5rem]'>
          <Input
            name="ownerEmail"
            register={register}
            label="Email do responsável"
            classNameLabel="flex-1"

          />

        </label>
        <label className='flex gap-[3rem] mt-[1.5rem]'>

          <Input
            name="titleColor"
            register={register}
            label='Cor dos títulos'
            classNameLabel="w-1/2"
          />

          <Input
            name="bodyTextColor"
            register={register}
            label='Cor do corpo do texto'
            classNameLabel="w-1/2"
          />

        </label>

        <div className="flex justify-between mt-[3.6rem]">
          <button
            className={`
                        w-[6.8rem] h-[3.52rem] rounded bg-[#F8475E] p-[0.4rem]
                        text-[#F6F6E9] font-700 text-[1.12rem] leading-3 shadow-sm
                         
                        `
            }
            onClick={() => reset()}
          >
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