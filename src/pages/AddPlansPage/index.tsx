
import { Form } from "../../components/Forms/Form"
import { Input } from "../../components/Forms/Input"
import {useForm, SubmitHandler} from 'react-hook-form'
import { createPlan } from "../../services/planServices"

interface FormInput {
    cardImage: string;
    titleCard: string;
    titleColor: string;
    planValue: string;
    buttonColor: string;
    textButtonColor: string;
    iconButtonColor: string;

}

export const AddPlansPage = () => {
    const {register, handleSubmit} = useForm<FormInput>({
        defaultValues: {
            cardImage: '',
            titleCard: '',
            titleColor: '',
            planValue: '',
            buttonColor: '',
            textButtonColor: '',
            iconButtonColor: '',
        }
    })

    const onSubmit: SubmitHandler<FormInput> = async (data) => {
        console.log(data);
        
        const newPlan = await createPlan(data);
        console.log(newPlan);
        
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
                    }>
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