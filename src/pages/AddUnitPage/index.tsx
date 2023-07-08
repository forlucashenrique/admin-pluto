
import { useForm, SubmitHandler } from "react-hook-form"
import { Form } from "../../components/Forms/Form"
import { Input } from "../../components/Forms/Input"
import { IUnit } from "../../types/IUnit"
import { createUnit, updateUnit  } from "../../services/unitServices";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  address: yup.string().required('Campo obrigatório'),
  cityState: yup.string().required('Campo obrigatório'),
  owner: yup.string().required('Campo obrigatório'),
  ownerEmail: yup.string().required('Campo obrigatório'),
  titleColor: yup.string().required('Campo obrigatório'),
  bodyTextColor: yup.string().required('Campo obrigatório'),


}).required();

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

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IUnit>({
    defaultValues: initialValues,
    resolver: yupResolver(schema)
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
          errors={errors}
          name="name"
          register={register}
          label='Nome da unidade'
        />
        <label className="flex gap-[3rem] mt-[1.5rem] w-full ">
          <Input
            errors={errors}
            name="address"
            register={register}
            label='Endereço'
            classNameLabel="flex-1"
          />

        </label>
        <label className='flex gap-[3rem] mt-[1.5rem]'>

          <Input
            errors={errors}
            name='cityState'
            register={register}
            label='Cidade - Estado'
            classNameLabel="w-1/2"
          />

          <Input
            errors={errors}
            name='owner'
            register={register}
            label='Responsável'
            classNameLabel="w-1/2"
          />

        </label>

        <label className='flex gap-[3rem] w-full mt-[1.5rem]'>
          <Input

            errors={errors}
            name="ownerEmail"
            register={register}
            label="Email do responsável"
            classNameLabel="flex-1"

          />

        </label>
        <label className='flex gap-[3rem] mt-[1.5rem]'>

          <Input
            errors={errors}
            name="titleColor"
            register={register}
            label='Cor dos títulos'
            classNameLabel="w-1/2"
          />

          <Input
            errors={errors}
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