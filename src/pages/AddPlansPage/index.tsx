
import { Form } from "../../components/Forms/Form"
import { Input } from "../../components/Forms/Input"
import { useForm, SubmitHandler } from 'react-hook-form'
import { createPlan, updatePlan } from "../../services/planServices"
import { IPlan } from "../../types/IPlan";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useEffect } from "react";

const schema = yup.object({
    cardImage: yup.string().required('Campo obrigatório'),
    titleCard: yup.string().required('Campo obrigatório'),
    titleColor: yup.string().required('Campo obrigatório'),
    planValue: yup.number().required('Campo obrigatório'),
    buttonColor: yup.string().required('Campo obrigatório'),
    textButtonColor: yup.string().required('Campo obrigatório'),
    iconButtonColor: yup.string().required('Campo obrigatório'),


}).required();


interface FormProps {
    plan?: IPlan;
}

export const AddPlansPage = ({ plan }: FormProps) => {

    const navigate = useNavigate();

    const initialValues = plan || {
        cardImage: '',
        titleCard: '',
        titleColor: '',
        planValue: 0,
        buttonColor: '',
        textButtonColor: '',
        iconButtonColor: '',
    }

    const { register, handleSubmit, reset, formState: { errors }, clearErrors } = useForm<IPlan>({
        defaultValues: initialValues,

        resolver: yupResolver(schema)
    })

    console.log(errors)

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
                    errors={errors}

                />
                <label className="flex gap-[3rem] mt-[3rem] w-full ">
                    <Input
                        name="titleCard"
                        register={register}
                        label='Título do Card'
                        classNameLabel="flex-1"
                        errors={errors}

                    />

                    <Input
                        name="titleColor"
                        register={register}
                        label='Cor do título'
                        width="12.8rem"
                        errors={errors}

                    />
                </label>
                <label className='flex gap-[3rem] mt-[3rem]'>

                    <Input
                        name="planValue"
                        register={register}
                        type="number"
                        label='Valor do plano (R$)'
                        classNameLabel="w-1/2
                        "
                        errors={errors}

                    />

                    <Input
                        name="buttonColor"
                        register={register}
                        label='Cor do botão'
                        classNameLabel="w-1/2"
                        errors={errors}

                    />

                </label>

                <label className='flex gap-[3rem] mt-[3rem]'>
                    <Input
                        name="textButtonColor"
                        register={register}
                        label="Cor do texto do botão"
                        classNameLabel="w-1/2"
                        errors={errors}


                    />

                    <Input
                        name="iconButtonColor"
                        register={register}
                        label="Cor do ícone do botão"
                        classNameLabel="w-1/2"
                        errors={errors}

                    />
                </label>
                <div className="flex justify-between mt-[3.6rem]">
                    <button className={`
                        w-[6.8rem] h-[3.52rem] rounded bg-[#F8475E] p-[0.4rem]
                        text-[#F6F6E9] font-700 text-[1.12rem] leading-3 shadow-sm
                         
                        `

                    }
                        onClick={() => {
                            reset()
                            clearErrors()
                        }}
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