
import { FormAddPlan } from "../../components/Forms/FormAddPlan"
import { Input } from "../../components/Forms/Input"

export const AddPlansPage = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">

            <FormAddPlan title="Adicionar Plano"> 
                <Input
                    label='Link da imagem'

                />
                <label className="flex gap-[3rem] mt-[3rem] w-full ">
                    <Input
                        label='Título do Card'
                        classNameLabel="flex-1"
                    />

                    <Input
                        label='Cor do título'
                        width="12.8rem"
                    />
                </label>
                <label className='flex gap-[3rem] mt-[3rem]'>

                    <Input
                        label='Valor do plano (R$)'
                        classNameLabel="w-1/2
                        "
                    />



                    <Input
                        label='Cor do botão'
                        classNameLabel="w-1/2"
                    />

                </label>

                <label className='flex gap-[3rem] mt-[3rem]'>
                    <Input
                        label="Cor do texto do botão"
                        classNameLabel="w-1/2"

                    />

                    <Input 
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
                    <button className={`
                        w-[6.8rem] h-[3.52rem] rounded bg-[#00C172] p-[0.4rem]
                        text-[#F6F6E9] font-700 text-[1.12rem] leading-3 shadow-sm
                         
                    `}>
                        SALVAR
                    </button>
                </div>

            </FormAddPlan>
        </div>

    )
}