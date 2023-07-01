
import { Form } from "../../components/Forms/Form"
import { Input } from "../../components/Forms/Input"
import { useForm, SubmitHandler } from 'react-hook-form'
import { createPlan, updatePlan } from "../../services/planServices"
import { IPlan } from "../../types/IPlan";
import { useNavigate } from "react-router-dom";




interface FormProps {
    plan?: IPlan;
}

export const AddPlansPage = ({ plan }: FormProps) => {

    const navigate = useNavigate();

    const initialValues = plan || {
        cardImage: '',
        titleCard: '',
        titleColor: '',
        planValue: '',
        buttonColor: '',
        textButtonColor: '',
        iconButtonColor: '',
    }

    const { register, handleSubmit, reset } = useForm<IPlan>({
        defaultValues: initialValues
    })

    const onSubmit: SubmitHandler<IPlan> = async (data) => {
        if (plan) {
            await updatePlan(data);
            window.location.reload();
        } else {
            await createPlan(data);
        }
    }

    return (
        <div className="w-full h-full flex items-center justify-center">

            <Form title="Adicionar Plano" handleOnSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="cardImage"
                    register={register}
                    label='Link da imagem'

                />
                <label className="flex gap-[3rem] mt-[3rem] w-full ">
                    <Input
                        name="titleCard"
                        register={register}
                        label='Título do Card'
                        classNameLabel="flex-1"
                    />

                    <Input
                        name="titleColor"
                        register={register}
                        label='Cor do título'
                        width="12.8rem"
                    />
                </label>
                <label className='flex gap-[3rem] mt-[3rem]'>

                    <Input
                        name="planValue"
                        register={register}
                        label='Valor do plano (R$)'
                        classNameLabel="w-1/2
                        "
                    />

                    <Input
                        name="buttonColor"
                        register={register}
                        label='Cor do botão'
                        classNameLabel="w-1/2"
                    />

                </label>

                <label className='flex gap-[3rem] mt-[3rem]'>
                    <Input
                        name="textButtonColor"
                        register={register}
                        label="Cor do texto do botão"
                        classNameLabel="w-1/2"

                    />

                    <Input
                        name="iconButtonColor"
                        register={register}
                        label="Cor do ícone do botão"
                        classNameLabel="w-1/2"
                    />
                </label>
                <div className="flex justify-between mt-[3.6rem]">
                    <button className={`
                        w-[6.8rem] h-[3.52rem] rounded bg-[#F8475E] p-[0.4rem]
                        text-[#F6F6E9] font-700 text-[1.12rem] leading-3 shadow-sm
                         
                        `

                    }
                        onClick={() => reset()}
                    >

                        LIMPAR
                    </button>
                    <button
                        type="submit"
                        className={`
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